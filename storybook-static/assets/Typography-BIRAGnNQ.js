import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-npCMkmsx.js";import{ae as o,ah as i}from"./index-DkN419s-.js";import"./index-CZMpeKRu.js";import"./iframe-CIVxHQ1u.js";import"../sb-preview/runtime.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Design System/Typography"}),`
`,n.jsx(e.h1,{id:"typography-system",children:"Typography System"}),`
`,n.jsx(e.p,{children:"Our typography system provides consistent text styles for both Chinese and English content."}),`
`,n.jsx(e.h2,{id:"font-families",children:"Font Families"}),`
`,n.jsx(e.h3,{id:"noto-sans-tc",children:"Noto Sans TC"}),`
`,n.jsx(e.p,{children:"Primary font for Chinese content with excellent CJK character support."}),`
`,n.jsx(e.h3,{id:"poppins",children:"Poppins"}),`
`,n.jsx(e.p,{children:"Primary font for English content, falling back to Noto Sans TC for Chinese characters."}),`
`,n.jsx(e.h2,{id:"noto-sans-tc-text-styles",children:"Noto Sans TC Text Styles"}),`
`,n.jsx(e.h3,{id:"headings",children:"Headings"}),`
`,n.jsx(i,{fontFamily:'"Noto Sans TC", sans-serif',fontSizes:[40,32,24,20,16,14,12],fontWeight:700,sampleText:"標題文字 Heading Text",labels:["notoH40","notoH32","notoH24","notoH20","notoH16","notoH14","notoH12"]}),`
`,n.jsx(e.h3,{id:"headings-with-decoration",children:"Headings with Decoration"}),`
`,n.jsx(e.p,{children:"Text styles with underline decoration for special emphasis:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"notoH16D"}),": 16px heading with underline"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"notoH14D"}),": 14px heading with underline"]}),`
`]}),`
`,n.jsx(e.h3,{id:"paragraphs",children:"Paragraphs"}),`
`,n.jsx(i,{fontFamily:'"Noto Sans TC", sans-serif',fontSizes:[24,20,16,14,12],fontWeight:400,sampleText:"段落文字展示 Paragraph text example",labels:["notoP24","notoP20","notoP16","notoP14","notoP12"]}),`
`,n.jsx(e.h3,{id:"paragraphs-with-decoration",children:"Paragraphs with Decoration"}),`
`,n.jsx(e.p,{children:"Text styles with underline decoration:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"notoP16D"}),": 16px paragraph with underline"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"notoP14D"}),": 14px paragraph with underline"]}),`
`]}),`
`,n.jsx(e.h2,{id:"poppins-text-styles",children:"Poppins Text Styles"}),`
`,n.jsx(e.h3,{id:"headings-1",children:"Headings"}),`
`,n.jsx(i,{fontFamily:'Poppins, "Noto Sans TC", sans-serif',fontSizes:[24,20,16,14,12],fontWeight:700,sampleText:"English Heading Text",labels:["poppinsH24","poppinsH20","poppinsH16","poppinsH14","poppinsH12"]}),`
`,n.jsx(e.h3,{id:"paragraphs-1",children:"Paragraphs"}),`
`,n.jsx(i,{fontFamily:'Poppins, "Noto Sans TC", sans-serif',fontSizes:[16,14,12],fontWeight:400,sampleText:"English paragraph text for body content",labels:["poppinsP16","poppinsP14","poppinsP12"]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"in-chakra-ui-components",children:"In Chakra UI Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Text, Heading } from "@chakra-ui/react"

// Using Noto Sans TC styles
<Heading textStyle="notoH24">大標題 Main Heading</Heading>
<Text textStyle="notoP16">這是一段中文內容的範例文字。</Text>

// Using Poppins styles
<Heading textStyle="poppinsH20">English Heading</Heading>
<Text textStyle="poppinsP14">This is an example of English body text.</Text>

// Using decorated styles
<Text textStyle="notoP16D">帶有下劃線的重要文字</Text>
`})}),`
`,n.jsx(e.h2,{id:"typography-guidelines",children:"Typography Guidelines"}),`
`,n.jsx(e.h3,{id:"language-specific-usage",children:"Language-Specific Usage"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chinese Content"}),": Use ",n.jsx(e.code,{children:"noto*"})," text styles for optimal CJK character rendering"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"English Content"}),": Use ",n.jsx(e.code,{children:"poppins*"})," text styles for better Latin character aesthetics"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mixed Content"}),": Choose based on the primary language of the content"]}),`
`]}),`
`,n.jsx(e.h3,{id:"hierarchy-best-practices",children:"Hierarchy Best Practices"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Level"}),n.jsx("th",{children:"Chinese"}),n.jsx("th",{children:"English"}),n.jsx("th",{children:"Usage"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"H1"})}),n.jsx("td",{children:"notoH40 or notoH32"}),n.jsx("td",{children:"poppinsH24"}),n.jsx("td",{children:"Page titles, main headings"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"H2"})}),n.jsx("td",{children:"notoH24"}),n.jsx("td",{children:"poppinsH20"}),n.jsx("td",{children:"Section headings"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"H3"})}),n.jsx("td",{children:"notoH20"}),n.jsx("td",{children:"poppinsH16"}),n.jsx("td",{children:"Subsection headings"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"H4"})}),n.jsx("td",{children:"notoH16"}),n.jsx("td",{children:"poppinsH14"}),n.jsx("td",{children:"Card titles, labels"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Body"})}),n.jsx("td",{children:"notoP16"}),n.jsx("td",{children:"poppinsP16"}),n.jsx("td",{children:"Main content"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Small"})}),n.jsx("td",{children:"notoP14 or notoP12"}),n.jsx("td",{children:"poppinsP14 or poppinsP12"}),n.jsx("td",{children:"Captions, helper text"})]})]})]}),`
`,n.jsx(e.h3,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Maintain a clear hierarchy with appropriate heading levels"}),`
`,n.jsx(e.li,{children:"Ensure sufficient contrast between text and background colors"}),`
`,n.jsx(e.li,{children:"Use larger text sizes (16px+) for body content"}),`
`,n.jsx(e.li,{children:"Reserve 12px text for non-critical information only"}),`
`]}),`
`,n.jsx(e.h3,{id:"line-height-guidelines",children:"Line Height Guidelines"}),`
`,n.jsx(e.p,{children:"All text styles include appropriate line heights for optimal readability:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Headings: 1.2x font size"}),`
`,n.jsx(e.li,{children:"Body text: 1.5x font size"}),`
`]})]})}function m(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{m as default};
