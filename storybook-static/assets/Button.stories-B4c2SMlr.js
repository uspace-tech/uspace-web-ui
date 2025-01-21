import{R as e}from"./index-CZMpeKRu.js";import{c as k,G as N,d as P,a as C}from"./iconBase-B3nXT7dA.js";import{I as p,S as i}from"./stack-B5IcwXAB.js";import"./jsx-runtime-CLpGMVip.js";const{withContext:_,PropsProvider:G}=k({key:"spinner"}),D=_("span");function m(t){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24z"},child:[]}]})(t)}const z=P({base:{width:"100%",height:"56px",minWidth:"72px",px:"5",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",borderRadius:"8px",textStyle:"notoH16",_disabled:{cursor:"not-allowed"}},variants:{level:{primary:{bg:"primary",color:" white",_disabled:{bg:"disabled.grey",color:"white"}},secondary:{bg:"materialBg",color:"text.primary",_disabled:{bg:"disabled.grey",color:"white"}},negative:{bg:"transparent",color:"text.primary",textDecoration:"underline",_disabled:{bg:"transparent",color:"disabled.grey"}},dangerous:{bg:"transparent",color:"red",textDecoration:"underline"}}},defaultVariants:{level:"primary"}}),L=C("button",z),r=e.forwardRef((t,w)=>{const{children:R,startIcon:l,endIcon:d,...n}=t;return e.createElement(L,{ref:w,...n,disabled:!!(n.disabled||n.loading)},l&&e.createElement(p,{fontSize:"24px"},l),n.loading?e.createElement(D,{size:"inherit",color:"inherit"}):R,d&&e.createElement(p,{fontSize:"24px"},d))});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const H={title:"UPSACE/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"就是一顆按鈕，繼承來自 `chakra('button')`，button 可以用的屬性都可以使用"}}},args:{children:"按鈕 Button 1234",width:"350px",level:"primary",disabled:!1,loading:!1},argTypes:{children:{control:"text",description:"按鈕文字"},width:{control:"text",description:"預設會填滿整個容器，但可透過 `width` | `flex` 來調整寬度"},level:{control:"select",description:"按鈕等級",options:["primary","secondary","negative","dangerous"]},disabled:{control:"boolean"},loading:{control:"boolean"},startIcon:{control:!1,description:"按鈕左側的Icon"},endIcon:{control:!1,description:"按鈕右側的Icon"}}},a={args:{}},o={args:{},render:t=>e.createElement(i,null,e.createElement(r,{...t,startIcon:e.createElement(m,null)},"Primary"),e.createElement(r,{...t,endIcon:e.createElement(m,null)},"Primary"))},s={args:{loading:!0}},c={args:{},render:t=>e.createElement(i,{direction:"row"},e.createElement(i,null,e.createElement(r,{...t,level:"primary"},"Primary"),e.createElement(r,{...t,level:"secondary"},"Secondary"),e.createElement(r,{...t,level:"negative"},"Negative"),e.createElement(r,{...t,level:"dangerous"},"Dangerous")),e.createElement(i,null,e.createElement(r,{...t,level:"primary",disabled:!0},"Primary (disabled)"),e.createElement(r,{...t,level:"secondary",disabled:!0},"Secondary (disabled)"),e.createElement(r,{...t,level:"negative",disabled:!0},"Negative (disabled)")))};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,v,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <Button {...args} startIcon={<IoNavigateCircle />}>
        Primary
      </Button>
      <Button {...args} endIcon={<IoNavigateCircle />}>
        Primary
      </Button>
    </Stack>
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,h,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,I,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const M=["Default","WithIcon","Loading","Level"];export{a as Default,c as Level,s as Loading,o as WithIcon,M as __namedExportsOrder,H as default};
