import{r as P,R as u}from"./index-CZMpeKRu.js";import{u as Q,e as R,E as X,a as M,f as j,b as V,G as Z,g as ee}from"./iconBase-B3nXT7dA.js";import{j as y}from"./jsx-runtime-CLpGMVip.js";import{I as te,S as re}from"./stack-B5IcwXAB.js";import{e as S,u as $}from"./index-bjSl42hy.js";function ae(e){const{key:r,recipe:a}=e,t=Q();return P.useMemo(()=>{const n=a||(r!=null?t.getSlotRecipe(r):{});return t.sva(structuredClone(n))},[r,a,t])}const oe=e=>e.charAt(0).toUpperCase()+e.slice(1),se=e=>{const{key:r,recipe:a}=e,t=oe(r||a.className||"Component"),[n,h]=R({name:`${t}StylesContext`,errorMessage:`use${t}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `}),[g,k]=R({name:`${t}ClassNameContext`,errorMessage:`use${t}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `,strict:!1}),[D,w]=R({strict:!1,name:`${t}PropsContext`,providerName:`${t}PropsContext`,defaultValue:{}});function N(o){const{unstyled:l,...s}=o,c=ae({key:r,recipe:s.recipe||a}),[p,i]=c.splitVariantProps(s);return{styles:l?X:c(p),classNames:c.classNameMap,props:i}}function G(o,l={}){const{defaultProps:s}=l,c=p=>{const i=j(s,w(),p),{styles:d,classNames:f,props:m}=N(i);return y.jsx(n,{value:d,children:y.jsx(g,{value:f,children:y.jsx(o,{...m})})})};return c.displayName=o.displayName||o.name,c}return{StylesProvider:n,ClassNamesProvider:g,PropsProvider:D,usePropsContext:w,useRecipeResult:N,withProvider:(o,l,s)=>{const{defaultProps:c,...p}=s??{},i=M(o,{},p),d=P.forwardRef((f,m)=>{var T;const x=j(c??{},w(),f),{styles:q,props:K,classNames:F}=N(x),J=F[l],B=y.jsx(n,{value:q,children:y.jsx(g,{value:F,children:y.jsx(i,{ref:m,...K,css:[q[l],x.css],className:V(x.className,J)})})});return((T=s==null?void 0:s.wrapElement)==null?void 0:T.call(s,B,x))??B});return d.displayName=o.displayName||o.name,d},withContext:(o,l,s)=>{const c=M(o,{},s),p=P.forwardRef((i,d)=>{const f=h(),m=k(),x=m==null?void 0:m[l];return y.jsx(c,{...i,css:[l?f[l]:void 0,i.css],ref:d,className:V(i.className,x)})});return p.displayName=o.displayName||o.name,p},withRootProvider:G,useStyles:h,useClassNames:k}};function ne(e){return Z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}const le=ee({className:"textField",slots:["root","input","label","clear"],base:{root:{display:"block",position:"relative",width:"fit-content",height:"fit-content"},input:{background:"materialBg",focusRing:"inside",focusRingColor:"primary",focusRingWidth:"2px",height:"56px",borderRadius:"8px",pt:"24px",pr:"48px",pb:"8px",pl:"16px",textStyle:"notoP16",color:"text.primary",_focus:{_placeholder:{opacity:1}},_placeholder:{color:"text.secondary",opacity:0,willChange:"opacity",transition:"opacity 0.05s ease-out"}},label:{position:"absolute",top:"8px",left:"16px",color:"text.secondary",textStyle:"notoP12",willChange:"top, font-size, line-height",transition:"top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",_peerPlaceholderShown:{top:"16px",textStyle:"notoP16"},_peerFocusVisible:{top:"8px",textStyle:"notoP12"},_required:{_after:{content:"'*'",color:"red",paddingLeft:"4px"}}},clear:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",borderRadius:"50%",padding:"4px",display:"block",transition:"background-color 0.15s ease-out",_peerPlaceholderShown:{display:"none"}}}}),{withProvider:ce,withContext:E}=se({recipe:le}),ie=ce("label","root"),pe=E("input","input"),ue=E("span","label"),de=E("button","clear"),_=e=>{const{label:r,className:a,placeholder:t,required:n,onClear:h,...g}=e;return u.createElement(ie,null,u.createElement(pe,{required:n,className:(a||"")+" peer",placeholder:t||"",...g}),u.createElement(ue,{...n?{"data-required":!0}:{}},r),h&&u.createElement(de,{onClick:h},u.createElement(te,{fontSize:"24px"},u.createElement(ne,null))))};_.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLChakraProps"]};const Ce={title:"UPSACE/TextField",component:_,parameters:{layout:"centered",docs:{description:{component:"一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props"}}},args:{label:"Phone",placeholder:"0912345678"},argTypes:{label:{control:"text",description:"就是標籤"},placeholder:{control:"text",description:"輸入框建議文字，通常是指資料格式"},required:{control:"boolean",description:"是否為必填"},onClear:{control:!1,description:"當清除按鈕被點擊的 callback，有傳入時才會顯示 icon"}}},C={args:{}},v={args:{required:!0},play:async({canvasElement:e})=>{const r=e.querySelector(".textField__input");S(r).toHaveAttribute("required");const a=e.querySelector(".textField__label"),t=window.getComputedStyle(a,"::after");S(t.content).toBe('"*"')}},b={args:{onClear:()=>{}},render:e=>{const[r,a]=P.useState(""),t=()=>{a("")};return u.createElement(re,null,u.createElement(_,{...e,value:r,onChange:n=>a(n.target.value),onClear:t}))},play:async({canvasElement:e})=>{const r=e.querySelector("input"),a=e.querySelector("button");await $.type(r,"0968129756",{delay:200}),S(r.value).toBe("0968129756"),S(a).toBeVisible(),await $.click(a,{delay:200}),S(r.value).toBe("")}};var I,z,A;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(A=(z=C.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,H,O;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(H=v.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,W,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    onClear: () => {}
  },
  render: args => {
    const [value, setValue] = useState("");
    const handleClear = () => {
      setValue("");
    };
    return <Stack>
        <TextField {...args} value={value} onChange={e => setValue(e.target.value)} onClear={handleClear} />
      </Stack>;
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
}`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const ve=["Default","Required","WithClear"];export{C as Default,v as Required,b as WithClear,ve as __namedExportsOrder,Ce as default};
