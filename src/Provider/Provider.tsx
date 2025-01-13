"use client"
import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../style"
import { ColorModeProvider, type ColorModeProviderProps } from "./ColorModeProvider"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
