(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2403],{93808:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(77837),i=t(26304),o=t(62243),s=t(29385),c=t(80022),l=t(13692),a=t(93189),u=t(15544),d=t(82394),p=t(38860),h=t.n(p),f=t(82684),m=t(56663),y=t.n(m),b=t(40761),g=t(34661),v=t(36105),j=t(50178),x=t(69419),Z=t(28598),_=["auth"];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function P(e){return function(n){(0,l.Z)(a,n);var t=k(a);function a(){var e;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),(0,d.Z)((0,c.Z)(e),"state",{auth:new b.Z(e.props.token)}),e}return(0,s.Z)(a,[{key:"componentDidMount",value:function(){this.setState({auth:new b.Z(this.props.token)})}},{key:"render",value:function(){var n=this.props,t=(n.auth,(0,i.Z)(n,_));return(0,Z.jsx)(e,O({auth:this.state.auth},t))}}],[{key:"getInitialProps",value:function(){var n=(0,r.Z)(h().mark((function n(t){var r,i,o,s,c,l,a,u,d;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=y()(t),i=(0,j.ex)(t),o=i.id,s=r[g.Mv],c=r[v.qt],l=new b.Z(s),a=O(O({},t),{},{auth:l,currentGroupId:o,theme:c}),(0,j.YB)(t)&&l.isExpired&&(console.log("OAuth token has expired."),u=O(O({},t.query),{},{redirect_url:t.asPath}),(0,x.nL)("/sign-in?".concat((0,x.uM)(u)),t.res)),!e.getInitialProps){n.next=12;break}return n.next=10,e.getInitialProps(a);case 10:return d=n.sent,n.abrupt("return",O(O({},d),{},{auth:l,currentGroupId:o,theme:c}));case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),a}(f.Component)}},85854:function(e,n,t){"use strict";var r,i,o,s,c,l,a,u,d=t(82394),p=t(26304),h=t(26653),f=t(38626),m=t(33591),y=t(44897),b=t(95363),g=t(61896),v=t(30160),j=t(70515),x=t(38276),Z=t(28598),_=["children","condensed","inline","level","marketing","spacingBelow"];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=(0,f.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||y.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),P=f.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||y.Z.content).active,";\n  ")})),S=f.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],k,m.media.md(r||(r=(0,h.Z)(["\n    ","\n  "])),g.aQ),m.media.lg(i||(i=(0,h.Z)(["\n    ","\n  "])),g.aQ),m.media.xl(o||(o=(0,h.Z)(["\n    ","\n  "])),g.aQ)),C=f.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],k,g.MJ),I=f.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],k,m.media.xs(s||(s=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.sm(c||(c=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.md(l||(l=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.lg(a||(a=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.xl(u||(u=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI)),N=f.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],k,g.BL),H=f.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],k),T=f.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],k),M=f.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],k),z=f.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],k,(function(e){return 1===e.level&&"\n    ".concat(g.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(g.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),D=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,s=e.marketing,c=e.spacingBelow,l=(0,p.Z)(e,_);i?n=z:0===Number(o)?n=S:1===Number(o)?n=s?I:C:2===Number(o)?n=N:3===Number(o)?n=H:4===Number(o)?n=T:5===Number(o)&&(n=M);var a=(0,Z.jsxs)(n,O(O({},l),{},{level:o,children:[c&&(0,Z.jsx)(x.Z,{mb:r?2:3,children:t}),!c&&t]}));return i?a:(0,Z.jsx)(P,{children:a})};D.defaultProps={level:3,weightStyle:6},n.Z=D},60480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r,i=t(77837),o=t(82394),s=t(75582),c=t(38860),l=t.n(c),a=t(82684),u=t(12691),d=t.n(u),p=t(21764),h=t(69864),f=t(71180),m=t(70652),y=t(50724),b=t(82555),g=t(55485),v=t(85854),j=t(48670),x=t(93808),Z=t(44085),_=t(28274),w=t(38276);!function(e){e.SSH="ssh",e.HTTPS="https"}(r||(r={}));var O=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",labelDescription:"Defaults to Python's os.getcwd() if omitted. Mage will create this local directory if it doesn't already exist.",uuid:"repo_path"}],k=[{autoComplete:"username",label:"Username",uuid:"username"},{autoComplete:"email",label:"Email",uuid:"email"},{autoComplete:"ssh_public_key",label:"SSH public key in base64",type:"password",uuid:"ssh_public_key"},{autoComplete:"ssh_private_key",label:"SSH private key in base64",type:"password",uuid:"ssh_private_key"}],P=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",label:"Email",required:!0,uuid:"email"},{autoComplete:"access_token",label:"Access token",labelDescription:"Add your Git access token to authenticate with your provided username. The access token will be stored as a Mage secret.",required:!0,type:"password",uuid:"access_token"}],S=[{autoComplete:"branch",label:"Branch name",required:!0,uuid:"branch"}],C=t(30160),I=t(17488),N=t(35686),H=t(70515),T=t(24755),M=t(72619),z=t(28598);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=N.ZP.syncs.list().data,n=(0,a.useState)(null),t=n[0],i=n[1],c=(0,a.useState)(null),l=c[0],u=c[1],x=(0,a.useState)(null),D=x[0],E=x[1],A=(0,a.useState)(null),R=A[0],G=A[1];(0,a.useEffect)((function(){if(e){var n,t=null===e||void 0===e||null===(n=e.syncs)||void 0===n?void 0:n[0];u(null===t||void 0===t?void 0:t.user_git_settings),i(t),G(!(null===t||void 0===t||!t.branch))}}),[e]);var B=(0,a.useMemo)((function(){if(e){var n,t=null===e||void 0===e||null===(n=e.syncs)||void 0===n?void 0:n[0];return!(null===t||void 0===t||!t.branch)}return!1}),[e]),F=(0,h.Db)(N.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(e){var n=e.sync;n&&(i(n),window.location.reload(),p.Am.success("Sync saved",{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e,n){return E({errors:n,response:e})}})}}),L=(0,s.Z)(F,2),U=L[0],W=L[1].isLoading,X=(0,h.Db)(N.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(e){e.sync&&p.Am.success("Success!",{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e,n){return E({errors:n,response:e})}})}}),Q=(0,s.Z)(X,2),Y=Q[0],J=Q[1].isLoading,K=(0,a.useMemo)((function(){return(null===t||void 0===t?void 0:t.auth_type)||r.SSH}),[null===t||void 0===t?void 0:t.auth_type]),V=(0,a.useMemo)((function(){return K===r.HTTPS?P:k}),[K]),$=N.ZP.statuses.list().data,ee=(0,a.useMemo)((function(){var e,n;return null===$||void 0===$||null===(e=$.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.require_user_authentication}),[$]),ne=(0,a.useMemo)((function(){var e=i,n=t;return!R&&ee&&(e=u,n=l),(0,z.jsx)("form",{children:V.map((function(t){var r,i,s=t.autoComplete,c=t.disabled,l=t.label,a=t.labelDescription,u=t.required,d=t.type,h=t.uuid;return i="ssh_public_key"===h?(0,z.jsx)(w.Z,{mb:1,children:(0,z.jsxs)(C.ZP,{small:!0,children:["Run ",(0,z.jsx)(j.Z,{onClick:function(){navigator.clipboard.writeText("cat ~/.ssh/id_ed25519.pub | base64 | tr -d \\\\n | echo"),p.Am.success("Successfully copied to clipboard.",{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:h})},small:!0,children:"cat ~/.ssh/id_ed25519.pub | base64 | tr -d \\\\n | echo"})," in terminal to get base64 encoded public key and paste the result here. The key will be stored as a Mage secret."]})}):"ssh_private_key"===h?(0,z.jsx)(w.Z,{mb:1,children:(0,z.jsxs)(C.ZP,{small:!0,children:["Follow same steps as the public key, but run ",(0,z.jsx)(j.Z,{onClick:function(){navigator.clipboard.writeText("cat ~/.ssh/id_ed25519 | base64 | tr -d \\\\n && echo"),p.Am.success("Successfully copied to clipboard.",{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:h})},small:!0,children:"cat ~/.ssh/id_ed25519 | base64 | tr -d \\\\n && echo"})," instead. The key will be stored as a Mage secret."]})}):a&&(0,z.jsx)(w.Z,{mb:1,children:(0,z.jsx)(C.ZP,{small:!0,children:a})}),(0,z.jsxs)(w.Z,{mt:2,children:[i,(0,z.jsx)(I.Z,{autoComplete:s,disabled:c,label:l,onChange:function(n){e((function(e){return q(q({},e),{},(0,o.Z)({},h,n.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:d,value:(null===(r=n)||void 0===r?void 0:r[h])||""})]},h)}))})}),[V,ee,u,i,R,t,l]);return(0,z.jsx)(_.Z,{uuidItemSelected:T.fF,uuidWorkspaceSelected:T.WH,children:(0,z.jsxs)(w.Z,{p:H.cd,style:{width:"600px"},children:[(0,z.jsx)(v.Z,{children:"Git repository settings"}),(0,z.jsxs)(C.ZP,{children:["If you are using Github and want to use a more feature rich integration, you can check out the ",(0,z.jsx)(d(),{as:"/version-control",href:"/version-control",children:(0,z.jsx)(j.Z,{inline:!0,children:"version control app"})}),"."]}),(0,z.jsx)(j.Z,{}),(0,z.jsx)(w.Z,{mt:1,children:(0,z.jsx)(C.ZP,{bold:!0,children:"Authentication type"})}),(0,z.jsx)(w.Z,{mt:1,children:(0,z.jsx)(Z.Z,{compact:!0,label:"Authentication type",onChange:function(e){var n=e.target.value;i((function(e){return q(q({},e),{},{auth_type:n})}))},value:K,children:Object.entries(r).map((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];return(0,z.jsx)("option",{value:r,children:t},r)}))})}),(0,z.jsx)(w.Z,{mt:H.Mq,children:K===r.SSH&&(0,z.jsxs)(C.ZP,{bold:!0,children:["You will need to ",(0,z.jsx)(j.Z,{href:"https://docs.mage.ai/development/git/configure#generate-ssh-token",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})}),(0,z.jsx)("form",{children:O.map((function(e){var n=e.autoComplete,r=e.disabled,s=e.label,c=e.labelDescription,l=e.required,a=e.type,u=e.uuid;return(0,z.jsxs)(w.Z,{mt:2,children:[c&&(0,z.jsx)(w.Z,{mb:1,children:(0,z.jsx)(C.ZP,{small:!0,children:c})}),(0,z.jsx)(I.Z,{autoComplete:n,disabled:r,label:s,onChange:function(e){i((function(n){return q(q({},n),{},(0,o.Z)({},u,e.target.value))}))},primary:!0,required:l,setContentOnMount:!0,type:a,value:(null===t||void 0===t?void 0:t[u])||""})]},u)}))}),(0,z.jsx)(w.Z,{mt:H.Mq,children:(0,z.jsxs)(g.ZP,{alignItems:"center",children:[(0,z.jsx)(w.Z,{mr:1,children:(0,z.jsx)(m.Z,{checked:!!R,onClick:function(){return G((function(e){var n=!e;return n||i((function(e){return q(q({},e),{},{branch:null,sync_on_pipeline_run:!1,sync_on_start:!1})})),n}))}})}),(0,z.jsxs)(C.ZP,{bold:!0,children:["Use ",(0,z.jsx)(j.Z,{bold:!0,href:"https://docs.mage.ai/production/data-sync/git-sync",openNewWindow:!0,children:"One-way git sync"})," (Click link for more info)"]})]})}),R?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(w.Z,{mt:H.Mq,children:(0,z.jsx)(C.ZP,{bold:!0,children:"Sync with a specified branch. These settings will be saved at the project level."})}),(0,z.jsx)("form",{children:S.map((function(e){var n=e.autoComplete,r=e.disabled,s=e.label,c=e.required,l=e.type,a=e.uuid;return(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsx)(I.Z,{autoComplete:n,disabled:r,label:s,onChange:function(e){i((function(n){return q(q({},n),{},(0,o.Z)({},a,e.target.value))}))},primary:!0,required:c,setContentOnMount:!0,type:l,value:(null===t||void 0===t?void 0:t[a])||""})},a)}))}),(0,z.jsx)(g.ZP,{alignItems:"center",children:(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsx)(m.Z,{checked:null===t||void 0===t?void 0:t.sync_submodules,label:"Include submodules",onClick:function(){i((function(e){return q(q({},e),{},{sync_submodules:!(null!==t&&void 0!==t&&t.sync_submodules)})}))}})})}),(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsx)(v.Z,{level:5,children:"Additional sync settings"})}),(0,z.jsx)(g.ZP,{alignItems:"center",children:(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsx)(m.Z,{checked:null===t||void 0===t?void 0:t.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){i((function(e){return q(q({},e),{},{sync_on_pipeline_run:!(null!==t&&void 0!==t&&t.sync_on_pipeline_run)})}))}})})}),(0,z.jsx)(g.ZP,{alignItems:"center",children:(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsx)(m.Z,{checked:null===t||void 0===t?void 0:t.sync_on_start,label:"Sync on server start up",onClick:function(){i((function(e){return q(q({},e),{},{sync_on_start:!(null!==t&&void 0!==t&&t.sync_on_start)})}))}})})}),(0,z.jsx)(w.Z,{mt:H.Mq,children:(0,z.jsx)(C.ZP,{bold:!0,children:"Configure the Git authentication credentials that will be used to sync with the specified Git repository."})}),ne]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(w.Z,{mt:H.Mq,children:(0,z.jsx)(C.ZP,{bold:!0,children:"These fields are required to help Mage configure your Git settings. These settings will be specific to your user."})}),ne]}),(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsx)(f.ZP,{loading:W,onClick:function(){return U({sync:q(q({},t),{},{user_git_settings:l})})},primary:!0,children:"Save repository settings"})}),D&&(0,z.jsx)(y.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===E||void 0===E?void 0:E(null)},children:(0,z.jsx)(b.Z,q(q({},D),{},{onClose:function(){return null===E||void 0===E?void 0:E(null)}}))}),B&&(0,z.jsxs)(w.Z,{mt:H.HN,children:[(0,z.jsx)(v.Z,{children:"Synchronize code from remote repository"}),(0,z.jsxs)(w.Z,{mt:1,children:[(0,z.jsxs)(C.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,z.jsx)("br",{}),"This may ",(0,z.jsx)(C.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you\u2019ve committed or backed up your current changes."]}),(0,z.jsx)(w.Z,{mt:2}),(0,z.jsxs)(C.ZP,{children:["Reset will tell Mage to try to clone your repository from remote. This will also ",(0,z.jsx)(C.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," all your local changes and reset any settings you may have configured for your local Git repo. This may be helpful if you are having issues syncing your repository."]})]}),(0,z.jsx)(w.Z,{mt:2,children:(0,z.jsxs)(g.ZP,{children:[(0,z.jsx)(f.ZP,{loading:J,onClick:function(){return Y({sync:{action_type:"sync_data"}})},warning:!0,children:"Synchronize code"}),(0,z.jsx)(w.Z,{ml:2}),(0,z.jsx)(f.ZP,{danger:!0,loading:J,onClick:function(){return Y({sync:{action_type:"reset"}})},children:"Reset repository"})]})})]})]})})}E.getInitialProps=(0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var A=(0,x.Z)(E)},37056:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/sync-data",function(){return t(60480)}])}},function(e){e.O(0,[2678,1154,844,3494,1557,2512,8432,9774,2888,179],(function(){return n=37056,e(e.s=n);var n}));var n=e.O();_N_E=n}]);