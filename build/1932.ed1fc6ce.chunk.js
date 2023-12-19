"use strict";(self.webpackChunkstrapi_demo=self.webpackChunkstrapi_demo||[]).push([[1932],{16543:(j,_,s)=>{s.d(_,{Z:()=>c});var e=s(74081);const n=u=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),c=n},81932:(j,_,s)=>{s.d(_,{ProtectedSettingsPage:()=>K});var e=s(74081),n=s(27279),c=s(73354),u=s(27875),y=s(74758),o=s(10701),T=s(93415),p=s(32370),M=s(23298),r=s(74577),h=s(12881),C=s(5627),R=s(78955),A=s(48102),i=s(15530),L=s(16543),S=s(61020),P=s(40464),I=s(19003),E=s(47853),B=s(14052);const D=E.Ry().shape({email:E.Z_().email(i.I0.email).required(i.I0.required)}),W=I.ZP.a`
  color: ${({theme:g})=>g.colors.primary600};
`,K=()=>(0,e.jsx)(i.O4,{permissions:B.P.settings,children:(0,e.jsx)(U,{})}),U=()=>{const g=(0,i.lm)(),{formatMessage:t}=(0,S.Z)(),{lockApp:Z,unlockApp:b}=(0,i.o1)(),{get:F,post:V}=(0,i.kY)(),[a,k]=n.useState(""),[H,v]=n.useState(!1),[x,N]=n.useState({}),{data:d,isLoading:O}=(0,P.useQuery)(["email","settings"],async()=>{const l=await F("/email/settings"),{data:{config:m}}=l;return m}),f=(0,P.useMutation)(async l=>{await V("/email/test",l)},{onError(){g({type:"warning",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:a})})},onSuccess(){g({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:a})})},retry:!1});(0,i.go)(),n.useEffect(()=>{D.validate({email:a},{abortEarly:!1}).then(()=>v(!0)).catch(()=>v(!1))},[a]);const $=l=>{k(()=>l.target.value)},z=async l=>{l.preventDefault();try{await D.validate({email:a},{abortEarly:!1})}catch(m){m instanceof E.p8&&N((0,i.CJ)(m))}Z(),f.mutate({to:a}),b()};return(0,e.jsxs)(c.o,{labelledBy:"title","aria-busy":O||f.isLoading,children:[(0,e.jsx)(i.SL,{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(u.T,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(y.D,{children:O?(0,e.jsx)(i.dO,{}):d&&(0,e.jsx)("form",{onSubmit:z,children:(0,e.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(T.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(p.Z,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(p.Z,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(W,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(M.r,{gap:5,children:[(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(h.o,{name:"shipper-email",label:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:d.settings.defaultFrom})}),(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(h.o,{name:"response-email",label:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:d.settings.defaultReplyTo})}),(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(C.P,{name:"email-provider",label:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:d.provider,children:(0,e.jsx)(R.W,{value:d.provider,children:d.provider})})})]})]})}),(0,e.jsxs)(o.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(p.Z,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(M.r,{gap:5,children:[(0,e.jsx)(r.P,{col:6,s:12,children:(0,e.jsx)(h.o,{id:"test-address-input",name:"test-address",onChange:$,label:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:a,error:x.email?.id&&t({id:`email.${x.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(r.P,{col:7,s:12,children:(0,e.jsx)(A.z,{loading:f.isLoading,disabled:!H,type:"submit",startIcon:(0,e.jsx)(L.Z,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);
