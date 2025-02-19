import{r as w,R as y}from"./index-CZMpeKRu.js";import{M as Q}from"./index-B4RbK7oS.js";import{a as X}from"./config-B-M0MPT6.js";import{j as m}from"./jsx-runtime-CLpGMVip.js";import{u as Z,d as E,E as ee,a as j,m as M,b as V}from"./create-recipe-context-CzueKsMO.js";import{I as te}from"./icon-Bx3d6UyN.js";import{e as S,u as $}from"./index-bjSl42hy.js";import"./iconBase-CunQ1dn9.js";function re(t){const{key:r,recipe:o}=t,e=Z();return w.useMemo(()=>{const n=o||(r!=null?e.getSlotRecipe(r):{});return e.sva(structuredClone(n))},[r,o,e])}const oe=t=>t.charAt(0).toUpperCase()+t.slice(1),se=t=>{const{key:r,recipe:o}=t,e=oe(r||o.className||"Component"),[n,h]=E({name:`${e}StylesContext`,errorMessage:`use${e}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${e}.Root />" `}),[f,C]=E({name:`${e}ClassNameContext`,errorMessage:`use${e}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${e}.Root />" `,strict:!1}),[D,N]=E({strict:!1,name:`${e}PropsContext`,providerName:`${e}PropsContext`,defaultValue:{}});function R(s){const{unstyled:l,...a}=s,c=re({key:r,recipe:a.recipe||o}),[p,i]=c.splitVariantProps(a);return{styles:l?ee:c(p),classNames:c.classNameMap,props:i}}function K(s,l={}){const{defaultProps:a}=l,c=p=>{const i=M(a,N(),p),{styles:u,classNames:g,props:d}=R(i);return m.jsx(n,{value:u,children:m.jsx(f,{value:g,children:m.jsx(s,{...d})})})};return c.displayName=s.displayName||s.name,c}return{StylesProvider:n,ClassNamesProvider:f,PropsProvider:D,usePropsContext:N,useRecipeResult:R,withProvider:(s,l,a)=>{const{defaultProps:c,...p}=a??{},i=j(s,{},p),u=w.forwardRef((g,d)=>{var B;const x=M(c??{},N(),g),{styles:F,props:G,classNames:T}=R(x),J=T[l],k=m.jsx(n,{value:F,children:m.jsx(f,{value:T,children:m.jsx(i,{ref:d,...G,css:[F[l],x.css],className:V(x.className,J)})})});return((B=a==null?void 0:a.wrapElement)==null?void 0:B.call(a,k,x))??k});return u.displayName=s.displayName||s.name,u},withContext:(s,l,a)=>{const c=j(s,{},a),p=w.forwardRef((i,u)=>{const g=h(),d=C(),x=d==null?void 0:d[l];return m.jsx(c,{...i,css:[l?g[l]:void 0,i.css],ref:u,className:V(i.className,x)})});return p.displayName=s.displayName||s.name,p},withRootProvider:K,useStyles:h,useClassNames:C}},ae=X({className:"textField",slots:["root","input","label","clear"],base:{root:{display:"flex",position:"relative",width:"100%"},input:{background:"materialBg",focusRing:"inside",focusRingColor:"primary",focusRingWidth:"2px",width:"100%",height:"56px",borderRadius:"8px",pt:"24px",pr:"48px",pb:"8px",pl:"16px",textStyle:"notoP16",color:"text.primary",_focus:{_placeholder:{opacity:1}},_placeholder:{color:"text.secondary",opacity:0,willChange:"opacity",transition:"opacity 0.05s ease-out"}},label:{position:"absolute",top:"8px",left:"16px",color:"text.secondary",textStyle:"notoP12",willChange:"top, font-size, line-height",transition:"top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",_peerPlaceholderShown:{top:"16px",textStyle:"notoP16"},_peerFocusVisible:{top:"8px",textStyle:"notoP12"},_required:{_after:{content:"'*'",color:"red",paddingLeft:"4px"}}},clear:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",borderRadius:"50%",padding:"4px",display:"block",transition:"background-color 0.15s ease-out",_peerPlaceholderShown:{display:"none"}}}}),{withProvider:ne,withContext:_}=se({recipe:ae}),le=ne("label","root"),ce=_("input","input"),ie=_("span","label"),pe=_("button","clear"),q=t=>{const{label:r,className:o,placeholder:e,required:n,onClear:h,rootProps:f,...C}=t;return y.createElement(le,{...f},y.createElement(ce,{required:n,className:(o||"")+" peer",placeholder:e||"",...C}),y.createElement(ie,{...n?{"data-required":!0}:{}},r),h&&y.createElement(pe,{onClick:h},y.createElement(te,{fontSize:"24px"},y.createElement(Q,null))))};q.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},rootProps:{required:!1,tsType:{name:"TextFieldRootProps"},description:""}},composes:["HTMLChakraProps"]};const be={title:"UPSACE/TextField",component:q,parameters:{layout:"centered",docs:{description:{component:"一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props"}}},args:{label:"Phone",placeholder:"0912345678"},argTypes:{label:{control:"text",description:"就是標籤"},placeholder:{control:"text",description:"輸入框建議文字，通常是指資料格式"},required:{control:"boolean",description:"是否為必填"},onClear:{control:!1,description:"當清除按鈕被點擊的 callback，有傳入時才會顯示 icon"}}},b={args:{}},v={args:{required:!0},play:async({canvasElement:t})=>{const r=t.querySelector(".textField__input");S(r).toHaveAttribute("required");const o=t.querySelector(".textField__label"),e=window.getComputedStyle(o,"::after");S(e.content).toBe('"*"')}},P={args:{onClear:()=>{}},render:t=>{const[r,o]=w.useState(""),e=()=>{o("")};return y.createElement(q,{...t,value:r,onChange:n=>o(n.target.value),onClear:e})},play:async({canvasElement:t})=>{const r=t.querySelector("input"),o=t.querySelector("button");await $.type(r,"0968129756",{delay:200}),S(r.value).toBe("0968129756"),S(o).toBeVisible(),await $.click(o,{delay:200}),S(r.value).toBe("")}};var I,A,L;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(L=(A=b.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,H,O;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector(".textField__input");
    expect(input).toHaveAttribute("required");
    // check the asterisks
    const label = canvasElement.querySelector(".textField__label");
    const computedStyle = window.getComputedStyle(label!, "::after");
    expect(computedStyle.content).toBe('"*"');
  }
}`,...(O=(H=v.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,W,Y;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    onClear: () => {}
  },
  render: args => {
    const [value, setValue] = useState("");
    const handleClear = () => {
      setValue("");
    };
    return <TextField {...args} value={value} onChange={e => setValue(e.target.value)} onClear={handleClear} />;
  },
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector("input");
    const clearButton = canvasElement.querySelector("button"); // Assuming there's a button for clearing

    // Simulate typing into the input field
    await userEvent.type(input!, "0968129756", {
      delay: 200
    });
    expect(input!.value).toBe("0968129756");

    // Clear Button should be visible
    expect(clearButton).toBeVisible();

    // Simulate clicking the clear button
    await userEvent.click(clearButton!, {
      delay: 200
    });
    expect(input!.value).toBe("");
  }
}`,...(Y=(W=P.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const ve=["Default","Required","WithClear"];export{b as Default,v as Required,P as WithClear,ve as __namedExportsOrder,be as default};
