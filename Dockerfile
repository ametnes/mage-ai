FROM python:3.10-bookworm AS builder
COPY . /home/mage_ai

RUN cd /home/mage_ai && python setup.py sdist bdist_wheel

FROM python:3.10-bookworm
LABEL description="Deploy Mage on ECS"
USER root

ARG UID=7554
ARG GID=7554
ARG UNAME=mageai

ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND=noninteractive

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Mage
COPY ./mage_ai/server/constants.py /tmp/constants.py

## Startup Script
COPY --chmod=+x ./scripts/install_other_dependencies.py ./scripts/run_app.sh /mageai/app/
COPY requirements.txt /tmp/requirements.txt
COPY --from=builder /home/mage_ai/dist /tmp/dist

## System Packages
RUN \
  curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
  curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
  apt-get -y update && \
  ACCEPT_EULA=Y apt-get -y install --no-install-recommends \
    # NFS dependencies
    nfs-common \
    # odbc dependencies
    msodbcsql18\
    unixodbc-dev \
    # R
    r-base && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
## R Packages
  R -e "install.packages('pacman', repos='http://cran.us.r-project.org')" && \
  R -e "install.packages('renv', repos='http://cran.us.r-project.org')" && \
## Python Packages
  pip3 install --no-cache-dir sparkmagic && \
  mkdir ~/.sparkmagic && \
  curl https://raw.githubusercontent.com/jupyter-incubator/sparkmagic/master/sparkmagic/example_config.json > ~/.sparkmagic/config.json && \
  sed -i 's/localhost:8998/host.docker.internal:9999/g' ~/.sparkmagic/config.json && \
  jupyter-kernelspec install --user "$(pip3 show sparkmagic | grep Location | cut -d' ' -f2)/sparkmagic/kernels/pysparkkernel" && \
# Mage integrations and other related packages
  pip3 install --no-cache-dir "git+https://github.com/wbond/oscrypto.git@d5f3437ed24257895ae1edd9e503cfb352e635a8" && \
  pip3 install --no-cache-dir "git+https://github.com/mage-ai/singer-python.git#egg=singer-python" && \
  pip3 install --no-cache-dir "git+https://github.com/mage-ai/google-ads-python.git#egg=google-ads" && \
  pip3 install --no-cache-dir "git+https://github.com/mage-ai/dbt-mysql.git#egg=dbt-mysql" && \
  pip3 install --no-cache-dir "git+https://github.com/mage-ai/dbt-synapse.git#egg=dbt-synapse" && \
  pip3 install --no-cache-dir "git+https://github.com/mage-ai/mage-ai.git#egg=mage-integrations&subdirectory=mage_integrations" && \
  # Requirements
  pip3 install --no-cache-dir -r /tmp/requirements.txt && \
  rm /tmp/requirements.txt && \
  # Install Mage
  tag=$(tail -n 1 /tmp/constants.py) && \
  VERSION=$(echo "$tag" | tr -d "'") && \
  pip3 install --no-cache-dir /tmp/dist/mage-ai-$VERSION.tar.gz && \
    pip3 install "mage-ai[azure]" "mage-ai[clickhouse]" "mage-ai[dbt]" "mage-ai[google-cloud-storage]" "mage-ai[hdf5]" "mage-ai[mysql]" "mage-ai[postgres]" "mage-ai[redshift]" "mage-ai[s3]" "mage-ai[snowflake]" "mage-ai[spark]" "mage-ai[streaming]"
  rm /tmp/constants.py && \
  # Setup user
  groupadd -g $GID -o $UNAME && \
  useradd -m -u $UID -g $GID -o -d /mageai $UNAME && \
  chown -R ${UNAME}:${UNAME} /mageai


ENV MAGE_DATA_DIR="/mageai/mage_data"
ENV PYTHONPATH="${PYTHONPATH}:/mageai"
WORKDIR /mageai
EXPOSE 6789
EXPOSE 7789

USER $UID
WORKDIR /mageai

CMD ["/bin/sh", "-c", "/mageai/app/run_app.sh"]
