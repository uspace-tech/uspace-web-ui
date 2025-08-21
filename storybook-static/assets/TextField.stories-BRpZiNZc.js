import{r as M,R as e}from"./index-CZMpeKRu.js";import{M as V,a as W,b as A}from"./index-CktSLB7R.js";import{a as H}from"./spinner-B2iJ9ydb.js";import{c as L}from"./create-slot-recipe-context-CECrUcCl.js";import{I as g}from"./icon-tWRP6GWX.js";import{e as n,u as b}from"./index-bjSl42hy.js";import{B as D,I as U}from"./icon-button-BgGrl013.js";import"./iconBase-CunQ1dn9.js";import"./create-recipe-context-CV5lbZL3.js";import"./jsx-runtime-CLpGMVip.js";const Y=H({className:"textField",slots:["root","input","label","clear","trailing"],base:{root:{display:"flex",position:"relative",width:"100%"},input:{background:"materialBg",focusRing:"inside",focusRingColor:"primary",focusRingWidth:"2px",width:"100%",height:"56px",borderRadius:"8px",pt:"24px",pr:"48px",pb:"8px",pl:"16px",textStyle:"notoP16",color:"text.primary",caretColor:"text.primary",_focus:{_placeholder:{opacity:1}},_placeholder:{color:"text.secondary",opacity:0,willChange:"opacity",transition:"opacity 0.05s ease-out"}},label:{position:"absolute",top:"8px",left:"16px",color:"text.secondary",textStyle:"notoP12",willChange:"top, font-size, line-height",transition:"top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",_peerPlaceholderShown:{top:"16px",textStyle:"notoP16"},_peerFocusVisible:{top:"8px",textStyle:"notoP12"},_required:{_after:{content:"'*'",color:"red",paddingLeft:"4px"}}},clear:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",borderRadius:"50%",padding:"4px",display:"block",transition:"background-color 0.15s ease-out",_peerPlaceholderShown:{display:"none"}},trailing:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"16px",zIndex:"1",display:"flex",alignItems:"center",justifyContent:"center"}}}),{withProvider:j,withContext:u}=L({recipe:Y}),O=j("label","root"),G=u("input","input"),J=u("span","label"),K=u("button","clear"),Q=u("div","trailing"),d=M.forwardRef((t,r)=>{const{label:a,className:o,placeholder:m,required:y,onClear:h,renderTrailingComponent:x,rootProps:z,...N}=t;return e.createElement(O,{...z},e.createElement(G,{required:y,className:(o||"")+" peer",placeholder:m||" ",...N,ref:r}),e.createElement(J,{...y?{"data-required":!0}:{}},a),h&&e.createElement(K,{onClick:h},e.createElement(g,{fontSize:"24px"},e.createElement(V,null))),x&&e.createElement(Q,null,x()))});d.displayName="TextField";d.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderTrailingComponent:{required:!1,tsType:{name:"signature",type:"function",raw:"() => React.ReactNode",signature:{arguments:[],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},rootProps:{required:!1,tsType:{name:"TextFieldRootProps"},description:""}},composes:["HTMLChakraProps"]};const ie={title:"UPSACE/TextField",component:d,parameters:{layout:"centered",docs:{description:{component:"一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props"}}},args:{label:"Phone",placeholder:"0912345678"},argTypes:{label:{control:"text",description:"就是標籤"},placeholder:{control:"text",description:"輸入框建議文字，通常是指資料格式"},required:{control:"boolean",description:"是否為必填"},onClear:{control:!1,description:"當清除按鈕被點擊的 callback，有傳入時才會顯示 icon"},renderTrailingComponent:{control:!1,description:"自訂尾端元件的 render function"}}},l={args:{}},i={args:{required:!0},play:async({canvasElement:t})=>{const r=t.querySelector(".textField__input");n(r).toHaveAttribute("required");const a=t.querySelector(".textField__label"),o=window.getComputedStyle(a,"::after");n(o.content).toBe('"*"')}},s={args:{onClear:()=>{}},render:t=>{const[r,a]=M.useState(""),o=()=>{a("")};return e.createElement(d,{...t,value:r,onChange:m=>a(m.target.value),onClear:o})},play:async({canvasElement:t})=>{const r=t.querySelector("input"),a=t.querySelector("button");await b.type(r,"0968129756",{delay:200}),n(r.value).toBe("0968129756"),n(a).toBeVisible(),await b.click(a,{delay:200}),n(r.value).toBe("")}},c={args:{label:"Search",placeholder:"Enter search term...",renderTrailingComponent:()=>e.createElement(D,{size:"sm",colorPalette:"blue",onClick:()=>alert("Search clicked!")},e.createElement(g,null,e.createElement(W,null)),"Search")}},p={args:{label:"Message",placeholder:"Type your message...",renderTrailingComponent:()=>e.createElement(U,{size:"sm",colorPalette:"green",onClick:()=>alert("Send clicked!"),"aria-label":"Send message"},e.createElement(g,null,e.createElement(A,null)))}};var S,f,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,E,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var B,q,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(q=s.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var w,_,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Enter search term...",
    renderTrailingComponent: () => <Button size="sm" colorPalette="blue" onClick={() => alert("Search clicked!")}>
        <Icon>
          <MdSearch />
        </Icon>
        Search
      </Button>
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var F,I,P;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message...",
    renderTrailingComponent: () => <IconButton size="sm" colorPalette="green" onClick={() => alert("Send clicked!")} aria-label="Send message">
        <Icon>
          <MdSend />
        </Icon>
      </IconButton>
  }
}`,...(P=(I=p.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const se=["Default","Required","WithClear","WithTrailingButton","WithTrailingIconButton"];export{l as Default,i as Required,s as WithClear,c as WithTrailingButton,p as WithTrailingIconButton,se as __namedExportsOrder,ie as default};
