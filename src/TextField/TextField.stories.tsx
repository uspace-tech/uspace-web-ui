import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@chakra-ui/react"

import { TextField } from "./TextField"
import { expect, userEvent } from "@storybook/test"

const meta = {
  title: "UPSACE/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "一個輸入框框，靈感來自 MUI；主要預設皆為 `input` 的 props",
      },
    },
  },
  args: {
    label: "Phone",
    placeholder: "0912345678",
  },
  argTypes: {
    label: { control: "text", description: "就是標籤" },
    placeholder: { control: "text", description: "輸入框建議文字，通常是指資料格式" },
    required: { control: "boolean", description: "是否為必填" },
    onClear: { control: false, description: "當清除按鈕被點擊的 callback，有傳入時才會顯示 icon" },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Required: Story = {
  args: {
    required: true,
  },

  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector(".textField__input")
    expect(input).toHaveAttribute("required")
    // check the asterisks
    const label = canvasElement.querySelector(".textField__label")
    const computedStyle = window.getComputedStyle(label!, "::after")
    expect(computedStyle.content).toBe('"*"')
  },
}

export const WithClear: Story = {
  args: {
    onClear: () => {},
  },

  render: (args) => {
    const [value, setValue] = useState("")

    const handleClear = () => {
      setValue("")
    }

    return (
      <Stack>
        <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} onClear={handleClear} />
      </Stack>
    )
  },

  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input")
    const clearButton = canvasElement.querySelector("button") // Assuming there's a button for clearing

    // Simulate typing into the input field
    await userEvent.type(input!, "0968129756", { delay: 200 })
    expect(input!.value).toBe("0968129756")

    // Clear Button should be visible
    expect(clearButton).toBeVisible()

    // Simulate clicking the clear button
    await userEvent.click(clearButton!, { delay: 200 })
    expect(input!.value).toBe("")
  },
}
