"use client"

import React from "react"

import { createSlotRecipeContext, HTMLChakraProps, Icon, RecipeVariantProps } from "@chakra-ui/react"
import { MdClose } from "react-icons/md"
import { textFieldRecipe } from "./textField.recipe"

const { withProvider, withContext } = createSlotRecipeContext({
  recipe: textFieldRecipe,
})

interface TextFieldRootProps extends HTMLChakraProps<"label", RecipeVariantProps<typeof textFieldRecipe>> {}
const TextFieldRoot = withProvider<HTMLLabelElement, TextFieldRootProps>("label", "root")

interface TextFieldInputProps extends HTMLChakraProps<"input", RecipeVariantProps<typeof textFieldRecipe>> {}
const TextFieldInput = withContext<HTMLInputElement, TextFieldInputProps>("input", "input")

interface TextFieldLabelProps extends HTMLChakraProps<"span", RecipeVariantProps<typeof textFieldRecipe>> {}
const TextFieldLabel = withContext<HTMLSpanElement, TextFieldLabelProps>("span", "label")

interface TextFieldClearProps extends HTMLChakraProps<"button", RecipeVariantProps<typeof textFieldRecipe>> {}
const TextFieldClear = withContext<HTMLButtonElement, TextFieldClearProps>("button", "clear")

type TextFieldProps = {
  label: string
  onClear?: () => void
} & TextFieldInputProps

export const TextField = (props: TextFieldProps) => {
  const { label, className, placeholder, required, onClear, ...restProps } = props
  return (
    <TextFieldRoot>
      <TextFieldInput required={required} className={(className || "") + " peer"} placeholder={placeholder || ""} {...restProps} />
      <TextFieldLabel {...(required ? { "data-required": true } : {})}>{label}</TextFieldLabel>
      {onClear && (
        <TextFieldClear onClick={onClear}>
          <Icon fontSize="24px">
            <MdClose />
          </Icon>
        </TextFieldClear>
      )}
    </TextFieldRoot>
  )
}
