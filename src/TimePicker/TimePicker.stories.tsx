import { Meta, StoryObj } from "@storybook/react"
import { TimePicker } from "./TimePicker"

const meta: Meta<typeof TimePicker> = {
  title: "UPSACE/TimePicker",
  component: TimePicker,
  argTypes: {
    minuteStep: { control: "number", description: "分鐘間隔，5 | 10 | 15 | 30" },
  },
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  args: {},
}
