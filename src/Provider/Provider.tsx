"use client"
import React from "react"
import { ChakraProvider, createSystem, defaultConfig, mergeConfigs, type SystemConfig } from "@chakra-ui/react"
import { system as defaultSystem, config as defaultThemeConfig } from "../style"
import { ColorModeProvider, type ColorModeProviderProps } from "./ColorModeProvider"

export interface ProviderProps extends ColorModeProviderProps {
  /**
   * Custom Chakra UI system config to merge with the default config
   */
  customConfig?: SystemConfig
}

export function Provider({ customConfig, ...colorModeProps }: ProviderProps) {
  const system = React.useMemo(() => {
    if (!customConfig) {
      return defaultSystem
    }

    // Merge the default config with the custom config
    const mergedConfig = mergeConfigs(defaultThemeConfig, customConfig)

    // Create a new system with the merged config
    return createSystem(defaultConfig, mergedConfig)
  }, [customConfig])

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...colorModeProps} />
    </ChakraProvider>
  )
}
