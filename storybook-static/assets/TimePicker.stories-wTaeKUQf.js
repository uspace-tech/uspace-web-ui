import{r as g,R as a}from"./index-CZMpeKRu.js";import{S as f}from"./stack-BTMboc2O.js";import{B as u,T as y}from"./text-B579pxti.js";import"./jsx-runtime-CLpGMVip.js";import"./create-recipe-context-DWduORGS.js";import"./walk-object-BItxkN3D.js";const q=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],S=[0,5,10,15,20,25,30,35,40,45,50,55],v=({value:n=new Date,onChange:r,minuteStep:l=5,availableGroup:m,minHour:p,maxHour:d})=>{const i=n.getHours(),h=n.getMinutes(),V=g.useMemo(()=>q.filter(e=>!(p&&e<p||d&&e>d)),[p,d]),w=g.useMemo(()=>l?S.filter(e=>e%l===0):S,[l]),H=g.useMemo(()=>w.filter(e=>{const t=m==null?void 0:m.find(o=>o.hour===i);return t?t.minute.includes(e):!0}),[w,m,i]);a.useEffect(()=>{const e=setTimeout(()=>{const t=document.querySelector(`[data-hour="${i.toString().padStart(2,"0")}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"});const o=document.querySelector(`[data-minute="${h.toString().padStart(2,"0")}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"center"})},0);return()=>clearTimeout(e)},[i,h]);const C=e=>{const t=new Date(n);t.setHours(e),r(t)},b=e=>{const t=new Date(n);t.setMinutes(e),r(t)};return a.createElement(f,{direction:"row",gap:"2",h:"180px"},a.createElement(u,{w:"100%",maxW:"175px",h:"100%",gap:"2",overflow:"scroll"},a.createElement(u,{h:"calc((100% / 2) - 24px)"}),V.map(e=>a.createElement(f,{key:e,h:"40px",alignItems:"center",justifyContent:"center",bg:e===i?"materialBg":"transparent",borderRadius:"8px",onClick:()=>C(e),my:"1","data-hour":e.toString().padStart(2,"0")},a.createElement(y,null,e.toString().padStart(2,"0")))),a.createElement(u,{h:"calc((100% / 2) - 24px)"})),a.createElement(u,{w:"100%",maxW:"175px",h:"100%",gap:"2",overflow:"scroll"},a.createElement(u,{h:"calc((100% / 2) - 24px)"}),H.map(e=>a.createElement(f,{key:e,h:"40px",alignItems:"center",justifyContent:"center",bg:e===h?"materialBg":"transparent",borderRadius:"8px",onClick:()=>b(e),my:"1","data-minute":e.toString().padStart(2,"0")},a.createElement(y,null,e.toString().padStart(2,"0")))),a.createElement(u,{h:"calc((100% / 2) - 24px)"})))};v.__docgenInfo={description:"留意如果傳入的 value Date 的分鐘不是整數，不會顯示任何分鐘（即沒有預設選項）",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date()",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},minuteStep:{required:!1,tsType:{name:"union",raw:"5 | 10 | 15 | 30",elements:[{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"30"}]},description:"",defaultValue:{value:"5",computed:!1}},availableGroup:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hour: Hour
  minute: Minute[]
}`,signature:{properties:[{key:"hour",value:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}],required:!0}},{key:"minute",value:{name:"Array",elements:[{name:"union",raw:"0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55",elements:[{name:"literal",value:"0"},{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"20"},{name:"literal",value:"25"},{name:"literal",value:"30"},{name:"literal",value:"35"},{name:"literal",value:"40"},{name:"literal",value:"45"},{name:"literal",value:"50"},{name:"literal",value:"55"}]}],raw:"Minute[]",required:!0}}]}}],raw:`Array<{
  hour: Hour
  minute: Minute[]
}>`},description:""},minHour:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}]},description:""},maxHour:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}]},description:""}}};const _={title:"UPSACE/TimePicker",component:v,argTypes:{value:{control:!1,description:"選取的時間"},minuteStep:{control:"number",description:"分鐘間隔，5 | 10 | 15 | 30"},availableGroup:{control:"object",description:"可選擇的時間組合，若特定hour未傳入，則會顯示該小時所有分鐘"}}},s={args:{availableGroup:[{hour:0,minute:[]},{hour:1,minute:[]},{hour:2,minute:[]},{hour:3,minute:[]},{hour:4,minute:[]},{hour:5,minute:[]},{hour:6,minute:[]},{hour:7,minute:[]},{hour:8,minute:[]},{hour:18,minute:[]},{hour:19,minute:[]},{hour:20,minute:[]},{hour:21,minute:[]},{hour:22,minute:[]},{hour:23,minute:[]}]},render:n=>{const[r,l]=a.useState(new Date);return a.createElement(v,{...n,value:r,onChange:l})}},c={args:{minHour:9,maxHour:17},render:n=>{const[r,l]=a.useState(new Date);return a.createElement(v,{...n,value:r,onChange:l})}};var x,E,M;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    availableGroup: [{
      hour: 0,
      minute: []
    }, {
      hour: 1,
      minute: []
    }, {
      hour: 2,
      minute: []
    }, {
      hour: 3,
      minute: []
    }, {
      hour: 4,
      minute: []
    }, {
      hour: 5,
      minute: []
    }, {
      hour: 6,
      minute: []
    }, {
      hour: 7,
      minute: []
    }, {
      hour: 8,
      minute: []
    }, {
      hour: 18,
      minute: []
    }, {
      hour: 19,
      minute: []
    }, {
      hour: 20,
      minute: []
    }, {
      hour: 21,
      minute: []
    }, {
      hour: 22,
      minute: []
    }, {
      hour: 23,
      minute: []
    }]
  },
  render: args => {
    const [value, setValue] = React.useState(new Date());
    return <TimePicker {...args} value={value} onChange={setValue} />;
  }
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,D,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    minHour: 9,
    maxHour: 17
  },
  render: args => {
    const [value, setValue] = React.useState(new Date());
    return <TimePicker {...args} value={value} onChange={setValue} />;
  }
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const W=["Default","MinMaxHour"];export{s as Default,c as MinMaxHour,W as __namedExportsOrder,_ as default};
