import{r as o,R as r}from"./index-CZMpeKRu.js";import{f as X}from"./index-CzjNP0xw.js";import{c as Y,m as V,a as P,b as A,d as M}from"./walk-object-DaPvJIP-.js";import{j as h}from"./jsx-runtime-CLpGMVip.js";const{withContext:O,PropsProvider:Z}=Y({key:"spinner"}),q=O("span");function z(e){const{gap:t,direction:a}=e,s={column:{marginY:t,marginX:0,borderInlineStartWidth:0,borderTopWidth:"1px"},"column-reverse":{marginY:t,marginX:0,borderInlineStartWidth:0,borderTopWidth:"1px"},row:{marginX:t,marginY:0,borderInlineStartWidth:"1px",borderTopWidth:0},"row-reverse":{marginX:t,marginY:0,borderInlineStartWidth:"1px",borderTopWidth:0}};return{"&":V(a,m=>s[m])}}function F(e){return o.Children.toArray(e).filter(t=>o.isValidElement(t))}const y=o.forwardRef(function(t,a){const{direction:s="column",align:m,justify:R,gap:p="0.5rem",wrap:_,children:u,separator:i,className:j,...D}=t,b=o.useMemo(()=>z({gap:p,direction:s}),[p,s]),N=o.useMemo(()=>i?F(u).map((g,v,I)=>{const T=typeof g.key<"u"?g.key:v,L=o.cloneElement(i,{css:[b,i.props.css]});return h.jsxs(o.Fragment,{children:[g,v===I.length-1?null:L]},T)}):u,[u,i,b]);return h.jsx(P.div,{ref:a,display:"flex",alignItems:m,justifyContent:R,flexDirection:s,flexWrap:_,gap:i?void 0:p,className:A("chakra-stack",j),...D,children:N})}),H=M({base:{width:"100%",height:"56px",minWidth:"72px",px:"5",borderRadius:"8px",textStyle:"notoH16",_disabled:{cursor:"not-allowed"}},variants:{level:{primary:{bg:"primary",color:" white",_disabled:{bg:"disabled.grey",color:"white"}},secondary:{bg:"materialBg",color:"text.primary",_disabled:{bg:"disabled.grey",color:"white"}},negative:{bg:"transparent",color:"text.primary",textDecoration:"underline",_disabled:{bg:"transparent",color:"disabled.grey"}},dangerous:{bg:"transparent",color:"red",textDecoration:"underline"}}},defaultVariants:{level:"primary"}}),U=P("button",H),n=e=>{const{children:t,...a}=e;return r.createElement(U,{...a,disabled:!!(a.disabled||a.loading)},a.loading?r.createElement(q,{size:"inherit",color:"inherit"}):t)};n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:""}}};const $={title:"UPSACE/Button",component:n,parameters:{layout:"centered"},args:{children:"按鈕 Button 1234",width:"350px",level:"primary",onClick:X()},argTypes:{width:{control:"text"},level:{control:"select",options:["primary","secondary","negative","dangerous"]},onClick:{action:"clicked"}}},l={args:{}},d={args:{loading:!0}},c={args:{},render:e=>r.createElement(y,{direction:"row"},r.createElement(y,null,r.createElement(n,{...e,level:"primary"},"Primary"),r.createElement(n,{...e,level:"secondary"},"Secondary"),r.createElement(n,{...e,level:"negative"},"Negative"),r.createElement(n,{...e,level:"dangerous"},"Dangerous")),r.createElement(y,null,r.createElement(n,{...e,level:"primary",disabled:!0},"Primary (disabled)"),r.createElement(n,{...e,level:"secondary",disabled:!0},"Secondary (disabled)"),r.createElement(n,{...e,level:"negative",disabled:!0},"Negative (disabled)")))};var f,x,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var B,k,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var w,W,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack direction="row">
      <Stack>
        <Button {...args} level="primary">
          Primary
        </Button>
        <Button {...args} level="secondary">
          Secondary
        </Button>
        <Button {...args} level="negative">
          Negative
        </Button>
        <Button {...args} level="dangerous">
          Dangerous
        </Button>
      </Stack>
      <Stack>
        <Button {...args} level="primary" disabled>
          Primary (disabled)
        </Button>
        <Button {...args} level="secondary" disabled>
          Secondary (disabled)
        </Button>
        <Button {...args} level="negative" disabled>
          Negative (disabled)
        </Button>
      </Stack>
    </Stack>
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const ee=["Default","Loading","Level"];export{l as Default,c as Level,d as Loading,ee as __namedExportsOrder,$ as default};
