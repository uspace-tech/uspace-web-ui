"use client"

import React, { forwardRef } from "react"

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
  rootProps?: TextFieldRootProps
} & TextFieldInputProps

const TextField = forwardRef((props: TextFieldProps, ref: React.Ref<HTMLInputElement>) => {
  const { label, className, placeholder, required, onClear, rootProps, ...restProps } = props
  return (
    <TextFieldRoot {...rootProps}>
      <TextFieldInput
        required={required}
        className={(className || "") + " peer"}
        placeholder={placeholder || " "}
        {...restProps}
        ref={ref}
      />
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
})
TextField.displayName = "TextField"

export { TextField }
