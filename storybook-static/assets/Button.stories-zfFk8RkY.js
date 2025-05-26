import{R as e}from"./index-CZMpeKRu.js";import{G as I}from"./iconBase-CunQ1dn9.js";import{B as r}from"./Button-CWqdWnbJ.js";import{S as c}from"./stack-BEACEML7.js";import"./config-aJmEkHSh.js";import"./create-recipe-context-CV5lbZL3.js";import"./jsx-runtime-CLpGMVip.js";import"./icon-tWRP6GWX.js";import"./spinner-BZFFqSXY.js";function s(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24z"},child:[]}]})(t)}const D={title:"UPSACE/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"就是一顆按鈕，繼承來自 `chakra('button')`，button 可以用的屬性都可以使用"}}},args:{children:"按鈕 Button 1234",width:"350px",level:"primary",disabled:!1,loading:!1},argTypes:{children:{control:"text",description:"按鈕文字"},width:{control:"text",description:"預設會填滿整個容器，但可透過 `width` | `flex` 來調整寬度"},level:{control:"select",description:"按鈕等級",options:["primary","secondary","negative","dangerous"]},disabled:{control:"boolean"},loading:{control:"boolean"},startIcon:{control:!1,description:"按鈕左側的Icon"},endIcon:{control:!1,description:"按鈕右側的Icon"}}},n={args:{}},a={args:{},render:t=>e.createElement(c,null,e.createElement(r,{...t,startIcon:e.createElement(s,null)},"Primary"),e.createElement(r,{...t,endIcon:e.createElement(s,null)},"Primary"))},o={args:{loading:!0}},l={args:{},render:t=>e.createElement(c,{direction:"row"},e.createElement(c,null,e.createElement(r,{...t,level:"primary"},"Primary"),e.createElement(r,{...t,level:"secondary"},"Secondary"),e.createElement(r,{...t,level:"negative"},"Negative"),e.createElement(r,{...t,level:"dangerous"},"Dangerous")),e.createElement(c,null,e.createElement(r,{...t,level:"primary",disabled:!0},"Primary (disabled)"),e.createElement(r,{...t,level:"secondary",disabled:!0},"Secondary (disabled)"),e.createElement(r,{...t,level:"negative",disabled:!0},"Negative (disabled)")))};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <Button {...args} startIcon={<IoNavigateCircle />}>
        Primary
      </Button>
      <Button {...args} endIcon={<IoNavigateCircle />}>
        Primary
      </Button>
    </Stack>
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,y,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var S,b,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(b=l.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const z=["Default","WithIcon","Loading","Level"];export{n as Default,l as Level,o as Loading,a as WithIcon,z as __namedExportsOrder,D as default};
