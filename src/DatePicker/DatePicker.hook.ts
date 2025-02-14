import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  Locale,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"
import { zhTW, enUS } from "date-fns/locale"
import { useState } from "react"

const now = new Date()
const firstDayOfWeek = startOfWeek(now)
const endDayOfWeek = endOfWeek(now)
const daysOfWeek = eachDayOfInterval({ start: firstDayOfWeek, end: endDayOfWeek }) // static

enum SupportedLocale {
  zhTW = "zhTW",
  enUS = "enUS",
}

type UseDatePickerProps = {
  locale: string
}

export type WeekDayUnit = {
  weekday: number
  weekdayText: string
}

export type DateUnit = {
  day: number
  weekday: number
  date: Date
  isToday: boolean
}

export const useDatePicker = ({ locale }: UseDatePickerProps) => {
  const _locale = locale === SupportedLocale.zhTW ? zhTW : enUS
  const weekDayView = generateWeekDayView(daysOfWeek, _locale)

  // 基準視角 預設當天的年月日
  const [aspectDate, setAspectDate] = useState(now)
  const totalDaysOfMonth = endOfMonth(aspectDate).getDate()
  const dayView = generateDayView(aspectDate, totalDaysOfMonth)

  const handleChangeMonth = (type: "prev" | "next") => {
    setAspectDate(type === "prev" ? subMonths(aspectDate, 1) : addMonths(aspectDate, 1))
  }

  return {
    locale: _locale,
    aspectDate,
    weekDayView,
    dayView,
    handleChangeMonth,
    setAspectDate,
  }
}

const generateWeekDayView = (daysOfWeek: Date[], locale: Locale): Array<WeekDayUnit> => {
  return daysOfWeek.map((day) => ({
    weekday: day.getDay(),
    weekdayText: format(day, "EEEEE", { locale }),
  }))
}

const generateDayView = (aspectDate: Date, totalDays: number): Array<Array<DateUnit | null>> => {
  // 每一個array最多7個，且要match [Sun, Mon, Tue, Wed, Thu, Fri, Sat]
  const offsetDays = startOfMonth(aspectDate).getDay()
  const totalUnit = totalDays + offsetDays
  return Array.from({ length: Math.ceil(totalUnit / 7) }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => {
      const index = weekIndex * 7 + dayIndex
      const isUnit = index < totalUnit && index - offsetDays >= 0
      const date = new Date(aspectDate.getFullYear(), aspectDate.getMonth(), index + 1 - offsetDays)

      return isUnit
        ? {
            day: index + 1 - offsetDays,
            weekday: dayIndex,
            date: date,
            isToday: isSameDay(now, date),
          }
        : null
    })
  )
}
