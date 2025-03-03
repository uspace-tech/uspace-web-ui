import{R as r,r as w}from"./index-CZMpeKRu.js";import{M as E}from"./index-B4RbK7oS.js";import{a as F}from"./config-DtB2B6Ze.js";import{c as B}from"./create-slot-recipe-context-BAAZQ-c8.js";import{I as P}from"./icon-CjZAgybX.js";import{e as l,u as m}from"./index-bjSl42hy.js";import"./iconBase-CunQ1dn9.js";import"./create-recipe-context-DWduORGS.js";import"./jsx-runtime-CLpGMVip.js";const R=F({className:"textField",slots:["root","input","label","clear"],base:{root:{display:"flex",position:"relative",width:"100%"},input:{background:"materialBg",focusRing:"inside",focusRingColor:"primary",focusRingWidth:"2px",width:"100%",height:"56px",borderRadius:"8px",pt:"24px",pr:"48px",pb:"8px",pl:"16px",textStyle:"notoP16",color:"text.primary",_focus:{_placeholder:{opacity:1}},_placeholder:{color:"text.secondary",opacity:0,willChange:"opacity",transition:"opacity 0.05s ease-out"}},label:{position:"absolute",top:"8px",left:"16px",color:"text.secondary",textStyle:"notoP12",willChange:"top, font-size, line-height",transition:"top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",_peerPlaceholderShown:{top:"16px",textStyle:"notoP16"},_peerFocusVisible:{top:"8px",textStyle:"notoP12"},_required:{_after:{content:"'*'",color:"red",paddingLeft:"4px"}}},clear:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",borderRadius:"50%",padding:"4px",display:"block",transition:"background-color 0.15s ease-out",_peerPlaceholderShown:{display:"none"}}}}),{withProvider:T,withContext:p}=B({recipe:R}),k=T("label","root"),V=p("input","input"),I=p("span","label"),z=p("button","clear"),u=e=>{const{label:t,className:o,placeholder:a,required:n,onClear:d,rootProps:q,..._}=e;return r.createElement(k,{...q},r.createElement(V,{required:n,className:(o||"")+" peer",placeholder:a||"",..._}),r.createElement(I,{...n?{"data-required":!0}:{}},t),d&&r.createElement(z,{onClick:d},r.createElement(P,{fontSize:"24px"},r.createElement(E,null))))};u.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},rootProps:{required:!1,tsType:{name:"TextFieldRootProps"},description:""}},composes:["HTMLChakraProps"]};const Y={title:"UPSACE/TextField",component:u,parameters:{layout:"centered",docs:{description:{component:"一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props"}}},args:{label:"Phone",placeholder:"0912345678"},argTypes:{label:{control:"text",description:"就是標籤"},placeholder:{control:"text",description:"輸入框建議文字，通常是指資料格式"},required:{control:"boolean",description:"是否為必填"},onClear:{control:!1,description:"當清除按鈕被點擊的 callback，有傳入時才會顯示 icon"}}},s={args:{}},i={args:{required:!0},play:async({canvasElement:e})=>{const t=e.querySelector(".textField__input");l(t).toHaveAttribute("required");const o=e.querySelector(".textField__label"),a=window.getComputedStyle(o,"::after");l(a.content).toBe('"*"')}},c={args:{onClear:()=>{}},render:e=>{const[t,o]=w.useState(""),a=()=>{o("")};return r.createElement(u,{...e,value:t,onChange:n=>o(n.target.value),onClear:a})},play:async({canvasElement:e})=>{const t=e.querySelector("input"),o=e.querySelector("button");await m.type(t,"0968129756",{delay:200}),l(t.value).toBe("0968129756"),l(o).toBeVisible(),await m.click(o,{delay:200}),l(t.value).toBe("")}};var x,y,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,b,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,C,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const j=["Default","Required","WithClear"];export{s as Default,i as Required,c as WithClear,j as __namedExportsOrder,Y as default};
