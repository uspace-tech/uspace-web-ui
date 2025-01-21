"use client"

import React from "react"
import { chakra, Icon, Spinner } from "@chakra-ui/react"
import { buttonRecipe } from "./button.recipe"

type ButtonProps = {
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
} & React.ComponentProps<typeof CustomButton>

const CustomButton = chakra("button", buttonRecipe)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, startIcon, endIcon, loading, ...restProps } = props
  return (
    <CustomButton ref={ref} {...restProps} disabled={Boolean(restProps.disabled || loading)}>
      {startIcon && <Icon fontSize="24px">{startIcon}</Icon>}
      {loading ? <Spinner size="inherit" color="inherit" /> : children}
      {endIcon && <Icon fontSize="24px">{endIcon}</Icon>}
    </CustomButton>
  )
})
