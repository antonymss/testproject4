(this.webpackJsonptestproject4=this.webpackJsonptestproject4||[]).push([[0],{85:function(e,t,s){},86:function(e,t,s){},96:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),l=s(11),i=s.n(l),r=(s(85),s(10)),c=s(18),d=(s(86),s(126)),j=s(130),o=s(140),b=s(131),h=s(137),u=s(132),x=s(139),O=s(138),v=s(136),y=s(135),f=s(26),S=s.n(f),p=s(69),g=s.n(p),C=s(70),W=s(2);var N=function(){var e=n.a.useState(""),t=Object(c.a)(e,2),s=t[0],l=t[1],i=n.a.useState(""),f=Object(c.a)(i,2),p=f[0],N=f[1],D=n.a.useState(""),P=Object(c.a)(D,2),m=P[0],w=P[1],k=n.a.useState(""),E=Object(c.a)(k,2),I=E[0],M=E[1],F=Object(a.useState)(!0),z=Object(c.a)(F,2),A=z[0],G=z[1],K=Object(a.useState)(!0),q=Object(c.a)(K,2),B=q[0],L=q[1],T=Object(a.useState)(!0),U=Object(c.a)(T,2),$=U[0],J=U[1],R=Object(a.useState)(!0),H=Object(c.a)(R,2),V=H[0],Q=H[1],X=n.a.useState(!1),Y=Object(c.a)(X,2),Z=Y[0],_=Y[1],ee=n.a.useState(!1),te=Object(c.a)(ee,2),se=te[0],ae=te[1],ne=Object(a.useState)(!0),le=Object(c.a)(ne,2),ie=le[0],re=le[1],ce=Object(a.useState)(!0),de=Object(c.a)(ce,2),je=de[0],oe=de[1],be=Object(C.a)({validate:function(e){var t={};return e.EnthernetIP?/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(e.EnthernetIP)||(t.EnthernetIP="Invalid IP address"):t.EnthernetIP="Field is equired",e.EnthernetSubnetMask?/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(e.EnthernetSubnetMask)||(t.EnthernetSubnetMask="Invalid subnetMask address"):t.EnthernetSubnetMask="Field is equired",e.EnthernetDNS?/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e.EnthernetDNS)||(t.EnthernetDNS="Invalid DNS address"):t.EnthernetDNS="Field is equired",e.WirelessIP?/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(e.WirelessIP)||(t.WirelessIP="Invalid IP address"):t.WirelessIP="Field is equired",e.WirelessSubnetMask?/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(e.WirelessSubnetMask)||(t.WirelessSubnetMask="Invalid subnetMask address"):t.WirelessSubnetMask="Field is equired",e.WirelessDNS?/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e.WirelessDNS)||(t.WirelessDNS="Invalid DNS address"):t.WirelessDNS="Field is equired",e.WirelessNetworkName||(t.WirelessNetworkName="Field is equired"),e.WirelessSecurityKey||(t.WirelessSecurityKey="Field is equired"),t},initialValues:{EnthernetIP:"",EnthernetSubnetMask:"",EnthernetDefaultGateway:"",EnthernetDNS:"",EnthernetAlternativeDNS:"",WirelessNetworkName:"",WirelessSecurityKey:"",WirelessIP:"",WirelessSubnetMask:"",WirelessDefaultGateway:"",WirelessDNS:"",WirelessAlternativeDNS:""},onSubmit:function(e){console.log(JSON.stringify(e,null,2))}});return Object(W.jsxs)("form",{onSubmit:be.handleSubmit,children:[Object(W.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px"},children:[Object(W.jsxs)("div",{style:{border:"1px solid black",display:"flex",flexDirection:"column",width:"50%"},children:[Object(W.jsx)("div",{children:Object(W.jsxs)(d.a,{children:[Object(W.jsx)(j.a,{children:Object(W.jsx)("h2",{children:"Enthernet Settings"})}),Object(W.jsxs)(o.a,{name:"radio1",value:s,onChange:function(e){l(e.target.value)},children:[Object(W.jsx)(b.a,{value:"first",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&G(!0)}}),label:"Obtain an IP address automatically (DHCP/BootP)"}),Object(W.jsx)(b.a,{value:"second",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&G(!1)}}),label:"Use following IP address:"})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(W.jsxs)(u.a,{children:[" IP address: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:A,variant:"outlined",id:"EnthernetIP"},be.getFieldProps("EnthernetIP")),{},{value:be.values.EnthernetIP,onChange:be.handleChange})),be.errors.EnthernetIP?Object(W.jsx)("div",{children:be.errors.EnthernetIP}):null]})}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(W.jsxs)(u.a,{children:[" Subnet Mask: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:A,variant:"outlined",id:"EnthernetSubnetMask"},be.getFieldProps("EnthernetSubnetMask")),{},{value:be.values.EnthernetSubnetMask,onChange:be.handleChange})),be.errors.EnthernetSubnetMask?Object(W.jsx)("div",{children:be.errors.EnthernetSubnetMask}):null]})}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(W.jsxs)(u.a,{children:[" Default Gateway:",Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:A,variant:"outlined",id:"EnthernetDefaultGateway"},be.getFieldProps("EnthernetDefaultGateway")),{},{value:be.values.EnthernetDefaultGateway,onChange:be.handleChange}))]})})]})]})}),Object(W.jsxs)("div",{children:[Object(W.jsxs)(o.a,{name:"radio2",value:p,onChange:function(e){N(e.target.value)},children:[Object(W.jsx)(b.a,{value:"third",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&L(!0)}}),label:"Obtain DNS server address automatically"}),Object(W.jsx)(b.a,{value:"fourth",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&L(!1)}}),label:"Use following DS server address:"})]}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(W.jsxs)(u.a,{children:[" Perfered DNS server: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({disabled:B,size:"small",variant:"outlined",id:"EnthernetDNS"},be.getFieldProps("EnthernetDNS")),{},{onChange:be.handleChange,value:be.values.EnthernetDNS})),be.errors.EnthernetDNS?Object(W.jsx)("div",{children:be.errors.EnthernetDNS}):null]})}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(W.jsxs)(u.a,{children:[" Alternative DNS server:",Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:B,variant:"outlined",id:"EnthernetAlternativeDNS"},be.getFieldProps("EnthernetAlternativeDNS")),{},{onChange:be.handleChange,value:be.values.EnthernetAlternativeDNS}))]})})]})]}),Object(W.jsxs)("div",{style:{border:"1px solid black",display:"flex",flexDirection:"column",width:"50%"},children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(j.a,{style:{display:"flex",justifyContent:"start"},children:Object(W.jsx)("h2",{children:"Wireless Settings"})}),Object(W.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(O.a,{checked:Z,onChange:function(e,t){_(e.target.checked),re(!ie)},inputProps:{"aria-label":"primary checkbox"}}),Object(W.jsx)(j.a,{children:"Enable wifi:"})]}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:Object(W.jsxs)(u.a,{children:[" Whireless Network Name: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsxs)(v.a,Object(r.a)(Object(r.a)({disabled:ie,variant:"outlined",native:!0,style:{minWidth:"200px",height:"35px"},id:"WirelessNetworkName"},be.getFieldProps("WirelessNetworkName")),{},{value:be.values.WirelessNetworkName,onChange:be.handleChange,children:[Object(W.jsx)("option",{value:""}),Object(W.jsx)("option",{value:10,children:"Ten"}),Object(W.jsx)("option",{value:20,children:"Twenty"}),Object(W.jsx)("option",{value:30,children:"Thirty"})]})),Object(W.jsx)(g.a,{}),be.errors.WirelessNetworkName?Object(W.jsx)("div",{children:be.errors.WirelessNetworkName}):null]})})]}),Object(W.jsx)(O.a,{checked:se,onChange:function(e,t){ae(e.target.checked),oe(!je)},inputProps:{"aria-label":"primary checkbox"}}),Object(W.jsx)(j.a,{children:"Enable Wireless Security:"}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",marginLeft:"auto"},children:Object(W.jsxs)(u.a,{children:[" Security Key: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:je,variant:"outlined",id:"WirelessSecurityKey"},be.getFieldProps("WirelessSecurityKey")),{},{value:be.values.WirelessSecurityKey,onChange:be.handleChange})),be.errors.WirelessSecurityKey?Object(W.jsx)("div",{children:be.errors.WirelessSecurityKey}):null]})}),Object(W.jsxs)(o.a,{name:"radio1",value:m,onChange:function(e){w(e.target.value)},style:{marginLeft:"10px"},children:[Object(W.jsx)(b.a,{value:"first",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&J(!0)}}),label:"Obtain an IP address automatically (DHCP/BootP)"}),Object(W.jsx)(b.a,{value:"second",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&J(!1)}}),label:"Use following IP address:"})]}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:Object(W.jsxs)(u.a,{children:[" IP address: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({disabled:$,variant:"outlined",size:"small",id:"WirelessIP"},be.getFieldProps("WirelessIP")),{},{value:be.values.WirelessIP,onChange:be.handleChange})),be.errors.WirelessIP?Object(W.jsx)("div",{children:be.errors.WirelessIP}):null]})}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:Object(W.jsxs)(u.a,{children:[" Subnet Mask: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:$,variant:"outlined",id:"WirelessSubnetMask"},be.getFieldProps("WirelessSubnetMask")),{},{value:be.values.WirelessSubnetMask,onChange:be.handleChange})),be.errors.WirelessSubnetMask?Object(W.jsx)("div",{children:be.errors.WirelessSubnetMask}):null]})}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:Object(W.jsxs)(u.a,{children:[" Default Gateway:",Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:$,variant:"outlined",id:"WirelessDefaultGateway"},be.getFieldProps("WirelessDefaultGateway")),{},{value:be.values.WirelessDefaultGateway,onChange:be.handleChange}))]})})]}),Object(W.jsxs)("div",{children:[Object(W.jsxs)(o.a,{name:"radio2",value:I,onChange:function(e){M(e.target.value)},style:{marginLeft:"10px"},children:[Object(W.jsx)(b.a,{value:"third",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&Q(!0)}}),label:"Obtain DNS server address automatically"}),Object(W.jsx)(b.a,{value:"fourth",control:Object(W.jsx)(h.a,{onChange:function(e,t){t&&Q(!1)}}),label:"Use following DS server address:"})]}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(W.jsxs)(u.a,{children:[" Perfered DNS server: ",Object(W.jsx)(S.a,{style:{color:"red",height:"10px",width:"10px"}}),Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:V,variant:"outlined",id:"WirelessDNS"},be.getFieldProps("WirelessDNS")),{},{onChange:be.handleChange,value:be.values.WirelessDNS})),be.errors.WirelessDNS?Object(W.jsx)("div",{children:be.errors.WirelessDNS}):null]})}),Object(W.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(W.jsxs)(u.a,{children:[" Alternative DNS server:",Object(W.jsx)(x.a,Object(r.a)(Object(r.a)({size:"small",disabled:V,variant:"outlined",id:"WirelessAlternativeDNS"},be.getFieldProps("WirelessAlternativeDNS")),{},{onChange:be.handleChange,value:be.values.WirelessAlternativeDNS}))]})})]})]})]}),Object(W.jsx)(y.a,{variant:"contained",color:"primary",type:"submit",style:{marginRight:"10px",backgroundColor:"#06c7f3",borderRadius:"20px",width:"110px"},children:"Save"}),Object(W.jsx)(y.a,{variant:"outlined",style:{color:"#06c7f3",borderRadius:"20px",width:"110px",border:"1px solid #06c7f3"},children:"Cancel"})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,142)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),l(e),i(e)}))};i.a.render(Object(W.jsx)(n.a.StrictMode,{children:Object(W.jsx)(N,{})}),document.getElementById("root")),D()}},[[96,1,2]]]);
//# sourceMappingURL=main.1c9a6213.chunk.js.map