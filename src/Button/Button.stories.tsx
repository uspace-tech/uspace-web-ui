import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Button } from "./Button"
import { Stack } from "@chakra-ui/react"

const meta = {
  title: "UPSACE/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "按鈕 Button 1234",
    width: "350px",
    level: "primary",
    onClick: fn(),
  },
  argTypes: {
    width: { control: "text" },
    level: { control: "select", options: ["primary", "secondary", "negative", "dangerous"] },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
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
