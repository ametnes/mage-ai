(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9015],{59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},65557:function(e,n,t){"use strict";var r=t(21831),i=t(75582),o=t(82684),c=t(49555);n.Z=function(e){var n=e.children,t=e.uuid,u=e.uuids,a=void 0===u?[]:u,l=(0,c.j)("apiReloads"),s=(0,i.Z)(l,1)[0],d=(0,r.Z)(a);t&&d.push(t);var f=d.map((function(e){return String(s[e])||"-"})).join("_");return o.cloneElement(n,{key:f})}},32929:function(e,n,t){"use strict";t.d(n,{A2:function(){return v},dP:function(){return b},hS:function(){return x},iK:function(){return m},n9:function(){return g},qy:function(){return C}});var r,i=t(26304),o=t(82394),c=t(13507),u=t(44425),a=t(72473),l=t(57653),s=t(55283),d=["uuid"],f=["uuid"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g={uuid:"Blocks"},v={uuid:"Pipelines"},b=[g,v],m=(r={},(0,o.Z)(r,u.tf.CALLBACK,a.AQ),(0,o.Z)(r,u.tf.CHART,a.GQ),(0,o.Z)(r,u.tf.CONDITIONAL,a.hW),(0,o.Z)(r,u.tf.CUSTOM,a.VS),(0,o.Z)(r,u.tf.DATA_EXPORTER,a.zS),(0,o.Z)(r,u.tf.DATA_LOADER,a.rH),(0,o.Z)(r,u.tf.DBT,a.xE),(0,o.Z)(r,u.tf.EXTENSION,a.Bf),(0,o.Z)(r,u.tf.MARKDOWN,a.$B),(0,o.Z)(r,u.tf.SENSOR,a.LM),(0,o.Z)(r,u.tf.TRANSFORMER,a.Sv),r),C=[{Icon:a.zQ,uuid:"All templates"}].concat([{uuid:u.tf.DATA_LOADER},{uuid:u.tf.TRANSFORMER},{selectedIconProps:{inverted:!0},uuid:u.tf.DATA_EXPORTER},{uuid:u.tf.SENSOR},{selectedIconProps:{inverted:!0},uuid:u.tf.CUSTOM},{uuid:u.tf.CHART},{selectedIconProps:{inverted:!0},uuid:u.tf.CALLBACK},{selectedIconProps:{inverted:!0},uuid:u.tf.CONDITIONAL},{uuid:u.tf.EXTENSION},{selectedBackgroundColor:null,uuid:u.tf.DBT},{selectedIconProps:{inverted:!0},uuid:u.tf.MARKDOWN}].map((function(e){var n=e.uuid,t=(0,i.Z)(e,d);return h({Icon:m[n],filterTemplates:function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e.block_type===n}))},label:function(){return u.V4[n]},selectedBackgroundColor:function(e){return(0,s.qn)(n,{theme:e}).accent},uuid:n},t)}))),x=[{Icon:a.zQ,uuid:"All templates"}].concat([{Icon:a.X5,uuid:l.qL.PYTHON},{Icon:a.ZG,uuid:l.qL.INTEGRATION},{Icon:c.Z,uuid:l.qL.STREAMING}].map((function(e){var n=e.uuid,t=(0,i.Z)(e,f);return h({filterTemplates:function(e){return null===e||void 0===e?void 0:e.filter((function(e){var t;return(null===e||void 0===e||null===(t=e.pipeline)||void 0===t?void 0:t.type)===n}))},label:function(){return l.G7[n]},uuid:n},t)})))},26419:function(e,n,t){"use strict";t.d(n,{a:function(){return r}});var r={compact:!0,highlightOnHoverAlt:!0,noBorder:!0,padding:"4px 12px"}},90758:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(82394),i=t(26304),o=t(82684),c=t(38626),u=t(39867),a=t(55485),l=t(48670),s=t(38276),d=t(30160),f=t(12468),p=t(44897),h=t(79899),g=t(72473),v=t(97133),b=t(70515),m=t(15610),C=t(95924),x=t(28598),y=1.25*b.iI;var T=function(e){var n=e.filePath,t=e.filesTouched,r=void 0===t?{}:t,i=e.isLast,c=e.onClickTab,T=e.onClickTabClose,O=e.renderTabTitle,P=e.savePipelineContent,S=e.selected,Z=e.themeContext,E=(0,o.useState)(!1),j=E[0],I=E[1],A=(0,h.Z)({filePath:n,name:n,uuid:n}),_=A.BlockIcon,w=A.Icon,R=A.color,k=A.iconColor,N=A.isBlockFile;return(0,x.jsx)(a.ZP,{flexDirection:"column",fullHeight:!0,onClick:function(e){e.preventDefault(),S||(c?c(n):(null===P||void 0===P||P(),(0,m.u)({file_path:encodeURIComponent(n)})))},onMouseEnter:function(){return I(!0)},onMouseLeave:function(){return I(!1)},children:(0,x.jsx)(v.Gb,{last:i,selected:S,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,children:[(0,x.jsx)(f.Z,{appearAbove:!0,appearBefore:!0,label:n,size:null,widthFitContent:!0,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,children:[!r[n]&&(0,x.jsx)(x.Fragment,{children:N?(0,x.jsx)(_,{color:R,size:1*b.iI,square:!0}):(0,x.jsx)(w,{fill:k,size:1.5*b.iI})}),r[n]&&(0,x.jsx)(f.Z,{label:"Unsaved changes",size:null,widthFitContent:!0,children:(0,x.jsx)("div",{style:{padding:1},children:(0,x.jsx)(u.Z,{borderColor:(Z||p.Z).borders.danger,size:y})})}),(0,x.jsx)(s.Z,{mr:1}),(0,x.jsx)(d.ZP,{monospace:!0,muted:!S,noWrapping:!0,small:!0,children:O?O(n):n})]})}),T&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.Z,{mr:2}),(0,x.jsx)(f.Z,{label:"Close",size:null,widthFitContent:!0,children:(0,x.jsxs)(l.Z,{autoHeight:!0,block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(e){(0,C.j)(e),null===T||void 0===T||T(n)},preventDefault:!0,children:[(j||S)&&(0,x.jsx)(g.x8,{muted:!S,size:y}),!j&&!S&&(0,x.jsx)("div",{style:{width:y}})]})})]})]})})})},O=t(86735),P=["filePaths","isSelectedFilePath","onClickTab","onClickTabClose","selectedFilePath","tabsBefore"];function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=function(e){var n=e.filePaths,t=e.isSelectedFilePath,r=e.onClickTab,u=e.onClickTabClose,l=e.selectedFilePath,s=e.tabsBefore,d=(0,i.Z)(e,P),f=(0,o.useContext)(c.ThemeContext),p=(0,o.useMemo)((function(){return n.map((function(e){return decodeURIComponent(e)}))}),[n]),h=(0,o.useMemo)((function(){return(null===p||void 0===p?void 0:p.length)||0}),[p]);return(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"flex-start",children:[(null===s||void 0===s?void 0:s.length)>=1&&(null===s||void 0===s?void 0:s.map((function(e){var n=e.label,i=e.onClick,o=e.uuid,c=t?t(o,l):l===encodeURIComponent(o);return(0,x.jsx)(T,{onClickTab:function(){return null===i||void 0===i?void 0:i({onClickTab:r})},renderTabTitle:function(){return n?null===n||void 0===n?void 0:n():o},selected:c,themeContext:f},o)}))),null===p||void 0===p?void 0:p.map((function(e,n){var i=t?t(e,l):l===encodeURIComponent(e);return(0,o.createElement)(T,Z(Z({},d),{},{filePath:e,isLast:n===h-1,key:e,onClickTab:r,onClickTabClose:function(e){if(u)u(e);else{var n=(0,O.Od)(p,(function(n){return n===e})).map((function(e){return encodeURIComponent(e)}));(0,m.u)({file_path:n[n.length-1]||null,"file_paths[]":n},{pushHistory:!0})}},selected:i,themeContext:f}))}))]})}},97133:function(e,n,t){"use strict";t.d(n,{Gb:function(){return f},fm:function(){return s},lO:function(){return l},rK:function(){return d},zn:function(){return a}});var r=t(38626),i=t(44897),o=t(2842),c=t(70515),u=t(47041),a=300,l=r.default.div.withConfig({displayName:"indexstyle__PipelineContainerStyle",componentId:"sc-1sv9513-0"})([".pipeline-detail-enter-active{opacity:1;transition:opacity ","ms linear;}.pipeline-detail-enter-done{opacity:0;transition:opacity ","ms linear;}"],a,a),s=r.default.div.withConfig({displayName:"indexstyle__OverlayStyle",componentId:"sc-1sv9513-1"})(["height:100vh;opacity:1;position:fixed;width:100vw;z-index:9999;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeArea,";\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__PipelineHeaderStyle",componentId:"sc-1sv9513-2"})(["height:","px;position:sticky;top:","px;width:100%;z-index:5;"," "," "," ",""],o.Wi,o.Wi,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n  ")}),(function(e){return e.relativePosition&&"\n    position: relative;\n  "}),(function(e){return e.secondary&&"\n    height: ".concat(37,"px;\n    top: ").concat(o.Wi,"px;\n    overflow-x: auto;\n    z-index: 3;\n  ")}),(0,u.y$)()),f=r.default.div.withConfig({displayName:"indexstyle__FileTabStyle",componentId:"sc-1sv9513-3"})(["border-right:1px solid transparent;height:100%;padding:","px ","px;"," "," ",""],1*c.iI,1.5*c.iI,(function(e){return"\n    &:hover {\n      cursor: default;\n\n      p {\n        color: ".concat((e.theme.content||i.Z.content).active," !important;\n        cursor: default;\n      }\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||i.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.selected&&!e.last&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).light," !important;\n  ")}));r.default.div.withConfig({displayName:"indexstyle__HeaderViewOptionsStyle",componentId:"sc-1sv9513-4"})(["left:50%;position:absolute;transform:translateX(-50%);"])},85385:function(e,n,t){"use strict";t.d(n,{Qq:function(){return h},Z7:function(){return g},cH:function(){return i},du:function(){return f},fp:function(){return d},j5:function(){return p},uM:function(){return s}});var r,i,o=t(82394),c=t(57653),u=t(82359),a=t(72473),l=t(86735),s="sideview",d=90;!function(e){e.ADDON_BLOCKS="addon_blocks",e.BLOCK_SETTINGS="block_settings",e.CALLBACKS="callbacks",e.CHARTS="charts",e.DATA="data",e.EXTENSIONS="power_ups",e.FILES="files",e.FILE_VERSIONS="file_versions",e.GRAPHS="graphs",e.INTERACTIONS="interactions",e.REPORTS="reports",e.SECRETS="secrets",e.SETTINGS="settings",e.TERMINAL="terminal",e.TREE="tree",e.VARIABLES="variables"}(i||(i={}));i.BLOCK_SETTINGS,i.CALLBACKS,i.CHARTS,i.DATA,i.EXTENSIONS,i.TREE;var f=[i.DATA];function p(e){var n,t,r,o=[{key:i.TREE,label:"Tree"},{buildLabel:function(e){var n=(e.pipeline||{}).widgets,t=void 0===n?[]:n;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:i.CHARTS},{buildLabel:function(e){var n=e.variables;return(null===n||void 0===n?void 0:n.length)>=1?"Variables (".concat(n.length,")"):"Variables"},key:i.VARIABLES},{buildLabel:function(e){var n=e.secrets;return(null===n||void 0===n?void 0:n.length)>=1?"Secrets (".concat(n.length,")"):"Secrets"},key:i.SECRETS}];return c.qL.PYSPARK!==(null===e||void 0===e||null===(n=e.pipeline)||void 0===n?void 0:n.type)&&o.push.apply(o,[{buildLabel:function(e){e.pipeline;return"Add-on blocks"},key:i.ADDON_BLOCKS},{buildLabel:function(e){var n=(e.pipeline||{}).extensions,t=void 0===n?{}:n,r=0;return Object.values(t).forEach((function(e){var n=e.blocks;r+=(null===n||void 0===n?void 0:n.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:i.EXTENSIONS}]),o.push.apply(o,[{key:i.DATA,label:"Data"},{key:i.TERMINAL,label:"Terminal"},{key:i.BLOCK_SETTINGS,label:"Block settings"}]),null!==e&&void 0!==e&&null!==(t=e.project)&&void 0!==t&&null!==(r=t.features)&&void 0!==r&&r[u.d.INTERACTIONS]&&o.push({key:i.INTERACTIONS,label:"Interactions"}),o}function h(e){return(0,l.HK)(p(e),(function(e){return e.key}))}var g=(r={},(0,o.Z)(r,i.ADDON_BLOCKS,a.EJ),(0,o.Z)(r,i.BLOCK_SETTINGS,a.JG),(0,o.Z)(r,i.CALLBACKS,a.AQ),(0,o.Z)(r,i.CHARTS,a.GQ),(0,o.Z)(r,i.DATA,a.iA),(0,o.Z)(r,i.EXTENSIONS,a.Bf),(0,o.Z)(r,i.INTERACTIONS,a.yd),(0,o.Z)(r,i.SECRETS,a.Yo),(0,o.Z)(r,i.SETTINGS,a.Zr),(0,o.Z)(r,i.TERMINAL,a.oI),(0,o.Z)(r,i.TREE,a.mp),(0,o.Z)(r,i.VARIABLES,a.LO),r)},89706:function(e,n,t){"use strict";t.d(n,{BB:function(){return f},JD:function(){return y},Lu:function(){return u},PF:function(){return m},aZ:function(){return c},d2:function(){return b},dT:function(){return a},n6:function(){return p},nB:function(){return x},oy:function(){return C},tE:function(){return h},xF:function(){return v}});var r,i,o,c,u,a,l,s=t(82394),d=t(44425);!function(e){e.DBT="dbt"}(c||(c={})),function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SH="sh",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(u||(u={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(a||(a={})),function(e){e.EXCLUDE_DIR_PATTERN="exclude_dir_pattern",e.EXCLUDE_PATTERN="exclude_pattern",e.PATTERN="pattern"}(l||(l={}));var f=(r={},(0,s.Z)(r,l.EXCLUDE_PATTERN,"a^"),(0,s.Z)(r,l.EXCLUDE_DIR_PATTERN,"a^"),r),p=[u.PY,u.SQL],h=[u.MD,u.PY,u.R,u.SQL,u.YAML],g=[u.JSON,u.MD,u.PY,u.R,u.SH,u.SQL,u.TXT,u.YAML,u.YML],v=new RegExp(g.map((function(e){return".".concat(e,"$")})).join("|")),b=new RegExp([u.CSV,u.JSON,u.MD,u.PY,u.R,u.SH,u.SQL,u.TXT,u.YAML,u.YML].map((function(e){return".".concat(e,"$")})).join("|")),m="charts",C="pipelines",x=(i={},(0,s.Z)(i,u.MD,d.t6.MARKDOWN),(0,s.Z)(i,u.JSON,u.JSON),(0,s.Z)(i,u.PY,d.t6.PYTHON),(0,s.Z)(i,u.R,d.t6.R),(0,s.Z)(i,u.SQL,d.t6.SQL),(0,s.Z)(i,u.TXT,"text"),(0,s.Z)(i,u.YAML,d.t6.YAML),(0,s.Z)(i,u.YML,d.t6.YAML),i),y=(o={},(0,s.Z)(o,d.t6.MARKDOWN,u.MD),(0,s.Z)(o,d.t6.PYTHON,u.PY),(0,s.Z)(o,d.t6.R,u.R),(0,s.Z)(o,d.t6.SQL,u.SQL),(0,s.Z)(o,d.t6.YAML,u.YAML),(0,s.Z)(o,"text",u.TXT),o)},65956:function(e,n,t){"use strict";var r=t(38626),i=t(55485),o=t(38276),c=t(30160),u=t(44897),a=t(42631),l=t(47041),s=t(70515),d=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],a.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||u.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||u.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||u.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],a.n_,a.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||u.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||u.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,l.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),v=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],a.M8,a.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,u=e.contentContainerRef,a=e.dark,l=e.footer,s=e.fullHeight,f=void 0===s||s,b=e.fullWidth,m=void 0===b||b,C=e.header,x=e.headerHeight,y=e.headerIcon,T=e.headerPaddingVertical,O=e.headerTitle,P=e.maxHeight,S=e.maxWidth,Z=e.minWidth,E=e.noPadding,j=e.overflowVisible,I=e.subtitle,A=e.success;return(0,d.jsxs)(p,{borderless:n,dark:a,fullHeight:f,fullWidth:m,maxHeight:P,maxWidth:S,minWidth:Z,overflowVisible:j,ref:r,success:A,children:[(C||O)&&(0,d.jsxs)(h,{headerPaddingVertical:T,height:x,children:[C&&C,O&&(0,d.jsx)(i.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,d.jsxs)(i.ZP,{alignItems:"center",children:[y&&y,(0,d.jsx)(o.Z,{ml:y?1:0,children:(0,d.jsx)(c.ZP,{bold:!0,default:!0,children:O})})]})})]}),(0,d.jsxs)(g,{maxHeight:P,noPadding:E,overflowVisible:j,ref:u,children:[I&&"string"===typeof I&&(0,d.jsx)(o.Z,{mb:2,children:(0,d.jsx)(c.ZP,{default:!0,children:I})}),I&&"string"!==typeof I&&I,t]}),l&&(0,d.jsx)(v,{children:l})]})}},35185:function(e,n,t){"use strict";var r=t(82394),i=t(91835),o=(t(82684),t(38626)),c=t(44897),u=t(42631),a=t(70515),l=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],u.BG,.75*a.iI,(function(e){return"\n    background-color: ".concat((e.theme.monotone||c.Z.monotone).grey200,";\n  ")})),p=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(e){return!e.danger&&"\n    background-color: ".concat((e.theme.progress||c.Z.progress).positive,";\n  ")}),(function(e){return e.progress&&"\n    width: ".concat(e.progress,"%;\n  ")}),(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.progress||c.Z.progress).negative,";\n  ")}),(function(e){return e.animateProgress&&"\n    animation: animate-progress ".concat(e.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(e.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(e.animateProgress.end,"%;\n      }\n    }\n  ")}));n.Z=function(e){var n=(0,i.Z)({},e);return(0,l.jsx)(f,d(d({},n),{},{children:(0,l.jsx)(p,d({},n))}))}},92677:function(e,n,t){"use strict";var r=t(82684),i=t(38626),o=t(97618),c=t(55485),u=t(28598),a=i.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),l=i.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]);n.Z=function(e){var n=e.children,t=e.divider,i=r.Children.toArray(n).length;return(0,u.jsx)(a,{children:(0,u.jsx)(c.ZP,{children:r.Children.map(n,(function(e,n){return e&&(0,u.jsxs)(o.Z,{children:[n>=1&&t&&(0,u.jsx)(l,{}),r.cloneElement(e,{borderRadiusLeft:i>=2&&0===n,borderRadiusRight:i>=2&&n===i-1,halfPaddingLeft:i>=2&&0!==n,halfPaddingRight:i>=2&&n!==i-1,noBorder:i>=2&&n>0&&n<i-1,noBorderRight:i>=2&&n!==i-1})]},"button-group-child-".concat(n))}))})})}},13507:function(e,n,t){"use strict";var r=t(28598);n.Z=function(e){var n=e.fill,t=void 0===n?"white":n,i=e.size;return(0,r.jsxs)("svg",{fill:"none",height:i,viewBox:"0 0 20 20",width:i,xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("g",{clipPath:"url(#clip0_11802_82850)",children:[(0,r.jsx)("path",{d:"M15.6276 1.73378C15.97 1.96689 16.022 2.44136 15.7638 2.76532C15.5057 3.08929 15.0355 3.13958 14.69 2.91102C13.3636 2.0334 11.8126 1.54269 10.2126 1.50266C8.36175 1.45636 6.54643 2.01561 5.04253 3.09541C3.53863 4.1752 2.4284 5.71649 1.8806 7.48498C1.40702 9.01387 1.37618 10.6403 1.7837 12.1777C1.88982 12.5781 1.69185 13.0076 1.30237 13.1486C0.912892 13.2896 0.479935 13.0887 0.368517 12.6897C-0.147093 10.8435 -0.122519 8.88224 0.447763 7.04116C1.09223 4.96057 2.39838 3.14729 4.16768 1.87695C5.93697 0.606601 8.07265 -0.0513415 10.2501 0.00312922C12.1769 0.0513296 14.0431 0.655033 15.6276 1.73378Z",fill:t}),(0,r.jsx)("path",{d:"M13.2714 5.89383C13.5295 5.56986 13.4781 5.09341 13.1245 4.87771C12.2306 4.33247 11.2055 4.02828 10.15 4.00188C8.84359 3.9692 7.56218 4.36396 6.50061 5.12617C5.43903 5.88838 4.65534 6.97634 4.26866 8.22469C3.95628 9.23316 3.91679 10.3017 4.14767 11.323C4.23901 11.727 4.67403 11.928 5.06351 11.787C5.45299 11.6461 5.64766 11.216 5.57323 10.8086C5.44361 10.0989 5.48588 9.36461 5.70149 8.66852C5.9915 7.73226 6.57927 6.91628 7.37545 6.34463C8.17164 5.77297 9.13269 5.4769 10.1125 5.50141C10.841 5.51963 11.5503 5.71432 12.1813 6.06401C12.5436 6.26478 13.0133 6.2178 13.2714 5.89383Z",fill:t}),(0,r.jsx)("path",{clipRule:"evenodd",d:"M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10Z",fill:t,fillRule:"evenodd"}),(0,r.jsx)("path",{d:"M6.87554 15.1223C6.52192 14.9066 6.47052 14.4301 6.72863 14.1062C6.98673 13.7822 7.45642 13.7352 7.81872 13.936C8.44971 14.2857 9.15897 14.4804 9.88746 14.4986C10.8673 14.5231 11.8284 14.227 12.6245 13.6554C13.4207 13.0837 14.0085 12.2677 14.2985 11.3315C14.5141 10.6354 14.5564 9.90111 14.4268 9.19144C14.3523 8.78397 14.547 8.35395 14.9365 8.21295C15.326 8.07196 15.761 8.27297 15.8523 8.67699C16.0832 9.69826 16.0437 10.7668 15.7313 11.7753C15.3447 13.0237 14.561 14.1116 13.4994 14.8738C12.4378 15.636 11.1564 16.0308 9.84995 15.9981C8.79455 15.9717 7.76942 15.6675 6.87554 15.1223Z",fill:t}),(0,r.jsx)("path",{d:"M4.23615 17.2347C3.97805 17.5586 4.03001 18.0331 4.37241 18.2662C5.95691 19.345 7.82314 19.9487 9.74992 19.9969C11.9274 20.0513 14.063 19.3934 15.8323 18.1231C17.6016 16.8527 18.9078 15.0394 19.5522 12.9588C20.1225 11.1178 20.1471 9.15647 19.6315 7.31026C19.5201 6.91131 19.0871 6.7104 18.6976 6.85139C18.3082 6.99238 18.1102 7.42188 18.2163 7.82227C18.6238 9.35971 18.593 10.9861 18.1194 12.515C17.5716 14.2835 16.4614 15.8248 14.9575 16.9046C13.4536 17.9844 11.6382 18.5436 9.78743 18.4973C8.18738 18.4573 6.63645 17.9666 5.30996 17.089C4.96451 16.8604 4.49426 16.9107 4.23615 17.2347Z",fill:t})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_11802_82850",children:(0,r.jsx)("rect",{fill:t,height:"20",width:"20"})})})]})}},83087:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),c=t(82684),u=t(65557),a=t(29269),l=t(43449),s=t(90758),d=t(93808),f=t(38276),p=t(59533),h=t(35686),g=t(86735),v=t(15610),b=t(69419),m=t(97133),C=t(75083),x=t(28598);function y(){var e=(0,c.useState)(null),n=e[0],t=e[1],r=(0,b.iV)(),i=r.file_path,o=(0,c.useMemo)((function(){var e=r["file_paths[]"]||[];return Array.isArray(e)||(e=[e]),e}),[r]),d=(0,c.useCallback)((function(e){var n=encodeURIComponent(e),t=(0,b.iV)()["file_paths[]"]||[];Array.isArray(t)||(t=[t]),t.includes(n)||t.push(n),(0,v.u)({file_path:n,"file_paths[]":t})}),[]),y=h.ZP.files.list(),T=y.data,O=y.mutate,P=(0,c.useMemo)((function(){return(null===T||void 0===T?void 0:T.files)||[]}),[T]),S=(0,c.useRef)(null),Z=(0,c.useState)(null),E=Z[0],j=Z[1],I=(0,c.useState)([]),A=I[0],_=I[1],w=(0,c.useState)({}),R=w[0],k=w[1],N=(0,c.useMemo)((function(){return(0,x.jsx)(f.Z,{ml:1,mt:1,children:(0,x.jsx)(a.Z,{fetchFiles:O,files:P,openFile:d,ref:S,showError:t})})}),[O,P,d,t]);return(0,c.useEffect)((function(){j(i)}),[i]),(0,c.useEffect)((function(){(0,g.fS)(o,A)||_(o)}),[o,A]),(0,x.jsx)(p.Z,{before:N,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"File browser"}}],errors:n,mainContainerHeader:(0,x.jsx)(m.rK,{secondary:!0,children:(0,x.jsx)(s.Z,{filePaths:A,filesTouched:R,selectedFilePath:E})}),pageName:C.L6.FILE_BROWSER,children:null===o||void 0===o?void 0:o.map((function(e){return(0,x.jsx)("div",{style:{display:E===e?null:"none"},children:(0,x.jsx)(u.Z,{uuid:"manage/FileEditor/".concat(decodeURIComponent(e)),children:(0,x.jsx)(l.Z,{active:E===e,filePath:e,selectedFilePath:E,setErrors:t,setFilesTouched:k})})},e)}))})}y.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,d.Z)(y)},19698:function(e,n,t){"use strict";var r=t(82684),i=t(35686);n.Z=function(){var e=i.ZP.statuses.list().data;return{status:(0,r.useMemo)((function(){var n;return null===e||void 0===e||null===(n=e.statuses)||void 0===n?void 0:n[0]}),[e])}}},90205:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/files",function(){return t(83087)}])}},function(e){e.O(0,[2678,1154,844,6639,7011,3494,1557,2512,7858,5499,5283,5810,9269,1598,3449,9774,2888,179],(function(){return n=90205,e(e.s=n);var n}));var n=e.O();_N_E=n}]);