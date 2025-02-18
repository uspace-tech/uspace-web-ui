import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { DatePicker } from "./DatePicker"

const meta = {
  title: "UPSACE/DatePicker",
  component: DatePicker,
  argTypes: {
    value: { control: "date", description: "Controlled 選擇的日期" },
    minDate: { control: "date", description: "最小可選日期，內部比對會轉換當日最早零分零秒，但只比對年月日" },
    maxDate: { control: "date", description: "最大可選日期，內部比對會轉換當日最後一分一秒，但只比對年月日" },
    disabledDates: { control: "object", description: "不可選的日期，只比對年月日" },
    locale: { control: "select", description: "語言", options: ["enUS", "zhTW"] },
    onDateChange: { control: false, description: "日期改變時的 callback" },
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: new Date(),
    minDate: new Date(2025, 1, 12),
    maxDate: new Date(2025, 1, 25),
    disabledDates: [new Date(2025, 1, 17), new Date(2025, 1, 23)],
    locale: "zhTW",
  },
}

// export const Default: Story = {
//   args: {},
//   render: (args) => {
//     const [value, setValue] = React.useState(new Date())
//     const minDate = new Date(2025, 1, 12)
//     const maxDate = new Date(2025, 1, 25)
//     const disabledDates = [new Date(2025, 1, 17), new Date(2025, 1, 23)]
//     const onDateChange = (date: Date) => {
//       setValue(date)
//     }
//     return (
//       <DatePicker {...args} value={value} minDate={minDate} maxDate={maxDate} disabledDates={disabledDates} onDateChange={onDateChange} />
//     )
//   },
// }
