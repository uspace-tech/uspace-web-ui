import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-npCMkmsx.js";import{ae as s}from"./index-yHnOI8MJ.js";import"./index-CZMpeKRu.js";import"./iframe-fKsEvckN.js";import"../sb-preview/runtime.js";import"./index-2nx3i45w.js";import"./index-D-TIQtLp.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Design System/Layer Styles"}),`
`,n.jsx(e.h1,{id:"layer-styles",children:"Layer Styles"}),`
`,n.jsx(e.p,{children:"Predefined layer styles for common UI patterns that can be reused across components."}),`
`,n.jsx(e.h2,{id:"available-layer-styles",children:"Available Layer Styles"}),`
`,n.jsx(e.h3,{id:"floatbottom",children:"floatBottom"}),`
`,n.jsx(e.p,{children:"Fixed positioning at the bottom of the viewport. Useful for mobile-style bottom sheets or persistent bottom bars."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const floatBottom = {
  position: "fixed",
  bottom: 0,
  width: "full"
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Box layerStyle="floatBottom">
  Bottom-fixed content
</Box>
`})}),`
`,n.jsx(e.h3,{id:"floatbottomactions",children:"floatBottomActions"}),`
`,n.jsxs(e.p,{children:["Extended version of ",n.jsx(e.code,{children:"floatBottom"})," with padding, border, and flex layout. Perfect for action bars with buttons."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const floatBottomActions = {
  position: "fixed",
  bottom: 0,
  width: "full",
  px: 4,           // 16px horizontal padding
  pt: 4,           // 16px top padding
  pb: 8,           // 32px bottom padding (extra space for mobile safe areas)
  gap: 2,          // 8px gap between items
  display: "flex",
  flexDir: "row",
  borderTop: "1px solid {colors.divider}"
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Box layerStyle="floatBottomActions">
  <Button flex={1}>Cancel</Button>
  <Button flex={1} colorScheme="blue">Confirm</Button>
</Box>
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"bottom-navigation-bar",children:"Bottom Navigation Bar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Box, Button } from "@chakra-ui/react"

function BottomNav() {
  return (
    <Box layerStyle="floatBottom" bg="white" borderTop="1px solid" borderColor="divider">
      <HStack p={2} justify="space-around">
        <IconButton icon={<HomeIcon />} />
        <IconButton icon={<SearchIcon />} />
        <IconButton icon={<ProfileIcon />} />
      </HStack>
    </Box>
  )
}
`})}),`
`,n.jsx(e.h3,{id:"action-button-bar",children:"Action Button Bar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Box, Button } from "@chakra-ui/react"

function ActionBar() {
  return (
    <Box layerStyle="floatBottomActions" bg="white">
      <Button variant="outline" flex={1}>
        取消
      </Button>
      <Button colorPalette="blue" flex={1}>
        確認
      </Button>
    </Box>
  )
}
`})}),`
`,n.jsx(e.h3,{id:"mobile-style-bottom-sheet",children:"Mobile-Style Bottom Sheet"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Box, VStack } from "@chakra-ui/react"

function BottomSheet({ isOpen, children }) {
  return (
    <Box 
      layerStyle="floatBottom" 
      bg="white"
      roundedTop="xl"
      maxH="80vh"
      transform={isOpen ? "translateY(0)" : "translateY(100%)"}
      transition="transform 0.3s"
    >
      <VStack p={6}>
        {children}
      </VStack>
    </Box>
  )
}
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"mobile-considerations",children:"Mobile Considerations"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Safe Area Padding"}),": The ",n.jsx(e.code,{children:"floatBottomActions"})," style includes extra bottom padding (32px) to account for mobile safe areas"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Touch Targets"}),": Ensure buttons and interactive elements are at least 44px in height for mobile usability"]}),`
`]}),`
`,n.jsx(e.h3,{id:"z-index-management",children:"Z-Index Management"}),`
`,n.jsx(e.p,{children:"When using fixed positioning layers:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consider z-index conflicts with other fixed elements"}),`
`,n.jsx(e.li,{children:"Use Chakra's z-index tokens for consistency"}),`
`,n.jsx(e.li,{children:"Test with modals and other overlays"}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-design",children:"Responsive Design"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Responsive bottom bar that becomes a sidebar on desktop
<Box 
  layerStyle={["floatBottom", "floatBottom", "none"]}
  position={[null, null, "sticky"]}
  width={[null, null, "250px"]}
>
  Navigation content
</Box>
`})}),`
`,n.jsx(e.h3,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure fixed bottom elements don't cover important content"}),`
`,n.jsx(e.li,{children:"Provide adequate spacing above fixed bottom elements"}),`
`,n.jsx(e.li,{children:"Consider keyboard navigation order with fixed positioning"}),`
`]})]})}function f(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
