"use strict";(self.webpackChunkstrapi_demo=self.webpackChunkstrapi_demo||[]).push([[7580],{61121:(ae,v,s)=>{s.d(v,{O:()=>_});var e=s(8295);const _=e.Wx},77580:(ae,v,s)=>{s.r(v),s.d(v,{default:()=>Ce});var e=s(74081),_=s(94050),l=s(47189),D=s(27279),d=s(70627),S=s(22572),te=s(51926),le=s(8295),ie=s(61121),K=s(23298),C=s(74577),Z=s(12881),N=s(5938),b=s(6918),E=s(32370),F=s(15244),z=s(69878),j=s(10701),P=s(94098),V=s(84366),Y=s(93415),p=s(61908),$=s(35250),O=s(48102),ne=s(5627),oe=s(78955),de=s(70774),ce=s(38101),Q=s(93153),M=s(50086),re=s(10989),ge=s(86967),X=s(4987),_e=s(73354),me=s(27875),ue=s(74758),Ee=s(6191),J=s(59082),he=s(26784),De=s(78665),G=s(36938),Me=s(52448),h=s(61020),y=s(71563),fe=s(98934),T=s(59461),R=s(47853),xe=s(40464),Te=s(10131),Re=s(29206),Ae=s(43433),Be=s(8175),Ie=s(87830),Ue=s(74919);const Pe=()=>{const[t,i]=(0,D.useState)(!1),n=(0,T.I0)(),a=(0,_.lm)(),{post:o}=(0,_.kY)();return{isAdding:t,addLocale:async r=>{i(!0);try{const{data:g}=await o("/i18n/locales",r);a({type:"success",message:{id:(0,l.g)("Settings.locales.modal.create.success")}}),n({type:l.A,newLocale:g})}catch(g){const m=fe(g,"response.payload.message",null);throw m&&m.includes("already exists")?a({type:"warning",message:{id:(0,l.g)("Settings.locales.modal.create.alreadyExist")}}):a({type:"warning",message:{id:"notification.error"}}),g}finally{i(!1)}}}},H=(0,R.Ry)().shape({code:(0,R.Z_)().required(),displayName:(0,R.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(_.I0.required)}),pe=()=>{const{values:t,setFieldValue:i}=(0,y.u6)(),{formatMessage:n}=(0,h.Z)();return(0,e.jsx)(S.X,{hint:n({id:(0,l.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>i("isDefault",!t.isDefault),value:t.isDefault,children:n({id:(0,l.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})},w=()=>{const{formatMessage:t}=(0,h.Z)(),{notifyStatus:i}=(0,te.G)(),n=(0,_.lm)(),{get:a}=(0,_.kY)(),{isLoading:o,data:c}=(0,xe.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:r}=await a("/i18n/iso-locales");return i(t({id:(0,l.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),r}catch{return n({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:c,isLoading:o}},A=D.memo(({value:t,onClear:i,onLocaleChange:n,error:a})=>{const{formatMessage:o}=(0,h.Z)(),{defaultLocales:c,isLoading:r}=w(),{locales:g}=(0,l.u)(),m=(c||[]).map(u=>({label:u.name,value:u.code})).filter(({value:u})=>{const f=g.find(({code:L})=>L===u);return!f||f.code===t}),x=t||"";return(0,e.jsx)(le.hQ,{"aria-busy":r,error:a,label:o({id:(0,l.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:x,onClear:t?i:void 0,onChange:u=>{const f=m.find(L=>L.value===u);f&&n({code:f.value,displayName:f.label})},placeholder:o({id:"components.placeholder.select",defaultMessage:"Select"}),children:m.map(u=>(0,e.jsx)(ie.O,{value:u.value,children:u.label},u.value))})});A.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},A.propTypes={error:d.string,onClear:d.func,onLocaleChange:d.func,value:d.string};const Oe=()=>{const{formatMessage:t}=(0,h.Z)(),{values:i,handleChange:n,setFieldValue:a,errors:o}=(0,y.u6)(),c=(0,D.useCallback)(g=>{a("displayName",g.displayName),a("code",g.code)},[a]),r=(0,D.useCallback)(()=>{a("displayName",""),a("code","")},[a]);return(0,e.jsxs)(K.r,{gap:4,children:[(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(A,{error:o.code,value:i.code,onLocaleChange:c,onClear:r})}),(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(Z.o,{name:"displayName",label:t({id:(0,l.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:t({id:(0,l.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:o.displayName?t({id:(0,l.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:i.displayName,onChange:n})})]})},ye={code:"",displayName:"",isDefault:!1},q=({onClose:t})=>{const{isAdding:i,addLocale:n}=Pe(),{formatMessage:a}=(0,h.Z)(),{refetchPermissions:o}=(0,_.vn)(),c=async r=>{await n({code:r.code,name:r.displayName,isDefault:r.isDefault}),await o()};return(0,e.jsx)(N.P,{onClose:t,labelledBy:"add-locale-title",children:(0,e.jsx)(y.J9,{initialValues:ye,onSubmit:c,validationSchema:H,validateOnChange:!1,children:(0,e.jsxs)(_.l0,{children:[(0,e.jsx)(b.x,{children:(0,e.jsx)(E.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title",children:a({id:(0,l.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),(0,e.jsx)(F.f,{children:(0,e.jsxs)(z.v,{label:a({id:(0,l.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(j.k,{justifyContent:"space-between",children:[(0,e.jsx)(E.Z,{as:"h2",variant:"beta",children:a({id:(0,l.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(P.m,{children:[(0,e.jsx)(P.O,{children:a({id:(0,l.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(P.O,{children:a({id:(0,l.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(V.i,{}),(0,e.jsx)(Y.x,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(p.n,{children:[(0,e.jsx)(p.x,{children:(0,e.jsx)(Oe,{})}),(0,e.jsx)(p.x,{children:(0,e.jsx)(pe,{})})]})})]})}),(0,e.jsx)($.m,{startActions:(0,e.jsx)(O.z,{variant:"tertiary",onClick:t,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(O.z,{type:"submit",startIcon:(0,e.jsx)(J.Z,{}),disabled:i,children:a({id:"global.save",defaultMessage:"Save"})})})]})})})};q.propTypes={onClose:d.func.isRequired};const Le=()=>{const[t,i]=(0,D.useState)(!1),n=(0,T.I0)(),a=(0,_.lm)(),{del:o}=(0,_.kY)();return{isDeleting:t,deleteLocale:async r=>{try{i(!0),await o(`/i18n/locales/${r}`),a({type:"success",message:{id:(0,l.g)("Settings.locales.modal.delete.success")}}),n({type:l.D,id:r})}catch{a({type:"warning",message:{id:"notification.error"}})}finally{i(!1)}}}},B=({localeToDelete:t,onClose:i})=>{const{isDeleting:n,deleteLocale:a}=Le(),o=Boolean(t),c=()=>a(t.id).then(i);return(0,e.jsx)(_.QH,{isConfirmButtonLoading:n,onConfirm:c,onToggleDialog:i,isOpen:o})};B.defaultProps={localeToDelete:void 0},B.propTypes={localeToDelete:d.shape({id:d.number.isRequired}),onClose:d.func.isRequired};const ve=()=>{const[t,i]=(0,D.useState)(!1),n=(0,T.I0)(),a=(0,_.lm)(),{put:o}=(0,_.kY)();return{isEditing:t,editLocale:async(r,g)=>{try{i(!0);const{data:m}=await o(`/i18n/locales/${r}`,g);a({type:"success",message:{id:(0,l.g)("Settings.locales.modal.edit.success")}}),n({type:l.U,editedLocale:m})}catch{a({type:"warning",message:{id:"notification.error"}})}finally{i(!1)}}}},k=({isDefaultLocale:t})=>{const{values:i,setFieldValue:n}=(0,y.u6)(),{formatMessage:a}=(0,h.Z)();return(0,e.jsx)(S.X,{name:"isDefault",hint:a({id:(0,l.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>n("isDefault",!i.isDefault),value:i.isDefault,disabled:t,children:a({id:(0,l.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})};k.propTypes={isDefaultLocale:d.bool.isRequired};const ee=({locale:t})=>{const{formatMessage:i}=(0,h.Z)(),{values:n,handleChange:a,errors:o}=(0,y.u6)(),{defaultLocales:c,isLoading:r}=w(),g=!r&&c.find(m=>m.code===t.code);return(0,e.jsxs)(K.r,{gap:4,children:[(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(ne.P,{label:i({id:(0,l.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:g?.code||t.code,disabled:!0,children:(0,e.jsx)(oe.W,{value:g?.code||t.code,children:g?.name||t.code})})}),(0,e.jsx)(C.P,{col:6,children:(0,e.jsx)(Z.o,{name:"displayName",label:i({id:(0,l.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:i({id:(0,l.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:o.displayName?i({id:(0,l.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:n.displayName,onChange:a})})]})};ee.propTypes={locale:d.shape({id:d.number.isRequired,name:d.string.isRequired,code:d.string.isRequired,isDefault:d.bool.isRequired}).isRequired};const I=({locale:t,onClose:i})=>{const{refetchPermissions:n}=(0,_.vn)(),{isEditing:a,editLocale:o}=ve(),{formatMessage:c}=(0,h.Z)(),r=async({displayName:g,isDefault:m})=>{await o(t.id,{name:g,isDefault:m}),await n()};return(0,e.jsx)(N.P,{onClose:i,labelledBy:"edit-locale-title",children:(0,e.jsx)(y.J9,{initialValues:{code:t?.code,displayName:t?.name||"",isDefault:Boolean(t?.isDefault)},onSubmit:r,validationSchema:H,children:(0,e.jsxs)(_.l0,{children:[(0,e.jsx)(b.x,{children:(0,e.jsx)(E.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title",children:c({id:(0,l.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"})})}),(0,e.jsx)(F.f,{children:(0,e.jsxs)(z.v,{label:c({id:(0,l.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,e.jsxs)(j.k,{justifyContent:"space-between",children:[(0,e.jsx)(E.Z,{as:"h2",children:c({id:(0,l.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,e.jsxs)(P.m,{children:[(0,e.jsx)(P.O,{children:c({id:(0,l.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,e.jsx)(P.O,{children:c({id:(0,l.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,e.jsx)(V.i,{}),(0,e.jsx)(Y.x,{paddingTop:7,paddingBottom:7,children:(0,e.jsxs)(p.n,{children:[(0,e.jsx)(p.x,{children:(0,e.jsx)(ee,{locale:t})}),(0,e.jsx)(p.x,{children:(0,e.jsx)(k,{isDefaultLocale:Boolean(t&&t.isDefault)})})]})})]})}),(0,e.jsx)($.m,{startActions:(0,e.jsx)(O.z,{variant:"tertiary",onClick:i,children:c({id:"app.components.Button.cancel"})}),endActions:(0,e.jsx)(O.z,{type:"submit",startIcon:(0,e.jsx)(J.Z,{}),disabled:a,children:c({id:"global.save"})})})]})})})};I.defaultProps={locale:void 0},I.propTypes={locale:d.shape({id:d.number.isRequired,name:d.string.isRequired,code:d.string.isRequired,isDefault:d.bool.isRequired}),onClose:d.func.isRequired};const U=({locales:t,onDeleteLocale:i,onEditLocale:n})=>{const{formatMessage:a}=(0,h.Z)();return(0,e.jsxs)(de.i,{colCount:4,rowCount:t.length+1,children:[(0,e.jsx)(ce.h,{children:(0,e.jsxs)(Q.Tr,{children:[(0,e.jsx)(M.Th,{children:(0,e.jsx)(E.Z,{variant:"sigma",textColor:"neutral600",children:a({id:(0,l.g)("Settings.locales.row.id")})})}),(0,e.jsx)(M.Th,{children:(0,e.jsx)(E.Z,{variant:"sigma",textColor:"neutral600",children:a({id:(0,l.g)("Settings.locales.row.displayName")})})}),(0,e.jsx)(M.Th,{children:(0,e.jsx)(E.Z,{variant:"sigma",textColor:"neutral600",children:a({id:(0,l.g)("Settings.locales.row.default-locale")})})}),(0,e.jsx)(M.Th,{children:(0,e.jsx)(re.T,{children:"Actions"})})]})}),(0,e.jsx)(ge.p,{children:t.map(o=>(0,e.jsxs)(Q.Tr,{...(0,_.X7)({fn:()=>n(o),condition:n}),children:[(0,e.jsx)(M.Td,{children:(0,e.jsx)(E.Z,{textColor:"neutral800",children:o.id})}),(0,e.jsx)(M.Td,{children:(0,e.jsx)(E.Z,{textColor:"neutral800",children:o.name})}),(0,e.jsx)(M.Td,{children:(0,e.jsx)(E.Z,{textColor:"neutral800",children:o.isDefault?a({id:(0,l.g)("Settings.locales.default")}):null})}),(0,e.jsx)(M.Td,{children:(0,e.jsxs)(j.k,{gap:1,justifyContent:"flex-end",..._.UW,children:[n&&(0,e.jsx)(X.h,{onClick:()=>n(o),label:a({id:(0,l.g)("Settings.list.actions.edit")}),icon:(0,e.jsx)(he.Z,{}),noBorder:!0}),i&&!o.isDefault&&(0,e.jsx)(X.h,{onClick:()=>i(o),label:a({id:(0,l.g)("Settings.list.actions.delete")}),icon:(0,e.jsx)(De.Z,{}),noBorder:!0})]})})]},o.id))})]})};U.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},U.propTypes={locales:d.array,onDeleteLocale:d.func,onEditLocale:d.func};const W=({canUpdateLocale:t,canDeleteLocale:i,onToggleCreateModal:n,isCreating:a})=>{const[o,c]=(0,D.useState)(),[r,g]=(0,D.useState)(),{locales:m}=(0,l.u)(),{formatMessage:x}=(0,h.Z)();(0,_.go)();const u=()=>c(void 0),f=i?c:void 0,L=()=>g(void 0),je=t?g:void 0;return(0,e.jsxs)(_e.o,{tabIndex:-1,children:[(0,e.jsx)(me.T,{primaryAction:(0,e.jsx)(O.z,{startIcon:(0,e.jsx)(G.Z,{}),onClick:n,size:"S",children:x({id:(0,l.g)("Settings.list.actions.add")})}),title:x({id:(0,l.g)("plugin.name")}),subtitle:x({id:(0,l.g)("Settings.list.description")})}),(0,e.jsx)(ue.D,{children:m?.length>0?(0,e.jsx)(U,{locales:m,onDeleteLocale:f,onEditLocale:je}):(0,e.jsx)(Ee.x,{icon:(0,e.jsx)(Me.Z,{width:void 0,height:void 0}),content:x({id:(0,l.g)("Settings.list.empty.title")}),action:n?(0,e.jsx)(O.z,{variant:"secondary",startIcon:(0,e.jsx)(G.Z,{}),onClick:n,children:x({id:(0,l.g)("Settings.list.actions.add")})}):null})}),a&&(0,e.jsx)(q,{onClose:n}),r&&(0,e.jsx)(I,{onClose:L,locale:r}),(0,e.jsx)(B,{localeToDelete:o,onClose:u})]})};W.defaultProps={onToggleCreateModal:void 0},W.propTypes={canUpdateLocale:d.bool.isRequired,canDeleteLocale:d.bool.isRequired,onToggleCreateModal:d.func,isCreating:d.bool.isRequired};const se=({canReadLocale:t,canCreateLocale:i,canDeleteLocale:n,canUpdateLocale:a})=>{const[o,c]=(0,D.useState)(!1),r=i?()=>c(g=>!g):void 0;return t?(0,e.jsx)(W,{canUpdateLocale:a,canDeleteLocale:n,onToggleCreateModal:r,isCreating:o}):null};se.propTypes={canReadLocale:d.bool.isRequired,canCreateLocale:d.bool.isRequired,canUpdateLocale:d.bool.isRequired,canDeleteLocale:d.bool.isRequired};const Ce=()=>{const{isLoading:t,allowedActions:{canRead:i,canUpdate:n,canCreate:a,canDelete:o}}=(0,_.ss)(l.P);return t?null:(0,e.jsx)(se,{canReadLocale:i,canCreateLocale:a,canUpdateLocale:n,canDeleteLocale:o})}}}]);
