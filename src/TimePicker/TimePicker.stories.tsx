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
    availableGroup: [
      { hour: 0, minute: [] },
      { hour: 1, minute: [] },
      { hour: 2, minute: [] },
      { hour: 3, minute: [] },
      { hour: 4, minute: [] },
      { hour: 5, minute: [] },
      { hour: 6, minute: [] },
      { hour: 7, minute: [] },
      { hour: 8, minute: [] },
      { hour: 18, minute: [] },
      { hour: 19, minute: [] },
      { hour: 20, minute: [] },
      { hour: 21, minute: [] },
      { hour: 22, minute: [] },
      { hour: 23, minute: [] },
    ],
  },
  render: (args) => {
    const [value, setValue] = React.useState(new Date())
    return <TimePicker {...args} value={value} onChange={setValue} />
  },
}

export const MinMaxHour: Story = {
  args: {
    minHour: 9,
    maxHour: 17,
  },
  render: (args) => {
    const [value, setValue] = React.useState(new Date())
    return <TimePicker {...args} value={value} onChange={setValue} />
  },
}
