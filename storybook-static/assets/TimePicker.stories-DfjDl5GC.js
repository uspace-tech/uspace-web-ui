import{r as w,R as a}from"./index-CZMpeKRu.js";import{S as D}from"./stack-BTMboc2O.js";import{B as c,T as x}from"./text-B579pxti.js";import"./jsx-runtime-CLpGMVip.js";import"./create-recipe-context-DWduORGS.js";import"./walk-object-BItxkN3D.js";const y=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],T=[0,5,10,15,20,25,30,35,40,45,50,55],h=({value:r=new Date,onChange:m,minuteStep:l=5,availableGroup:v,minDateTime:o,maxDateTime:u})=>{const i=r.getHours(),g=r.getMinutes(),q=w.useMemo(()=>{if(!o||!u)return y;const e=new Date(o);e.setMinutes(Math.ceil(e.getMinutes()/l)*l);const t=new Date(u);return t.setMinutes(Math.floor(u.getMinutes()/l)*l),y.filter(n=>{const f=new Date(e).getHours(),s=new Date(t).getHours();return n>=f&&n<=s})},[o,u]),M=w.useMemo(()=>l?T.filter(e=>e%l===0):T,[l]),C=w.useMemo(()=>M.filter(e=>{if(o){const n=new Date(o);if(n.getHours()===i){const s=n.getMinutes();return console.log(s,e),e>=s}}if(u){const n=new Date(u);if(console.log("cc",n),n.getHours()===i){const s=n.getMinutes();return e<=s}}const t=v==null?void 0:v.find(n=>n.hour===i);return t?t.minute.includes(e):!0}),[M,v,i,o,u]);a.useEffect(()=>{const e=setTimeout(()=>{const t=document.querySelector(`[data-hour="${i.toString().padStart(2,"0")}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"});const n=document.querySelector(`[data-minute="${g.toString().padStart(2,"0")}"]`);n&&n.scrollIntoView({behavior:"smooth",block:"center"})},0);return()=>clearTimeout(e)},[i,g]);const _=e=>{const t=new Date(r);t.setHours(e),m(t)},P=e=>{const t=new Date(r);t.setMinutes(e),m(t)};return a.createElement(D,{direction:"row",gap:"2",h:"180px"},a.createElement(c,{w:"100%",maxW:"175px",h:"100%",gap:"2",overflow:"scroll"},a.createElement(c,{h:"calc((100% / 2) - 24px)"}),q.map(e=>a.createElement(D,{key:e,h:"40px",alignItems:"center",justifyContent:"center",bg:e===i?"materialBg":"transparent",borderRadius:"8px",onClick:()=>_(e),my:"1","data-hour":e.toString().padStart(2,"0")},a.createElement(x,null,e.toString().padStart(2,"0")))),a.createElement(c,{h:"calc((100% / 2) - 24px)"})),a.createElement(c,{w:"100%",maxW:"175px",h:"100%",gap:"2",overflow:"scroll"},a.createElement(c,{h:"calc((100% / 2) - 24px)"}),C.map(e=>a.createElement(D,{key:e,h:"40px",alignItems:"center",justifyContent:"center",bg:e===g?"materialBg":"transparent",borderRadius:"8px",onClick:()=>P(e),my:"1","data-minute":e.toString().padStart(2,"0")},a.createElement(x,null,e.toString().padStart(2,"0")))),a.createElement(c,{h:"calc((100% / 2) - 24px)"})))};h.__docgenInfo={description:"留意如果傳入的 value Date 的分鐘不是整數，不會顯示任何分鐘（即沒有預設選項）",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date()",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},minuteStep:{required:!1,tsType:{name:"union",raw:"5 | 10 | 15 | 30",elements:[{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"30"}]},description:"",defaultValue:{value:"5",computed:!1}},availableGroup:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hour: Hour
  minute: Minute[]
}`,signature:{properties:[{key:"hour",value:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}],required:!0}},{key:"minute",value:{name:"Array",elements:[{name:"union",raw:"0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55",elements:[{name:"literal",value:"0"},{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"20"},{name:"literal",value:"25"},{name:"literal",value:"30"},{name:"literal",value:"35"},{name:"literal",value:"40"},{name:"literal",value:"45"},{name:"literal",value:"50"},{name:"literal",value:"55"}]}],raw:"Minute[]",required:!0}}]}}],raw:`Array<{
  hour: Hour
  minute: Minute[]
}>`},description:""},minHour:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}]},description:""},maxHour:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}]},description:""},minDateTime:{required:!1,tsType:{name:"Date"},description:""},maxDateTime:{required:!1,tsType:{name:"Date"},description:""}}};const $={title:"UPSACE/TimePicker",component:h,argTypes:{value:{control:!1,description:"選取的時間"},minuteStep:{control:"number",description:"分鐘間隔，5 | 10 | 15 | 30"},availableGroup:{control:"object",description:"可選擇的時間組合，若特定hour未傳入，則會顯示該小時所有分鐘，不能與 minDateTime | maxDateTime 一起使用"},minDateTime:{control:"date",description:"最小可選擇的時間，不能與 availableGroup 一起使用"},maxDateTime:{control:"date",description:"最大可選擇的時間，不能與 availableGroup 一起使用"}}},p={args:{availableGroup:[{hour:0,minute:[]},{hour:1,minute:[]},{hour:2,minute:[]},{hour:3,minute:[]},{hour:4,minute:[]},{hour:5,minute:[]},{hour:6,minute:[]},{hour:7,minute:[]},{hour:8,minute:[]},{hour:18,minute:[]},{hour:19,minute:[]},{hour:20,minute:[]},{hour:21,minute:[]},{hour:22,minute:[]},{hour:23,minute:[]}]},render:r=>{const[m,l]=a.useState(new Date);return a.createElement(h,{...r,value:m,onChange:l})}},d={args:{minDateTime:new Date(2025,5,13,11,16,0),maxDateTime:new Date(2025,5,13,17,0,0),minuteStep:15},render:r=>{const[m,l]=a.useState(new Date);return a.createElement(h,{...r,value:m,onChange:l})}};var S,H,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(H=p.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var k,V,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    minDateTime: new Date(2025, 5, 13, 11, 16, 0),
    maxDateTime: new Date(2025, 5, 13, 17, 0, 0),
    minuteStep: 15
  },
  render: args => {
    const [value, setValue] = React.useState(new Date());
    return <TimePicker {...args} value={value} onChange={setValue} />;
  }
}`,...(b=(V=d.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};const G=["Default","MinMaxDateTime"];export{p as Default,d as MinMaxDateTime,G as __namedExportsOrder,$ as default};
