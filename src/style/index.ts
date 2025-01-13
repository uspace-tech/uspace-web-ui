import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import textStyles from "./textStyles"
import { colorTokens, semanticTokens } from "./colors"
import layerStyles from "./layers"

const config = defineConfig({
  theme: {
    textStyles: textStyles,
    tokens: colorTokens,
    semanticTokens: semanticTokens,
    layerStyles: layerStyles,
  },
})

export const system = createSystem(defaultConfig, config)
