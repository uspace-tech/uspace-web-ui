import{r as w,R as a}from"./index-CZMpeKRu.js";import{S as D}from"./stack-BEACEML7.js";import{B as c}from"./box-DOMNwJQf.js";import{T as M}from"./text-L1tMntHt.js";import"./jsx-runtime-CLpGMVip.js";import"./create-recipe-context-CV5lbZL3.js";const y=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],T=[0,5,10,15,20,25,30,35,40,45,50,55],g=({value:r=new Date,onChange:o,minuteStep:l=5,availableGroup:u,minDateTime:s,maxDateTime:m})=>{const i=r.getHours(),d=r.getMinutes(),C=w.useMemo(()=>{if(u!=null&&u.length)return u.map(t=>t.hour);if(!s||!m)return y;const e=new Date(s);e.setMinutes(Math.ceil(e.getMinutes()/l)*l);const n=new Date(m);return n.setMinutes(Math.floor(m.getMinutes()/l)*l),y.filter(t=>{const f=new Date(e).getHours(),v=new Date(n).getHours();return t>=f&&t<=v})},[s,m]),x=w.useMemo(()=>l?T.filter(e=>e%l===0):T,[l]),b=w.useMemo(()=>x.filter(e=>{if(m){const t=new Date(m);if(t.getHours()===i){const v=t.getMinutes();return e<=v}}if(s){const t=new Date(s);if(t.getHours()===i){const v=t.getMinutes();return e>=v}}const n=u==null?void 0:u.find(t=>t.hour===i);return n?n.minute.includes(e):!0}),[x,u,i,s,m]);a.useEffect(()=>{const e=setTimeout(()=>{const n=document.querySelector(`[data-hour="${i.toString().padStart(2,"0")}"]`);n&&n.scrollIntoView({behavior:"smooth",block:"center"});const t=document.querySelector(`[data-minute="${d.toString().padStart(2,"0")}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})},0);return()=>clearTimeout(e)},[i,d]);const _=e=>{const n=new Date(r);n.setHours(e),o(n)},P=e=>{const n=new Date(r);n.setMinutes(e),o(n)};return a.createElement(D,{direction:"row",gap:"2",h:"180px"},a.createElement(c,{w:"100%",maxW:"175px",h:"100%",gap:"2",overflow:"scroll"},a.createElement(c,{h:"calc((100% / 2) - 24px)"}),C.map(e=>a.createElement(D,{key:e,h:"40px",alignItems:"center",justifyContent:"center",bg:e===i?"materialBg":"transparent",border:e===i?"1px solid #748598":"none",borderRadius:"8px",onClick:()=>_(e),my:"1","data-hour":e.toString().padStart(2,"0")},a.createElement(M,null,e.toString().padStart(2,"0")))),a.createElement(c,{h:"calc((100% / 2) - 24px)"})),a.createElement(c,{w:"100%",maxW:"175px",h:"100%",gap:"2",overflow:"scroll"},a.createElement(c,{h:"calc((100% / 2) - 24px)"}),b.map(e=>a.createElement(D,{key:e,h:"40px",alignItems:"center",justifyContent:"center",bg:e===d?"materialBg":"transparent",border:e===d?"1px solid #748598":"none",borderRadius:"8px",onClick:()=>P(e),my:"1","data-minute":e.toString().padStart(2,"0")},a.createElement(M,null,e.toString().padStart(2,"0")))),a.createElement(c,{h:"calc((100% / 2) - 24px)"})))};g.__docgenInfo={description:"留意如果傳入的 value Date 的分鐘不是整數，不會顯示任何分鐘（即沒有預設選項）",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date()",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},minuteStep:{required:!1,tsType:{name:"union",raw:"5 | 10 | 15 | 30",elements:[{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"30"}]},description:"",defaultValue:{value:"5",computed:!1}},availableGroup:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hour: Hour
  minute: Minute[]
}`,signature:{properties:[{key:"hour",value:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}],required:!0}},{key:"minute",value:{name:"Array",elements:[{name:"union",raw:"0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55",elements:[{name:"literal",value:"0"},{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"20"},{name:"literal",value:"25"},{name:"literal",value:"30"},{name:"literal",value:"35"},{name:"literal",value:"40"},{name:"literal",value:"45"},{name:"literal",value:"50"},{name:"literal",value:"55"}]}],raw:"Minute[]",required:!0}}]}}],raw:`Array<{
  hour: Hour
  minute: Minute[]
}>`},description:""},minHour:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}]},description:""},maxHour:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"13"},{name:"literal",value:"14"},{name:"literal",value:"15"},{name:"literal",value:"16"},{name:"literal",value:"17"},{name:"literal",value:"18"},{name:"literal",value:"19"},{name:"literal",value:"20"},{name:"literal",value:"21"},{name:"literal",value:"22"},{name:"literal",value:"23"}]},description:""},minDateTime:{required:!1,tsType:{name:"Date"},description:""},maxDateTime:{required:!1,tsType:{name:"Date"},description:""}}};const $={title:"UPSACE/TimePicker",component:g,argTypes:{value:{control:!1,description:"選取的時間"},minuteStep:{control:"number",description:"分鐘間隔，5 | 10 | 15 | 30"},availableGroup:{control:"object",description:"可選擇的時間組合，若特定hour未傳入，則會顯示該小時所有分鐘，不能與 minDateTime | maxDateTime 一起使用"},minDateTime:{control:"date",description:"最小可選擇的時間，不能與 availableGroup 一起使用"},maxDateTime:{control:"date",description:"最大可選擇的時間，不能與 availableGroup 一起使用"}}},p={args:{availableGroup:[{hour:0,minute:[]},{hour:1,minute:[]},{hour:2,minute:[]},{hour:3,minute:[]},{hour:4,minute:[]},{hour:5,minute:[]},{hour:6,minute:[]},{hour:7,minute:[]},{hour:8,minute:[]},{hour:18,minute:[]},{hour:19,minute:[]},{hour:20,minute:[]},{hour:21,minute:[]},{hour:22,minute:[]},{hour:23,minute:[]}]},render:r=>{const[o,l]=a.useState(new Date);return a.createElement(g,{...r,value:o,onChange:l})}},h={args:{minDateTime:new Date(2025,5,13,11,16,0),maxDateTime:new Date(2025,5,13,17,0,0),minuteStep:15},render:r=>{const[o,l]=a.useState(new Date);return a.createElement(g,{...r,value:o,onChange:l})}};var S,H,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(H=p.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var k,V,q;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    minDateTime: new Date(2025, 5, 13, 11, 16, 0),
    maxDateTime: new Date(2025, 5, 13, 17, 0, 0),
    minuteStep: 15
  },
  render: args => {
    const [value, setValue] = React.useState(new Date());
    return <TimePicker {...args} value={value} onChange={setValue} />;
  }
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const N=["Default","MinMaxDateTime"];export{p as Default,h as MinMaxDateTime,N as __namedExportsOrder,$ as default};
