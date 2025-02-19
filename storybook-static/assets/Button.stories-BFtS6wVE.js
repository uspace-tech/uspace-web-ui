import{R as e}from"./index-CZMpeKRu.js";import{G as k}from"./iconBase-CunQ1dn9.js";import{d as P}from"./config-B-M0MPT6.js";import{a as C}from"./create-recipe-context-CzueKsMO.js";import{I as p}from"./icon-Bx3d6UyN.js";import{S as _}from"./spinner-P_eqBeem.js";import{S as l}from"./stack-DhJKfEAQ.js";import"./jsx-runtime-CLpGMVip.js";import"./walk-object-BGfyjrIb.js";function u(t){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24z"},child:[]}]})(t)}const D=P({base:{width:"100%",height:"56px",minWidth:"72px",px:"5",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",borderRadius:"8px",textStyle:"notoH16",_disabled:{cursor:"not-allowed"}},variants:{level:{primary:{bg:"primary",color:" white",_disabled:{bg:"disabled.grey",color:"white"}},secondary:{bg:"materialBg",color:"text.primary",_disabled:{bg:"disabled.grey",color:"white"}},negative:{bg:"transparent",color:"text.primary",textDecoration:"underline",_disabled:{bg:"transparent",color:"disabled.grey"}},dangerous:{bg:"transparent",color:"red",textDecoration:"underline"}}},defaultVariants:{level:"primary"}}),z=C("button",D),r=e.forwardRef((t,R)=>{const{children:N,startIcon:s,endIcon:c,loading:d,...m}=t;return e.createElement(z,{ref:R,...m,disabled:!!(m.disabled||d)},s&&e.createElement(p,{fontSize:"24px"},s),d?e.createElement(_,{size:"inherit",color:"inherit"}):N,c&&e.createElement(p,{fontSize:"24px"},c))});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const j={title:"UPSACE/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"就是一顆按鈕，繼承來自 `chakra('button')`，button 可以用的屬性都可以使用"}}},args:{children:"按鈕 Button 1234",width:"350px",level:"primary",disabled:!1,loading:!1},argTypes:{children:{control:"text",description:"按鈕文字"},width:{control:"text",description:"預設會填滿整個容器，但可透過 `width` | `flex` 來調整寬度"},level:{control:"select",description:"按鈕等級",options:["primary","secondary","negative","dangerous"]},disabled:{control:"boolean"},loading:{control:"boolean"},startIcon:{control:!1,description:"按鈕左側的Icon"},endIcon:{control:!1,description:"按鈕右側的Icon"}}},a={args:{}},n={args:{},render:t=>e.createElement(l,null,e.createElement(r,{...t,startIcon:e.createElement(u,null)},"Primary"),e.createElement(r,{...t,endIcon:e.createElement(u,null)},"Primary"))},o={args:{loading:!0}},i={args:{},render:t=>e.createElement(l,{direction:"row"},e.createElement(l,null,e.createElement(r,{...t,level:"primary"},"Primary"),e.createElement(r,{...t,level:"secondary"},"Secondary"),e.createElement(r,{...t,level:"negative"},"Negative"),e.createElement(r,{...t,level:"dangerous"},"Dangerous")),e.createElement(l,null,e.createElement(r,{...t,level:"primary",disabled:!0},"Primary (disabled)"),e.createElement(r,{...t,level:"secondary",disabled:!0},"Secondary (disabled)"),e.createElement(r,{...t,level:"negative",disabled:!0},"Negative (disabled)")))};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,f,B;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <Button {...args} startIcon={<IoNavigateCircle />}>
        Primary
      </Button>
      <Button {...args} endIcon={<IoNavigateCircle />}>
        Primary
      </Button>
    </Stack>
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,h,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var E,x,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const O=["Default","WithIcon","Loading","Level"];export{a as Default,i as Level,o as Loading,n as WithIcon,O as __namedExportsOrder,j as default};
