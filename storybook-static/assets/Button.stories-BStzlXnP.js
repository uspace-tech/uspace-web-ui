import{R as e}from"./index-CZMpeKRu.js";import{c as N,G as P,d as C,a as _}from"./iconBase-B3nXT7dA.js";import{I as m,S as c}from"./stack-B5IcwXAB.js";import"./jsx-runtime-CLpGMVip.js";const{withContext:D,PropsProvider:H}=N({key:"spinner"}),z=D("span");function u(t){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24z"},child:[]}]})(t)}const L=C({base:{width:"100%",height:"56px",minWidth:"72px",px:"5",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",borderRadius:"8px",textStyle:"notoH16",_disabled:{cursor:"not-allowed"}},variants:{level:{primary:{bg:"primary",color:" white",_disabled:{bg:"disabled.grey",color:"white"}},secondary:{bg:"materialBg",color:"text.primary",_disabled:{bg:"disabled.grey",color:"white"}},negative:{bg:"transparent",color:"text.primary",textDecoration:"underline",_disabled:{bg:"transparent",color:"disabled.grey"}},dangerous:{bg:"transparent",color:"red",textDecoration:"underline"}}},defaultVariants:{level:"primary"}}),T=_("button",L),r=e.forwardRef((t,R)=>{const{children:k,startIcon:i,endIcon:l,loading:d,...p}=t;return e.createElement(T,{ref:R,...p,disabled:!!(p.disabled||d)},i&&e.createElement(m,{fontSize:"24px"},i),d?e.createElement(z,{size:"inherit",color:"inherit"}):k,l&&e.createElement(m,{fontSize:"24px"},l))});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M={title:"UPSACE/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"就是一顆按鈕，繼承來自 `chakra('button')`，button 可以用的屬性都可以使用"}}},args:{children:"按鈕 Button 1234",width:"350px",level:"primary",disabled:!1,loading:!1},argTypes:{children:{control:"text",description:"按鈕文字"},width:{control:"text",description:"預設會填滿整個容器，但可透過 `width` | `flex` 來調整寬度"},level:{control:"select",description:"按鈕等級",options:["primary","secondary","negative","dangerous"]},disabled:{control:"boolean"},loading:{control:"boolean"},startIcon:{control:!1,description:"按鈕左側的Icon"},endIcon:{control:!1,description:"按鈕右側的Icon"}}},n={args:{}},a={args:{},render:t=>e.createElement(c,null,e.createElement(r,{...t,startIcon:e.createElement(u,null)},"Primary"),e.createElement(r,{...t,endIcon:e.createElement(u,null)},"Primary"))},o={args:{loading:!0}},s={args:{},render:t=>e.createElement(c,{direction:"row"},e.createElement(c,null,e.createElement(r,{...t,level:"primary"},"Primary"),e.createElement(r,{...t,level:"secondary"},"Secondary"),e.createElement(r,{...t,level:"negative"},"Negative"),e.createElement(r,{...t,level:"dangerous"},"Dangerous")),e.createElement(c,null,e.createElement(r,{...t,level:"primary",disabled:!0},"Primary (disabled)"),e.createElement(r,{...t,level:"secondary",disabled:!0},"Secondary (disabled)"),e.createElement(r,{...t,level:"negative",disabled:!0},"Negative (disabled)")))};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,B,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <Button {...args} startIcon={<IoNavigateCircle />}>
        Primary
      </Button>
      <Button {...args} endIcon={<IoNavigateCircle />}>
        Primary
      </Button>
    </Stack>
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var h,S,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,E,w;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(E=s.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const V=["Default","WithIcon","Loading","Level"];export{n as Default,s as Level,o as Loading,a as WithIcon,V as __namedExportsOrder,M as default};
