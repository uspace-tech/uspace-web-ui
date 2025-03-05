import { Meta, StoryObj } from "@storybook/react"
import { TimePicker } from "./TimePicker"
import React from "react"

const meta: Meta<typeof TimePicker> = {
  title: "UPSACE/TimePicker",
  component: TimePicker,
  argTypes: {
    value: { control: false, description: "選取的時間" },
    minuteStep: { control: "number", description: "分鐘間隔，5 | 10 | 15 | 30" },
    availableGroup: { control: "object", description: "可選擇的時間組合，若特定hour未傳入，則會顯示該小時所有分鐘" },
  },
} satisfies Meta<typeof TimePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    availableGroup: [{ hour: 14, minute: [0, 5, 45, 55] }],
  },
  render: (args) => {
    const [value, setValue] = React.useState(new Date())
    return <TimePicker {...args} value={value} onChange={setValue} />
  },
}
