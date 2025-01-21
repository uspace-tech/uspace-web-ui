import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@chakra-ui/react"
import { IoNavigateCircle } from "react-icons/io5"

import { Button } from "./Button"

const meta = {
  title: "UPSACE/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "就是一顆按鈕，繼承來自 `chakra('button')`，button 可以用的屬性都可以使用",
      },
    },
  },
  args: {
    children: "按鈕 Button 1234",
    width: "350px",
    level: "primary",
    disabled: false,
    loading: false,
  },
  argTypes: {
    children: { control: "text", description: "按鈕文字" },
    width: { control: "text", description: "預設會填滿整個容器，但可透過 `width` | `flex` 來調整寬度" },
    level: { control: "select", description: "按鈕等級", options: ["primary", "secondary", "negative", "dangerous"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    startIcon: { control: false, description: "按鈕左側的Icon" },
    endIcon: { control: false, description: "按鈕右側的Icon" },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithIcon: Story = {
  args: {},
  render: (args) => (
    <Stack>
      <Button {...args} startIcon={<IoNavigateCircle />}>
        Primary
      </Button>
      <Button {...args} endIcon={<IoNavigateCircle />}>
        Primary
      </Button>
    </Stack>
  ),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Level: Story = {
  args: {},
  render: (args) => (
    <Stack direction="row">
      <Stack>
        <Button {...args} level="primary">
          Primary
        </Button>
        <Button {...args} level="secondary">
          Secondary
        </Button>
        <Button {...args} level="negative">
          Negative
        </Button>
        <Button {...args} level="dangerous">
          Dangerous
        </Button>
      </Stack>
      <Stack>
        <Button {...args} level="primary" disabled>
          Primary (disabled)
        </Button>
        <Button {...args} level="secondary" disabled>
          Secondary (disabled)
        </Button>
        <Button {...args} level="negative" disabled>
          Negative (disabled)
        </Button>
      </Stack>
    </Stack>
  ),
}
