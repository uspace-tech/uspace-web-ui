import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as d}from"./index-npCMkmsx.js";import{ae as l,af as t,ag as n}from"./index-yHnOI8MJ.js";import"./index-CZMpeKRu.js";import"./iframe-fKsEvckN.js";import"../sb-preview/runtime.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function i(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design System/Colors"}),`
`,e.jsx(r.h1,{id:"color-system",children:"Color System"}),`
`,e.jsx(r.p,{children:"Our color system provides a consistent palette with full dark mode support for building UI components across the application."}),`
`,e.jsx(r.h2,{id:"brand-colors",children:"Brand Colors"}),`
`,e.jsx(t,{children:e.jsx(n,{title:"Primary",subtitle:"primary",colors:{Primary:"#28292B"}})}),`
`,e.jsx(r.h2,{id:"ui-colors",children:"UI Colors"}),`
`,e.jsxs(t,{children:[e.jsx(n,{title:"Blue",subtitle:"blue",colors:{Blue:"#0067D8"}}),e.jsx(n,{title:"Green",subtitle:"green",colors:{Green:"#15DD73"}}),e.jsx(n,{title:"Yellow",subtitle:"yellow",colors:{Yellow:"#E6A807"}}),e.jsx(n,{title:"Red",subtitle:"red",colors:{Red:"#F45656"}}),e.jsx(n,{title:"White",subtitle:"white",colors:{White:"#FFFFFF"}})]}),`
`,e.jsx(r.h2,{id:"text-colors-semantic-tokens",children:"Text Colors (Semantic Tokens)"}),`
`,e.jsxs(t,{children:[e.jsx(n,{title:"Text Primary",subtitle:"text.primary",colors:{Light:"#333333",Dark:"#FFFFFF"}}),e.jsx(n,{title:"Text Secondary",subtitle:"text.secondary",colors:{Light:"#748598",Dark:"#CCCCCC"}})]}),`
`,e.jsx(r.h2,{id:"state-colors",children:"State Colors"}),`
`,e.jsx(t,{children:e.jsx(n,{title:"Disabled",subtitle:"disabled, disabled.grey",colors:{Disabled:"#BDC3D0"}})}),`
`,e.jsx(r.h2,{id:"background--layout-semantic-tokens",children:"Background & Layout (Semantic Tokens)"}),`
`,e.jsxs(t,{children:[e.jsx(n,{title:"Material Background",subtitle:"materialBg",colors:{Light:"#F3F4F9",Dark:"#484848"}}),e.jsx(n,{title:"Divider",subtitle:"divider",colors:{Divider:"rgba(0, 0, 0, 0.1)"}})]}),`
`,e.jsx(r.h2,{id:"color-token-architecture",children:"Color Token Architecture"}),`
`,e.jsx(r.p,{children:"Our color system uses a two-tier approach:"}),`
`,e.jsx(r.h3,{id:"raw-color-tokens",children:"Raw Color Tokens"}),`
`,e.jsxs(r.p,{children:["Base color values prefixed with ",e.jsx(r.code,{children:"_"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"_text._primary"}),", ",e.jsx(r.code,{children:"_text._secondary"}),", ",e.jsx(r.code,{children:"_text._secondaryDark"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"_materialBg"}),", ",e.jsx(r.code,{children:"_materialBgDark"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"_disabled._DEFAULT"}),", ",e.jsx(r.code,{children:"_disabled._grey"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"_primary"}),", ",e.jsx(r.code,{children:"_blue"}),", ",e.jsx(r.code,{children:"_green"}),", ",e.jsx(r.code,{children:"_yellow"}),", ",e.jsx(r.code,{children:"_red"}),", ",e.jsx(r.code,{children:"_white"})]}),`
`]}),`
`,e.jsx(r.h3,{id:"semantic-tokens",children:"Semantic Tokens"}),`
`,e.jsx(r.p,{children:"Context-aware tokens that automatically switch between light and dark modes:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"text.primary"}),": ",e.jsx(r.code,{children:"#333333"})," (light) → ",e.jsx(r.code,{children:"#FFFFFF"})," (dark)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"text.secondary"}),": ",e.jsx(r.code,{children:"#748598"})," (light) → ",e.jsx(r.code,{children:"#CCCCCC"})," (dark)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"materialBg"}),": ",e.jsx(r.code,{children:"#F3F4F9"})," (light) → ",e.jsx(r.code,{children:"#484848"})," (dark)"]}),`
`]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"in-chakra-ui-components",children:"In Chakra UI Components"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Box, Text } from "@chakra-ui/react"

// Using semantic color tokens (recommended)
<Box bg="materialBg" borderColor="divider">
  <Text color="text.primary">Main content</Text>
  <Text color="text.secondary">Supporting information</Text>
</Box>

// Using UI colors
<Box bg="blue" color="white">
  Blue background with white text
</Box>

// Using state colors
<Button disabled bg="disabled.grey">
  Disabled Button
</Button>
`})}),`
`,e.jsx(r.h3,{id:"dark-mode-support",children:"Dark Mode Support"}),`
`,e.jsx(r.p,{children:"All semantic tokens automatically adapt to the current color mode:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// These will automatically switch colors in dark mode
<Text color="text.primary">Always readable main text</Text>
<Text color="text.secondary">Always readable secondary text</Text>
<Box bg="materialBg">Adaptive background</Box>
`})}),`
`,e.jsx(r.h3,{id:"color-mode-testing",children:"Color Mode Testing"}),`
`,e.jsx(r.p,{children:"Use the color mode toggle in Storybook to test how components adapt between light and dark themes."}),`
`,e.jsx(r.h3,{id:"color-accessibility",children:"Color Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Text Colors"}),": Semantic tokens ensure sufficient contrast ratios in both light and dark modes"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Primary Text"}),": Always provides excellent readability against backgrounds"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Secondary Text"}),": Maintains proper contrast while being visually secondary"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"UI Colors"}),": Use sparingly for interactive elements and status indicators"]}),`
`]}),`
`,e.jsx(r.h3,{id:"semantic-usage",children:"Semantic Usage"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Light Mode"}),e.jsx("th",{children:"Dark Mode"}),e.jsx("th",{children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"text.primary"})}),e.jsx("td",{children:"#333333"}),e.jsx("td",{children:"#FFFFFF"}),e.jsx("td",{children:"Main content text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"text.secondary"})}),e.jsx("td",{children:"#748598"}),e.jsx("td",{children:"#CCCCCC"}),e.jsx("td",{children:"Supporting text, labels"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"materialBg"})}),e.jsx("td",{children:"#F3F4F9"}),e.jsx("td",{children:"#484848"}),e.jsx("td",{children:"Card backgrounds, input fields"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"primary"})}),e.jsx("td",{children:"#28292B"}),e.jsx("td",{children:"#28292B"}),e.jsx("td",{children:"Brand color, primary actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"blue"})}),e.jsx("td",{children:"#0067D8"}),e.jsx("td",{children:"#0067D8"}),e.jsx("td",{children:"Links, information states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"green"})}),e.jsx("td",{children:"#15DD73"}),e.jsx("td",{children:"#15DD73"}),e.jsx("td",{children:"Success states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"yellow"})}),e.jsx("td",{children:"#E6A807"}),e.jsx("td",{children:"#E6A807"}),e.jsx("td",{children:"Warning states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"red"})}),e.jsx("td",{children:"#F45656"}),e.jsx("td",{children:"#F45656"}),e.jsx("td",{children:"Error states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"disabled"})}),e.jsx("td",{children:"#BDC3D0"}),e.jsx("td",{children:"#BDC3D0"}),e.jsx("td",{children:"Inactive elements"})]})]})]}),`
`,e.jsx(r.h2,{id:"migration-notes",children:"Migration Notes"}),`
`,e.jsx(r.p,{children:"If you were using the old color tokens, update your code:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"text"})," → ",e.jsx(r.code,{children:"text.primary"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"text.primary"})," → ",e.jsx(r.code,{children:"text.primary"})," (no change needed)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"text.secondary"})," → ",e.jsx(r.code,{children:"text.secondary"})," (no change needed)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"disabled"})," → ",e.jsx(r.code,{children:"disabled.grey"})]}),`
`]})]})}function y(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{y as default};
