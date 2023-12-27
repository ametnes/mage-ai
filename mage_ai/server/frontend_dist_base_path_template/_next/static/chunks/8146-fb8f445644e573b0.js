"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8146],{58146:function(e,n,i){var r=i(21831),t=i(75582),s=i(82394),l=i(21764),c=i(82684),d=i(69864),o=i(34376),u=i(71180),a=i(70652),x=i(15338),j=i(97618),m=i(55485),h=i(85854),f=i(65956),Z=i(36288),p=i(44085),v=i(28274),g=i(38276),P=i(75499),_=i(30160),b=i(35576),I=i(17488),S=i(69650),y=i(35686),C=i(8193),O=i(72473),E=i(70515),k=i(24755),N=i(48277),T=i(81728),M=i(3917),w=i(76417),D=i(86735),A=i(42122),H=i(72619),R=i(95924),B=i(28598);function W(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function L(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?W(Object(i),!0).forEach((function(n){(0,s.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var U,F=2*E.iI;!function(e){e.ROLES="Roles",e.USERS="Users"}(U||(U={})),n.Z=function(e){var n,i=e.contained,s=e.onCancel,W=e.slug,z=(0,o.useRouter)(),G=(0,c.useState)(!0),K=G[0],V=G[1],Y=(0,c.useState)(null),q=Y[0],$=Y[1],J=(0,c.useState)({}),Q=J[0],X=J[1],ee=(0,c.useState)(null),ne=ee[0],ie=ee[1],re=(0,c.useCallback)((function(e,n,i){ie(L(L({},e),{},{rolesMapping:(0,D.HK)(n||[],(function(e){return e.id})),usersMapping:(0,D.HK)(i||[],(function(e){return e.id}))}))}),[ie]),te=(0,c.useCallback)((function(e){X((function(n){return L(L({},n),e)})),ie((function(n){return L(L({},n),e)}))}),[X,ie]),se=y.ZP.permissions.detail(W,{},{revalidateOnFocus:!1}).data,le=(0,c.useMemo)((function(){return null===se||void 0===se?void 0:se.permission}),[se]);(0,c.useEffect)((function(){le&&re(le,null===le||void 0===le?void 0:le.roles,null===le||void 0===le?void 0:le.users)}),[re,le]);var ce=y.ZP.permissions.list({_format:"with_only_entity_options",only_entity_options:!0},{},{pauseFetch:!!le}).data,de=(0,c.useMemo)((function(){var e;return null===ce||void 0===ce||null===(e=ce.permissions)||void 0===e?void 0:e[0]}),[ce]),oe=(0,c.useMemo)((function(){var e;return(null===(e=le||de)||void 0===e?void 0:e.entity_names)||[]}),[le,de]),ue=(0,c.useMemo)((function(){var e;return(null===(e=le||de)||void 0===e?void 0:e.entity_types)||[]}),[le,de]),ae=(0,d.Db)(le?y.ZP.permissions.useUpdate(null===le||void 0===le?void 0:le.id):y.ZP.permissions.useCreate(),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){var n=e.permission;X({}),re(n,null===n||void 0===n?void 0:n.roles,null===n||void 0===n?void 0:n.users),le||z.push("/settings/workspace/permissions/".concat(null===n||void 0===n?void 0:n.id)),l.Am.success(le?"Permission successfully updated.":"New permission created successfully.",{position:l.Am.POSITION.BOTTOM_RIGHT,toastId:"permission-mutate-success-".concat(n.id)})},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.exception,t=n.message,s=n.type;l.Am.error((null===i||void 0===i?void 0:i.error)||r||t,{position:l.Am.POSITION.BOTTOM_RIGHT,toastId:s})}})}}),xe=(0,t.Z)(ae,2),je=xe[0],me=xe[1].isLoading,he=(0,d.Db)(y.ZP.permissions.useDelete(null===le||void 0===le?void 0:le.id),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(){z.push("/settings/workspace/permissions"),l.Am.success("Permission successfully delete.",{position:l.Am.POSITION.BOTTOM_RIGHT,toastId:"permission-delete-success-".concat(null===le||void 0===le?void 0:le.id)})},onErrorCallback:function(e){var n=e.error,i=n.errors,r=n.exception,t=n.message,s=n.type;l.Am.error((null===i||void 0===i?void 0:i.error)||r||t,{position:l.Am.POSITION.BOTTOM_RIGHT,toastId:s})}})}}),fe=(0,t.Z)(he,2),Ze=fe[0],pe=fe[1].isLoading,ve=(0,c.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne.access)||0}),[ne]),ge=(0,c.useCallback)((function(e){return e.map((function(e,n){var i=Z.K4[e],r=Boolean(ve&Number(e)),t=(0,N.fD)(ve),s=(0,N.fD)(e);return(0,B.jsx)(g.Z,{mt:n>=1?1:0,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(S.Z,{checked:r,compact:!0,onCheck:function(e){return te({access:(0,N.$P)(e(r)?(0,N.vN)(t,s):(0,N.VJ)(t,s))})}}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(_.ZP,{default:!r,children:i})]})},i)}))}),[ve,te]),Pe=(0,c.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne.conditions)||[]}),[ne]),_e=(0,c.useMemo)((function(){var e=Z.WG.DISABLE_UNLESS_CONDITIONS,n=(0,N.fD)(ve),i=(0,N.fD)(e),t=Boolean(ve&Number(e)),s=new Set((0,r.Z)(Pe)),l=s.has(Z.m_.HAS_NOTEBOOK_EDIT_ACCESS),c=s.has(Z.m_.HAS_PIPELINE_EDIT_ACCESS),d=s.has(Z.m_.USER_OWNS_ENTITY),o=t&&l,u=t&&c,a=t&&d;return(0,B.jsxs)(m.ZP,{flexDirection:"column",children:[(0,B.jsx)(g.Z,{mt:1,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(S.Z,{checked:o,compact:!0,onCheck:function(e){var l=n;e(o)?(t||(l=(0,N.vN)(n,i)),s.add(Z.m_.HAS_NOTEBOOK_EDIT_ACCESS)):(c||d||(l=(0,N.VJ)(n,i)),s.delete(Z.m_.HAS_NOTEBOOK_EDIT_ACCESS)),te({access:(0,N.$P)(l),conditions:(0,r.Z)(s)})}}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(_.ZP,{default:!o,children:Z.ND[Z.m_.HAS_NOTEBOOK_EDIT_ACCESS]})]})}),(0,B.jsx)(g.Z,{mt:1,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(S.Z,{checked:u,compact:!0,onCheck:function(e){var c=n;e(u)?(t||(c=(0,N.vN)(n,i)),s.add(Z.m_.HAS_PIPELINE_EDIT_ACCESS)):(l||d||(c=(0,N.VJ)(n,i)),s.delete(Z.m_.HAS_PIPELINE_EDIT_ACCESS)),te({access:(0,N.$P)(c),conditions:(0,r.Z)(s)})}}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(_.ZP,{default:!u,children:Z.ND[Z.m_.HAS_PIPELINE_EDIT_ACCESS]})]})}),(0,B.jsx)(g.Z,{mt:1,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(S.Z,{checked:a,compact:!0,onCheck:function(e){var c=n;e(a)?(t||(c=(0,N.vN)(n,i)),s.add(Z.m_.USER_OWNS_ENTITY)):(l||l||(c=(0,N.VJ)(n,i)),s.delete(Z.m_.USER_OWNS_ENTITY)),te({access:(0,N.$P)(c),conditions:(0,r.Z)(s)})}}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(_.ZP,{default:!a,children:Z.ND[Z.m_.USER_OWNS_ENTITY]})]})})]})}),[ve,Pe,te]),be=y.ZP.roles.list({},{},{pauseFetch:!le}).data,Ie=(0,c.useMemo)((function(){return(0,D.YC)((null===be||void 0===be?void 0:be.roles)||[],"name")}),[be]),Se=(0,c.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne.rolesMapping)||{}}),[ne]),ye=(0,c.useMemo)((function(){return(0,D.YC)(Object.values(Se),"name")}),[Se]),Ce=y.ZP.users.list({},{},{pauseFetch:!le}).data,Oe=((0,c.useMemo)((function(){return(0,D.YC)((null===Ce||void 0===Ce?void 0:Ce.users)||[],(function(e){return(0,w.s)(e)}))}),[Ce]),(0,c.useMemo)((function(){return(null===ne||void 0===ne?void 0:ne.usersMapping)||{}}),[ne])),Ee=(0,c.useMemo)((function(){return(0,D.YC)(Object.values(Oe),(function(e){return(0,w.s)(e)}))}),[Oe]),ke=(0,c.useMemo)((function(){return(null===ye||void 0===ye?void 0:ye.length)>=1}),[ye]),Ne=(0,c.useMemo)((function(){return(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(O.mm,{}),compact:!0,onClick:function(){$(U.ROLES),V(!1)},primary:!ke,secondary:ke,small:!0,children:"Add roles"})}),[ke,$,V]),Te=(0,c.useMemo)((function(){return(null===Ee||void 0===Ee?void 0:Ee.length)>=1}),[Ee]),Me=(0,c.useCallback)((function(e,n){return(0,B.jsx)(P.Z,{columnFlex:[null,1],columns:[{label:function(){var n=null===e||void 0===e?void 0:e.every((function(e){var n=e.id;return null===Se||void 0===Se?void 0:Se[n]}));return(0,B.jsx)(a.Z,{checked:n,onClick:function(i){(0,R.j)(i),te(n?{rolesMapping:{}}:{rolesMapping:(0,D.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"},{uuid:"Role"}],onClickRow:n?function(n){var i=e[n];i&&window.open("/settings/workspace/roles/".concat(null===i||void 0===i?void 0:i.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.name,i=e.id,r=!(null===Se||void 0===Se||!Se[i]);return[(0,B.jsx)(a.Z,{checked:r,onClick:function(n){(0,R.j)(n);var t=L({},Se);r?null===t||void 0===t||delete t[i]:t[i]=e,te({rolesMapping:t})}},"checkbox"),(0,B.jsx)(_.ZP,{monospace:!0,children:n},"name")]})),uuid:"roles"})}),[Se,te]),we=(0,c.useCallback)((function(e,n){return(0,B.jsx)(P.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"First name"},{uuid:"Last name"}],onClickRow:n?function(n){var i=e[n];i&&window.open("/settings/workspace/users/".concat(null===i||void 0===i?void 0:i.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.first_name,i=e.last_name,r=e.username;return[(0,B.jsx)(_.ZP,{children:r},"username"),(0,B.jsx)(_.ZP,{default:!0,children:n},"firstName"),(0,B.jsx)(_.ZP,{default:!0,children:i},"lastName")]})),uuid:"users"})}),[Oe,te]),De=(0,c.useMemo)((function(){return Me(Ie)}),[Me,Ie]),Ae=(0,c.useMemo)((function(){return Me(ye,!0)}),[Me,ye]),He=(0,c.useMemo)((function(){return we(Ee,!0)}),[we,Ee]),Re=(0,B.jsxs)(C.N,{children:[(0,B.jsxs)(f.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsx)(h.Z,{level:4,children:le?"Permission ".concat(null===le||void 0===le?void 0:le.id):"New permission"})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsxs)(_.ZP,{danger:"entity_name"in Q&&!(null!==ne&&void 0!==ne&&ne.entity_name),default:!0,large:!0,children:["Entity ","entity_name"in Q&&!(null!==ne&&void 0!==ne&&ne.entity_name)&&(0,B.jsx)(_.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(j.Z,{flex:1,justifyContent:"flex-end",children:(0,B.jsx)(p.Z,{afterIconSize:F,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,onChange:function(e){return te({entity_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"Select an entity",value:(null===ne||void 0===ne?void 0:ne.entity_name)||"",children:oe.map((function(e){return(0,B.jsx)("option",{value:e,children:(0,T.j3)(e)},e)}))})})]})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Entity subtype"}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(j.Z,{flex:1,justifyContent:"flex-end",children:(0,B.jsxs)(p.Z,{afterIconSize:F,alignRight:!0,autoComplete:"off",large:!0,monospace:!0,noBackground:!0,noBorder:!0,onChange:function(e){return te({entity_type:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"Select an entity subtype",value:(null===ne||void 0===ne?void 0:ne.entity_type)||"",children:[(0,B.jsx)("option",{value:""}),ue.map((function(e){return(0,B.jsx)("option",{value:e,children:e},e)}))]})})]})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Enity UUID"}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsx)(I.Z,{afterIcon:(0,B.jsx)(O.I8,{}),afterIconClick:function(e,n){var i;null===n||void 0===n||null===(i=n.current)||void 0===i||i.focus()},afterIconSize:F,alignRight:!0,autoComplete:"off",large:!0,monospace:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return te({entity_id:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. pipeline_uuid",value:(null===ne||void 0===ne?void 0:ne.entity_id)||""})})]})})]}),(0,B.jsx)(g.Z,{mb:E.HN}),(0,B.jsxs)(f.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsx)(h.Z,{level:4,children:"Access"})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Groups"})}),ge(Z.G9)]})}),(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Special conditions"})}),_e]})})]}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Operations"})}),ge(Z.Pt)]})}),(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Disable operations"})}),ge(Z.oO)]})})]}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsxs)(m.ZP,{alignItems:"flex-start",children:[(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Read attributes"})}),ge(Z.Fy)]})}),(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{fullWidth:!0,p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Readable attributes (comma separated)"})}),(0,B.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return te({read_attributes:e.target.value})},placeholder:"e.g. email",value:(null===ne||void 0===ne?void 0:ne.read_attributes)||""})]})})]}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsxs)(m.ZP,{alignItems:"flex-start",children:[(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Write attributes"})}),ge(Z.H1)]})}),(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{fullWidth:!0,p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Writable attributes (comma separated)"})}),(0,B.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return te({write_attributes:e.target.value})},placeholder:"e.g. password",value:(null===ne||void 0===ne?void 0:ne.write_attributes)||""})]})})]}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsxs)(m.ZP,{alignItems:"flex-start",children:[(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Query parameters"})}),ge(Z.hl)]})}),(0,B.jsx)(j.Z,{flex:1,children:(0,B.jsxs)(g.Z,{fullWidth:!0,p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Parameters that can be queried (comma separated)"})}),(0,B.jsx)(b.Z,{fullWidth:!0,monospace:!0,onChange:function(e){return te({query_attributes:e.target.value})},placeholder:"e.g. include_outputs",value:(null===ne||void 0===ne?void 0:ne.query_attributes)||""})]})})]})]}),(0,B.jsx)(g.Z,{mb:E.HN}),le&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(f.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(h.Z,{level:4,children:"Roles"}),(0,B.jsx)(g.Z,{mr:E.cd}),ke&&(0,B.jsx)(m.ZP,{alignItems:"center",children:Ne})]})}),(0,B.jsx)(x.Z,{light:!0}),!ke&&(0,B.jsxs)(g.Z,{p:E.cd,children:[(0,B.jsx)(g.Z,{mb:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,children:"This permission is currently not attached to any role."})}),(0,B.jsx)(m.ZP,{alignItems:"center",children:Ne})]}),ke&&(0,B.jsx)(g.Z,{pb:E.Mq,children:Ae})]}),(0,B.jsx)(g.Z,{mb:E.HN}),(0,B.jsxs)(f.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsx)(m.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,B.jsx)(h.Z,{level:4,children:"Users"})})}),(0,B.jsx)(x.Z,{light:!0}),!Te&&(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsx)(_.ZP,{default:!0,children:"There are currently no users with this permission."})}),Te&&(0,B.jsx)(g.Z,{pb:E.Mq,children:He})]}),(0,B.jsx)(g.Z,{mb:E.HN}),(0,B.jsxs)(f.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsx)(h.Z,{level:4,children:"Metadata"})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Last updated"}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsxs)(j.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(_.ZP,{large:!0,monospace:!0,muted:!0,children:(null===ne||void 0===ne?void 0:ne.updated_at)&&(0,M.d$)(null===ne||void 0===ne?void 0:ne.updated_at,{includeSeconds:!0})}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(O.Pf,{muted:!0,size:F}),(0,B.jsx)(g.Z,{mr:1})]})]})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Created at"}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsxs)(j.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(_.ZP,{large:!0,monospace:!0,muted:!0,children:(null===ne||void 0===ne?void 0:ne.created_at)&&(0,M.d$)(null===ne||void 0===ne?void 0:ne.created_at,{includeSeconds:!0})}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(O.Pf,{muted:!0,size:F}),(0,B.jsx)(g.Z,{mr:1})]})]})}),(0,B.jsx)(x.Z,{light:!0}),(0,B.jsx)(g.Z,{p:E.cd,children:(0,B.jsxs)(m.ZP,{alignItems:"center",children:[(0,B.jsx)(_.ZP,{default:!0,large:!0,children:"Created by"}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsxs)(j.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(_.ZP,{large:!0,monospace:!0,muted:!0,children:(0,w.s)(null===le||void 0===le?void 0:le.user)}),(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(O.Pf,{muted:!0,size:F}),(0,B.jsx)(g.Z,{mr:1})]})]})})]}),(0,B.jsx)(g.Z,{mb:E.HN})]}),(0,B.jsxs)(m.ZP,{children:[(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(O.vc,{}),disabled:!Q||!(null!==(n=Object.keys(Q))&&void 0!==n&&n.length),loading:me,onClick:function(){return je({permission:L(L({},(0,A.GL)(ne,["access","conditions","entity_id","entity_name","entity_type","query_attributes","read_attributes","write_attributes"],{include_blanks:!0})),le?{role_ids:Object.keys((null===ne||void 0===ne?void 0:ne.rolesMapping)||{}).map((function(e){return Number(e)}))}:{})})},primary:!0,children:le?"Save changes":"Create new permission"}),s&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(u.ZP,{onClick:function(){return null===s||void 0===s?void 0:s()},secondary:!0,children:"Cancel and go back"})]}),le&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g.Z,{mr:E.cd}),(0,B.jsx)(u.ZP,{beforeIcon:(0,B.jsx)(O.rF,{}),danger:!0,loading:pe,onClick:function(){return Ze()},children:"Delete permission"})]})]})]});return i?Re:(0,B.jsx)(v.Z,{after:U.ROLES===q?De:null,afterHeader:(0,B.jsx)(g.Z,{px:E.cd,children:(0,B.jsx)(_.ZP,{bold:!0,children:q})}),afterHidden:K,afterWidth:60*E.iI,appendBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Permissions"},linkProps:{href:"/settings/workspace/permissions"}},{bold:!0,label:function(){return"Permission ".concat(null===le||void 0===le?void 0:le.id)}}],hideAfterCompletely:!0,setAfterHidden:V,title:null!==le&&void 0!==le&&le.id?"Permission ".concat(null===le||void 0===le?void 0:le.id):"New permission",uuidItemSelected:k.B2.PERMISSIONS,uuidWorkspaceSelected:k.Pl.USER_MANAGEMENT,children:le&&Re})}},48277:function(e,n,i){i.d(n,{$P:function(){return o},JI:function(){return s},VJ:function(){return d},fD:function(){return l},uf:function(){return t},vN:function(){return c}});var r=i(75582),t=function(e){var n=String(e).split("."),i=(0,r.Z)(n,2),t=i[0],s=i[1];return"".concat(t.replace(/\B(?=(\d{3})+(?!\d))/g,",")).concat(s?".".concat(s):"")};function s(e){var n=Math.floor(Date.now()/1e3);return e>0?n-e:n}function l(e){return(e>>>0).toString(2)}function c(e,n){return String(BigInt(e)+BigInt(n))}function d(e,n){return String(BigInt(e)-BigInt(n))}function o(e){return parseInt(e,2)}}}]);