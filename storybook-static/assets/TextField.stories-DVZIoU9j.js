import{r as w,R as y}from"./index-CZMpeKRu.js";import{u as Q,d as E,E as X,a as M,m as j,b as V,G as Z,e as ee}from"./iconBase-Cqk2UWUP.js";import{j as m}from"./jsx-runtime-CLpGMVip.js";import{I as te}from"./icon-CbyKXJHP.js";import{e as S,u as $}from"./index-bjSl42hy.js";function re(e){const{key:r,recipe:o}=e,t=Q();return w.useMemo(()=>{const n=o||(r!=null?t.getSlotRecipe(r):{});return t.sva(structuredClone(n))},[r,o,t])}const oe=e=>e.charAt(0).toUpperCase()+e.slice(1),se=e=>{const{key:r,recipe:o}=e,t=oe(r||o.className||"Component"),[n,h]=E({name:`${t}StylesContext`,errorMessage:`use${t}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `}),[g,C]=E({name:`${t}ClassNameContext`,errorMessage:`use${t}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `,strict:!1}),[D,N]=E({strict:!1,name:`${t}PropsContext`,providerName:`${t}PropsContext`,defaultValue:{}});function R(s){const{unstyled:l,...a}=s,c=re({key:r,recipe:a.recipe||o}),[p,i]=c.splitVariantProps(a);return{styles:l?X:c(p),classNames:c.classNameMap,props:i}}function G(s,l={}){const{defaultProps:a}=l,c=p=>{const i=j(a,N(),p),{styles:u,classNames:f,props:d}=R(i);return m.jsx(n,{value:u,children:m.jsx(g,{value:f,children:m.jsx(s,{...d})})})};return c.displayName=s.displayName||s.name,c}return{StylesProvider:n,ClassNamesProvider:g,PropsProvider:D,usePropsContext:N,useRecipeResult:R,withProvider:(s,l,a)=>{const{defaultProps:c,...p}=a??{},i=M(s,{},p),u=w.forwardRef((f,d)=>{var B;const x=j(c??{},N(),f),{styles:F,props:K,classNames:T}=R(x),J=T[l],k=m.jsx(n,{value:F,children:m.jsx(g,{value:T,children:m.jsx(i,{ref:d,...K,css:[F[l],x.css],className:V(x.className,J)})})});return((B=a==null?void 0:a.wrapElement)==null?void 0:B.call(a,k,x))??k});return u.displayName=s.displayName||s.name,u},withContext:(s,l,a)=>{const c=M(s,{},a),p=w.forwardRef((i,u)=>{const f=h(),d=C(),x=d==null?void 0:d[l];return m.jsx(c,{...i,css:[l?f[l]:void 0,i.css],ref:u,className:V(i.className,x)})});return p.displayName=s.displayName||s.name,p},withRootProvider:G,useStyles:h,useClassNames:C}};function ae(e){return Z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}const ne=ee({className:"textField",slots:["root","input","label","clear"],base:{root:{display:"flex",position:"relative",width:"100%"},input:{background:"materialBg",focusRing:"inside",focusRingColor:"primary",focusRingWidth:"2px",width:"100%",height:"56px",borderRadius:"8px",pt:"24px",pr:"48px",pb:"8px",pl:"16px",textStyle:"notoP16",color:"text.primary",_focus:{_placeholder:{opacity:1}},_placeholder:{color:"text.secondary",opacity:0,willChange:"opacity",transition:"opacity 0.05s ease-out"}},label:{position:"absolute",top:"8px",left:"16px",color:"text.secondary",textStyle:"notoP12",willChange:"top, font-size, line-height",transition:"top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",_peerPlaceholderShown:{top:"16px",textStyle:"notoP16"},_peerFocusVisible:{top:"8px",textStyle:"notoP12"},_required:{_after:{content:"'*'",color:"red",paddingLeft:"4px"}}},clear:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",borderRadius:"50%",padding:"4px",display:"block",transition:"background-color 0.15s ease-out",_peerPlaceholderShown:{display:"none"}}}}),{withProvider:le,withContext:_}=se({recipe:ne}),ce=le("label","root"),ie=_("input","input"),pe=_("span","label"),ue=_("button","clear"),q=e=>{const{label:r,className:o,placeholder:t,required:n,onClear:h,rootProps:g,...C}=e;return y.createElement(ce,{...g},y.createElement(ie,{required:n,className:(o||"")+" peer",placeholder:t||"",...C}),y.createElement(pe,{...n?{"data-required":!0}:{}},r),h&&y.createElement(ue,{onClick:h},y.createElement(te,{fontSize:"24px"},y.createElement(ae,null))))};q.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},rootProps:{required:!1,tsType:{name:"TextFieldRootProps"},description:""}},composes:["HTMLChakraProps"]};const Se={title:"UPSACE/TextField",component:q,parameters:{layout:"centered",docs:{description:{component:"一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props"}}},args:{label:"Phone",placeholder:"0912345678"},argTypes:{label:{control:"text",description:"就是標籤"},placeholder:{control:"text",description:"輸入框建議文字，通常是指資料格式"},required:{control:"boolean",description:"是否為必填"},onClear:{control:!1,description:"當清除按鈕被點擊的 callback，有傳入時才會顯示 icon"}}},v={args:{}},b={args:{required:!0},play:async({canvasElement:e})=>{const r=e.querySelector(".textField__input");S(r).toHaveAttribute("required");const o=e.querySelector(".textField__label"),t=window.getComputedStyle(o,"::after");S(t.content).toBe('"*"')}},P={args:{onClear:()=>{}},render:e=>{const[r,o]=w.useState(""),t=()=>{o("")};return y.createElement(q,{...e,value:r,onChange:n=>o(n.target.value),onClear:t})},play:async({canvasElement:e})=>{const r=e.querySelector("input"),o=e.querySelector("button");await $.type(r,"0968129756",{delay:200}),S(r.value).toBe("0968129756"),S(o).toBeVisible(),await $.click(o,{delay:200}),S(r.value).toBe("")}};var I,z,A;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(A=(z=v.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,H,O;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(H=b.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,W,Y;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(W=P.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const Ce=["Default","Required","WithClear"];export{v as Default,b as Required,P as WithClear,Ce as __namedExportsOrder,Se as default};
