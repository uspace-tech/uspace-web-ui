import{r as o,R as e}from"./index-CZMpeKRu.js";import{c as A,a as D,b as G,G as H,f as O}from"./iconBase-Cqk2UWUP.js";import{I as x}from"./icon-CbyKXJHP.js";import{j as S}from"./jsx-runtime-CLpGMVip.js";import{m as F}from"./walk-object-DCtsF13I.js";const{withContext:U,PropsProvider:oe}=A({key:"spinner"}),J=U("span");function K(t){const{gap:n,direction:c}=t,a={column:{marginY:n,marginX:0,borderInlineStartWidth:0,borderTopWidth:"1px"},"column-reverse":{marginY:n,marginX:0,borderInlineStartWidth:0,borderTopWidth:"1px"},row:{marginX:n,marginY:0,borderInlineStartWidth:"1px",borderTopWidth:0},"row-reverse":{marginX:n,marginY:0,borderInlineStartWidth:"1px",borderTopWidth:0}};return{"&":F(c,s=>a[s])}}function Q(t){return o.Children.toArray(t).filter(n=>o.isValidElement(n))}const y=o.forwardRef(function(n,c){const{direction:a="column",align:s,justify:d,gap:i="0.5rem",wrap:z,children:b,separator:l,className:L,...M}=n,v=o.useMemo(()=>K({gap:i,direction:a}),[i,a]),V=o.useMemo(()=>l?Q(b).map((f,h,X)=>{const Y=typeof f.key<"u"?f.key:h,q=o.cloneElement(l,{css:[v,l.props.css]});return S.jsxs(o.Fragment,{children:[f,h===X.length-1?null:q]},Y)}):b,[b,l,v]);return S.jsx(D.div,{ref:c,display:"flex",alignItems:s,justifyContent:d,flexDirection:a,flexWrap:z,gap:l?void 0:i,className:G("chakra-stack",L),...M,children:V})});function I(t){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24z"},child:[]}]})(t)}const Z=O({base:{width:"100%",height:"56px",minWidth:"72px",px:"5",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",borderRadius:"8px",textStyle:"notoH16",_disabled:{cursor:"not-allowed"}},variants:{level:{primary:{bg:"primary",color:" white",_disabled:{bg:"disabled.grey",color:"white"}},secondary:{bg:"materialBg",color:"text.primary",_disabled:{bg:"disabled.grey",color:"white"}},negative:{bg:"transparent",color:"text.primary",textDecoration:"underline",_disabled:{bg:"transparent",color:"disabled.grey"}},dangerous:{bg:"transparent",color:"red",textDecoration:"underline"}}},defaultVariants:{level:"primary"}}),$=D("button",Z),r=e.forwardRef((t,n)=>{const{children:c,startIcon:a,endIcon:s,loading:d,...i}=t;return e.createElement($,{ref:n,...i,disabled:!!(i.disabled||d)},a&&e.createElement(x,{fontSize:"24px"},a),d?e.createElement(J,{size:"inherit",color:"inherit"}):c,s&&e.createElement(x,{fontSize:"24px"},s))});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const se={title:"UPSACE/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"就是一顆按鈕，繼承來自 `chakra('button')`，button 可以用的屬性都可以使用"}}},args:{children:"按鈕 Button 1234",width:"350px",level:"primary",disabled:!1,loading:!1},argTypes:{children:{control:"text",description:"按鈕文字"},width:{control:"text",description:"預設會填滿整個容器，但可透過 `width` | `flex` 來調整寬度"},level:{control:"select",description:"按鈕等級",options:["primary","secondary","negative","dangerous"]},disabled:{control:"boolean"},loading:{control:"boolean"},startIcon:{control:!1,description:"按鈕左側的Icon"},endIcon:{control:!1,description:"按鈕右側的Icon"}}},m={args:{}},p={args:{},render:t=>e.createElement(y,null,e.createElement(r,{...t,startIcon:e.createElement(I,null)},"Primary"),e.createElement(r,{...t,endIcon:e.createElement(I,null)},"Primary"))},u={args:{loading:!0}},g={args:{},render:t=>e.createElement(y,{direction:"row"},e.createElement(y,null,e.createElement(r,{...t,level:"primary"},"Primary"),e.createElement(r,{...t,level:"secondary"},"Secondary"),e.createElement(r,{...t,level:"negative"},"Negative"),e.createElement(r,{...t,level:"dangerous"},"Dangerous")),e.createElement(y,null,e.createElement(r,{...t,level:"primary",disabled:!0},"Primary (disabled)"),e.createElement(r,{...t,level:"secondary",disabled:!0},"Secondary (disabled)"),e.createElement(r,{...t,level:"negative",disabled:!0},"Negative (disabled)")))};var B,E,w;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(w=(E=m.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var k,R,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <Button {...args} startIcon={<IoNavigateCircle />}>
        Primary
      </Button>
      <Button {...args} endIcon={<IoNavigateCircle />}>
        Primary
      </Button>
    </Stack>
}`,...(N=(R=p.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var C,P,W;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(W=(P=u.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,T,_;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(T=g.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const ie=["Default","WithIcon","Loading","Level"];export{m as Default,g as Level,u as Loading,p as WithIcon,ie as __namedExportsOrder,se as default};
