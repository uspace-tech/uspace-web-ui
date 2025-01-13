"use client"
import React from "react"
import { chakra, Spinner } from "@chakra-ui/react"
import { buttonRecipe } from "./button.recipe"

type ButtonProps = {
  loading?: boolean
} & React.ComponentProps<typeof CustomButton>

const CustomButton = chakra("button", buttonRecipe)

export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props
  return (
    <CustomButton {...restProps} disabled={Boolean(restProps.disabled || restProps.loading)}>
      {restProps.loading ? <Spinner size="inherit" color="inherit" /> : children}
    </CustomButton>
  )
}
