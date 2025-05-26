import{r as _,R as r}from"./index-CZMpeKRu.js";import{M as F}from"./index-B4RbK7oS.js";import{a as R}from"./config-aJmEkHSh.js";import{c as T}from"./create-slot-recipe-context-CECrUcCl.js";import{I as B}from"./icon-tWRP6GWX.js";import{e as l,u as x}from"./index-bjSl42hy.js";import"./iconBase-CunQ1dn9.js";import"./create-recipe-context-CV5lbZL3.js";import"./jsx-runtime-CLpGMVip.js";const P=R({className:"textField",slots:["root","input","label","clear"],base:{root:{display:"flex",position:"relative",width:"100%"},input:{background:"materialBg",focusRing:"inside",focusRingColor:"primary",focusRingWidth:"2px",width:"100%",height:"56px",borderRadius:"8px",pt:"24px",pr:"48px",pb:"8px",pl:"16px",textStyle:"notoP16",color:"text.primary",_focus:{_placeholder:{opacity:1}},_placeholder:{color:"text.secondary",opacity:0,willChange:"opacity",transition:"opacity 0.05s ease-out"}},label:{position:"absolute",top:"8px",left:"16px",color:"text.secondary",textStyle:"notoP12",willChange:"top, font-size, line-height",transition:"top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",_peerPlaceholderShown:{top:"16px",textStyle:"notoP16"},_peerFocusVisible:{top:"8px",textStyle:"notoP12"},_required:{_after:{content:"'*'",color:"red",paddingLeft:"4px"}}},clear:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",borderRadius:"50%",padding:"4px",display:"block",transition:"background-color 0.15s ease-out",_peerPlaceholderShown:{display:"none"}}}}),{withProvider:k,withContext:u}=T({recipe:P}),V=k("label","root"),I=u("input","input"),N=u("span","label"),z=u("button","clear"),c=_.forwardRef((e,t)=>{const{label:o,className:a,placeholder:p,required:d,onClear:m,rootProps:w,...E}=e;return r.createElement(V,{...w},r.createElement(I,{required:d,className:(a||"")+" peer",placeholder:p||" ",...E,ref:t}),r.createElement(N,{...d?{"data-required":!0}:{}},o),m&&r.createElement(z,{onClick:m},r.createElement(B,{fontSize:"24px"},r.createElement(F,null))))});c.displayName="TextField";c.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},rootProps:{required:!1,tsType:{name:"TextFieldRootProps"},description:""}},composes:["HTMLChakraProps"]};const j={title:"UPSACE/TextField",component:c,parameters:{layout:"centered",docs:{description:{component:"一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props"}}},args:{label:"Phone",placeholder:"0912345678"},argTypes:{label:{control:"text",description:"就是標籤"},placeholder:{control:"text",description:"輸入框建議文字，通常是指資料格式"},required:{control:"boolean",description:"是否為必填"},onClear:{control:!1,description:"當清除按鈕被點擊的 callback，有傳入時才會顯示 icon"}}},n={args:{}},s={args:{required:!0},play:async({canvasElement:e})=>{const t=e.querySelector(".textField__input");l(t).toHaveAttribute("required");const o=e.querySelector(".textField__label"),a=window.getComputedStyle(o,"::after");l(a.content).toBe('"*"')}},i={args:{onClear:()=>{}},render:e=>{const[t,o]=_.useState(""),a=()=>{o("")};return r.createElement(c,{...e,value:t,onChange:p=>o(p.target.value),onClear:a})},play:async({canvasElement:e})=>{const t=e.querySelector("input"),o=e.querySelector("button");await x.type(t,"0968129756",{delay:200}),l(t.value).toBe("0968129756"),l(o).toBeVisible(),await x.click(o,{delay:200}),l(t.value).toBe("")}};var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,v,q;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(v=i.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const G=["Default","Required","WithClear"];export{n as Default,s as Required,i as WithClear,G as __namedExportsOrder,j as default};
