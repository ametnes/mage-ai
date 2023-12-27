"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7361],{37361:function(e,n,r){var i=r(75582),l=r(82394),s=r(21764),o=r(82684),t=r(69864),d=r(34376),c=r(71180),a=r(70652),u=r(15338),f=r(97618),j=r(55485),x=r(85854),m=r(65956),p=r(28274),g=r(38276),h=r(75499),v=r(30160),Z=r(17488),P=r(35686),I=r(8193),w=r(72473),b=r(70515),k=r(24755),C=r(3917),y=r(76417),_=r(36717),O=r(50178),S=r(86735),M=r(42122),R=r(72619),H=r(95924),B=r(28598);function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function z(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,l.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var T,A=2*b.iI;!function(e){e.PERMISSIONS="Permissions",e.ROLES="Roles"}(T||(T={})),n.Z=function(e){var n,r=e.contained,l=e.onCancel,N=e.slug,E=(0,O.PR)()||{},D=E.id,W=E.owner,q=(0,d.useRouter)(),F=(0,o.useState)(!0),U=F[0],V=F[1],L=(0,o.useState)(null),G=L[0],K=L[1],Y=(0,o.useState)({}),J=Y[0],$=Y[1],Q=(0,o.useState)(null),X=Q[0],ee=Q[1],ne=(0,o.useCallback)((function(e,n,r){ee(z(z({},e),{},{rolesMapping:(0,S.HK)(n||[],(function(e){return e.id})),permissionsMapping:(0,S.HK)(r||[],(function(e){return e.id}))}))}),[ee]),re=(0,o.useCallback)((function(e){$((function(n){return z(z({},n),e)})),ee((function(n){return z(z({},n),e)}))}),[$,ee]),ie=P.ZP.users.detail(N,{},{revalidateOnFocus:!1}).data,le=(0,o.useMemo)((function(){return null===ie||void 0===ie?void 0:ie.user}),[ie]);(0,o.useEffect)((function(){le&&ne(le,null===le||void 0===le?void 0:le.roles_new,null===le||void 0===le?void 0:le.permissions)}),[ne,le]);var se=(0,t.Db)(le?P.ZP.users.useUpdate(N):P.ZP.users.useCreate(),{onSuccess:function(e){return(0,R.wD)(e,{callback:function(e){var n=e.user;$({}),ne(n,null===n||void 0===n?void 0:n.roles_new,null===n||void 0===n?void 0:n.permissions),le||q.push("/settings/workspace/users/".concat(null===n||void 0===n?void 0:n.id)),s.Am.success(le?"User profile successfully updated.":"New user created successfully.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,o=n.type;s.Am.error((null===r||void 0===r?void 0:r.error)||i||l,{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:o})}})}}),oe=(0,i.Z)(se,2),te=oe[0],de=oe[1].isLoading,ce=(0,t.Db)(P.ZP.users.useDelete(null===le||void 0===le?void 0:le.id),{onSuccess:function(e){return(0,R.wD)(e,{callback:function(){q.push("/settings/workspace/users"),s.Am.success("User successfully delete.",{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:"user-delete-success-".concat(null===le||void 0===le?void 0:le.id)})},onErrorCallback:function(e){var n=e.error,r=n.errors,i=n.exception,l=n.message,o=n.type;s.Am.error((null===r||void 0===r?void 0:r.error)||i||l,{position:s.Am.POSITION.BOTTOM_RIGHT,toastId:o})}})}}),ae=(0,i.Z)(ce,2),ue=ae[0],fe=ae[1].isLoading,je=P.ZP.roles.list().data,xe=(0,o.useMemo)((function(){return(0,S.YC)((null===je||void 0===je?void 0:je.roles)||[],"name")}),[je]),me=(0,o.useMemo)((function(){return(null===X||void 0===X?void 0:X.rolesMapping)||{}}),[X]),pe=(0,o.useMemo)((function(){return(0,S.YC)(Object.values(me),"name")}),[me]),ge=P.ZP.permissions.list({_limit:1e3}).data,he=((0,o.useMemo)((function(){return(0,S.YC)((null===ge||void 0===ge?void 0:ge.permissions)||[],"entity_name")}),[ge]),(0,o.useMemo)((function(){return(null===X||void 0===X?void 0:X.permissionsMapping)||{}}),[X])),ve=(0,o.useMemo)((function(){return(0,S.YC)(Object.values(he),"entity_name")}),[he]),Ze=(0,o.useMemo)((function(){return(null===pe||void 0===pe?void 0:pe.length)>=1}),[pe]),Pe=(0,o.useMemo)((function(){return(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(w.mm,{}),compact:!0,onClick:function(){K(T.ROLES),V(!1)},primary:!Ze,secondary:Ze,small:!0,children:"Add roles"})}),[Ze,K,V]),Ie=(0,o.useMemo)((function(){return(null===ve||void 0===ve?void 0:ve.length)>=1}),[ve]),we=((0,o.useMemo)((function(){return(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(w.mm,{}),compact:!0,onClick:function(){K(T.PERMISSIONS),V(!1)},primary:!Ie,secondary:Ie,small:!0,children:"Add permission"})}),[Ie,K,V]),(0,o.useCallback)((function(e,n){return(0,B.jsx)(h.Z,{columnFlex:[null,1],columns:[{label:function(){var n=null===e||void 0===e?void 0:e.every((function(e){var n=e.id;return null===me||void 0===me?void 0:me[n]}));return(0,B.jsx)(a.Z,{checked:n,onClick:function(r){(0,H.j)(r),re(n?{rolesMapping:{}}:{rolesMapping:(0,S.HK)(e,(function(e){return e.id}))})}},"checkbox")},uuid:"actions"},{uuid:"Role"}],onClickRow:n?function(n){var r=e[n];r&&window.open("/settings/workspace/roles/".concat(null===r||void 0===r?void 0:r.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.name,r=e.id,i=!(null===me||void 0===me||!me[r]);return[(0,B.jsx)(a.Z,{checked:i,onClick:function(n){(0,H.j)(n);var l=z({},me);i?null===l||void 0===l||delete l[r]:l[r]=e,re({rolesMapping:l})}},"checkbox"),(0,B.jsx)(v.ZP,{monospace:!0,children:n},"name")]})),uuid:"roles"})}),[me,re])),be=(0,o.useCallback)((function(e,n){return(0,B.jsx)(h.Z,{columnFlex:[null,2,1,1,6],columns:[{uuid:"ID"},{uuid:"Entity"},{uuid:"Subtype"},{uuid:"Entity ID"},{rightAligned:!0,uuid:"Access"}],onClickRow:n?function(n){var r=e[n];r&&window.open("/settings/workspace/permissions/".concat(null===r||void 0===r?void 0:r.id),"_blank").focus()}:null,rows:null===e||void 0===e?void 0:e.map((function(e){var n=e.access,r=e.entity,i=e.entity_id,l=e.entity_name,s=e.entity_type,o=e.id,t=n?(0,_.q)(n):[],d=(null===t||void 0===t?void 0:t.length)||0;return[(0,B.jsx)(v.ZP,{default:!0,monospace:!0,children:o},"id"),(0,B.jsx)(v.ZP,{monospace:!0,children:l||r},"entityName"),(0,B.jsx)(v.ZP,{default:!0,monospace:!!s,children:s||"-"},"entityType"),(0,B.jsx)(v.ZP,{default:!0,monospace:!!i,children:i||"-"},"entityID"),(0,B.jsx)("div",{children:d>=1&&(0,B.jsx)(j.ZP,{alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end",children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,B.jsx)("div",{children:(0,B.jsxs)(v.ZP,{default:!0,monospace:!0,small:!0,children:[e,d>=2&&n<d-1&&(0,B.jsx)(v.ZP,{inline:!0,muted:!0,small:!0,children:",\xa0"})]})},e)}))})},"access")]})),uuid:"permissions"})}),[]),ke=(0,o.useMemo)((function(){return we(xe)}),[we,xe]),Ce=(0,o.useMemo)((function(){return we(pe,!0)}),[we,pe]),ye=(0,o.useMemo)((function(){return be(ve,!0)}),[be,ve]),_e=(0,B.jsxs)(I.N,{children:[(0,B.jsxs)(m.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsx)(x.Z,{level:4,children:"Profile"})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsx)(v.ZP,{default:!0,large:!0,children:"Avatar"}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({avatar:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"Add initials or an emoji",value:(null===X||void 0===X?void 0:X.avatar)||""})})]})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsxs)(v.ZP,{danger:"username"in J&&!(null!==X&&void 0!==X&&X.username),default:!0,large:!0,children:["Username ","username"in J&&!(null!==X&&void 0!==X&&X.username)&&(0,B.jsx)(v.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({username:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Mage Supreme",value:(null===X||void 0===X?void 0:X.username)||""})})]})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsx)(v.ZP,{default:!0,large:!0,children:"First name"}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({first_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Urza",value:(null===X||void 0===X?void 0:X.first_name)||""})})]})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsx)(v.ZP,{default:!0,large:!0,children:"Last name"}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({last_name:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. Andromeda",value:(null===X||void 0===X?void 0:X.last_name)||""})})]})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[le&&(0,B.jsx)(v.ZP,{default:!0,large:!0,children:"Email"}),!le&&(0,B.jsxs)(v.ZP,{danger:"email"in J&&!(null!==X&&void 0!==X&&X.email),default:!0,large:!0,children:["Email ","email"in J&&!(null!==X&&void 0!==X&&X.email)&&(0,B.jsx)(v.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(g.Z,{mr:b.cd}),le&&(0,B.jsxs)(f.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(v.ZP,{large:!0,muted:!0,children:null===X||void 0===X?void 0:X.email}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(w.KJ,{muted:!0,size:A}),(0,B.jsx)(g.Z,{mr:1})]}),!le&&(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.KJ,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({email:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"e.g. mage@power.com",type:"email",value:(null===X||void 0===X?void 0:X.email)||""})})]})})]}),(0,B.jsx)(g.Z,{mb:b.HN}),(0,B.jsxs)(m.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsx)(x.Z,{level:4,children:"Authentication"})}),(0,B.jsx)(u.Z,{light:!0}),le&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsxs)(v.ZP,{danger:"password_current"in J&&!(null!==X&&void 0!==X&&X.password_current),default:!0,large:!0,children:["Current password ","password_current"in J&&!(null!==X&&void 0!==X&&X.password_current)&&(0,B.jsx)(v.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({password_current:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===X||void 0===X?void 0:X.password_current)||""})})]})}),(0,B.jsx)(u.Z,{light:!0})]}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsxs)(v.ZP,{danger:"password"in J&&!(null!==X&&void 0!==X&&X.password),default:!0,large:!0,children:[le?"New password":"Password"," ","password"in J&&!(null!==X&&void 0!==X&&X.password)&&(0,B.jsx)(v.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({password:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===X||void 0===X?void 0:X.password)||""})})]})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsxs)(v.ZP,{danger:"password_confirmation"in J&&!(null!==X&&void 0!==X&&X.password_confirmation),default:!0,large:!0,children:["Confirm ",le?"new password":"password"," ","password_confirmation"in J&&!(null!==X&&void 0!==X&&X.password_confirmation)&&(0,B.jsx)(v.ZP,{danger:!0,inline:!0,large:!0,children:"is required"})]}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(f.Z,{flex:1,children:(0,B.jsx)(Z.Z,{afterIcon:(0,B.jsx)(w.I8,{}),afterIconClick:function(e,n){var r;null===n||void 0===n||null===(r=n.current)||void 0===r||r.focus()},afterIconSize:A,alignRight:!0,autoComplete:"off",large:!0,noBackground:!0,noBorder:!0,fullWidth:!0,onChange:function(e){return re({password_confirmation:e.target.value})},paddingHorizontal:0,paddingVertical:0,placeholder:"* * * * * * * *",type:"password",value:(null===X||void 0===X?void 0:X.password_confirmation)||""})})]})})]}),(0,B.jsx)(g.Z,{mb:b.HN}),le&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(m.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(x.Z,{level:4,children:"Roles"}),(0,B.jsx)(g.Z,{mr:b.cd}),Ze&&(0,B.jsx)(j.ZP,{alignItems:"center",children:Pe})]})}),(0,B.jsx)(u.Z,{light:!0}),!Ze&&(0,B.jsxs)(g.Z,{p:b.cd,children:[(0,B.jsx)(g.Z,{mb:b.cd,children:(0,B.jsx)(v.ZP,{default:!0,children:"This user currently has no roles attached."})}),(0,B.jsx)(j.ZP,{alignItems:"center",children:Pe})]}),Ze&&(0,B.jsx)(g.Z,{pb:b.Mq,children:Ce})]}),(0,B.jsx)(g.Z,{mb:b.HN}),(0,B.jsxs)(m.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsx)(j.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,B.jsx)(x.Z,{level:4,children:"Permissions"})})}),(0,B.jsx)(u.Z,{light:!0}),!Ie&&(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsx)(v.ZP,{default:!0,children:"This user currently has no permissions."})}),Ie&&(0,B.jsx)(g.Z,{pb:b.Mq,children:ye})]}),(0,B.jsx)(g.Z,{mb:b.HN}),(0,B.jsxs)(m.Z,{noPadding:!0,children:[(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsx)(x.Z,{level:4,children:"Metadata"})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsx)(v.ZP,{default:!0,large:!0,children:"Last updated"}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsxs)(f.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(v.ZP,{large:!0,monospace:!0,muted:!0,children:(null===X||void 0===X?void 0:X.updated_at)&&(0,C.d$)(null===X||void 0===X?void 0:X.updated_at,{includeSeconds:!0})}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(w.Pf,{muted:!0,size:A}),(0,B.jsx)(g.Z,{mr:1})]})]})}),(0,B.jsx)(u.Z,{light:!0}),(0,B.jsx)(g.Z,{p:b.cd,children:(0,B.jsxs)(j.ZP,{alignItems:"center",children:[(0,B.jsx)(v.ZP,{default:!0,large:!0,children:"Created at"}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsxs)(f.Z,{alignItems:"center",flex:1,justifyContent:"flex-end",children:[(0,B.jsx)(v.ZP,{large:!0,monospace:!0,muted:!0,children:(null===X||void 0===X?void 0:X.created_at)&&(0,C.d$)(null===X||void 0===X?void 0:X.created_at,{includeSeconds:!0})}),(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(w.Pf,{muted:!0,size:A}),(0,B.jsx)(g.Z,{mr:1})]})]})})]}),(0,B.jsx)(g.Z,{mb:b.HN})]}),(0,B.jsxs)(j.ZP,{children:[(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(w.vc,{}),disabled:!J||!(null!==(n=Object.keys(J))&&void 0!==n&&n.length),loading:de,onClick:function(){return te({user:z(z({},(0,M.GL)(X,["avatar","first_name","last_name","password","password_confirmation","password_current","username"].concat(le?[]:"email"),{include_blanks:!0})),{},{role_ids:Object.keys((null===X||void 0===X?void 0:X.rolesMapping)||{}).map((function(e){return Number(e)}))})})},primary:!0,children:le?"Save changes":"Create new user"}),l&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(c.ZP,{onClick:function(){return null===l||void 0===l?void 0:l()},secondary:!0,children:"Cancel and go back"})]}),le&&String(D)!==String(N)&&W&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g.Z,{mr:b.cd}),(0,B.jsx)(c.ZP,{beforeIcon:(0,B.jsx)(w.rF,{}),danger:!0,loading:fe,onClick:function(){return ue()},children:"Delete user"})]})]})]});return r?_e:(0,B.jsx)(p.Z,{after:ke,afterHeader:(0,B.jsx)(g.Z,{px:b.cd,children:(0,B.jsx)(v.ZP,{bold:!0,children:G})}),afterHidden:U,afterWidth:60*b.iI,appendBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Users"},linkProps:{href:"/settings/workspace/users"}},{bold:!0,label:function(){return(0,y.s)(X)}}],setAfterHidden:V,title:le?(0,y.s)(le):"New user",uuidItemSelected:k.B2.USERS,uuidWorkspaceSelected:k.Pl.USER_MANAGEMENT,children:le&&_e})}},36717:function(e,n,r){r.d(n,{q:function(){return s}});var i=r(75582),l=r(36288);function s(e){return Object.entries(l.K4).reduce((function(n,r){var l=(0,i.Z)(r,2),s=l[0],o=l[1];return e&Number(s)?n.concat(o):n}),[])}}}]);