"use client"

import { Box, Stack, Text } from "@chakra-ui/react"
import React, { useMemo } from "react"

type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23
type Minute = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55

const hourView: Hour[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
const minuteView: Minute[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

type TimePickerProps = {
  value: Date
  onChange: (date: Date) => void
  minuteStep?: 5 | 10 | 15 | 30
  availableGroup?: Array<{
    hour: Hour
    minute: Minute[]
  }>
}

/**
 * 留意如果傳入的 value Date 的分鐘不是整數，不會顯示任何分鐘（即沒有預設選項）
 */
export const TimePicker = ({ value = new Date(), onChange, minuteStep = 5, availableGroup }: TimePickerProps) => {
  const chosenHour = value.getHours()
  const chosenMinute = value.getMinutes()
  // minuteView 只有整數，但怕使用者忘記點分，故先不處理

  const steppedMinuteView = useMemo(
    () => (minuteStep ? minuteView.filter((minute) => minute % minuteStep === 0) : minuteView),
    [minuteStep]
  )
  const filteredMinuteView = useMemo(
    () =>
      steppedMinuteView.filter((minute) => {
        const group = availableGroup?.find((group) => group.hour === chosenHour)
        if (!group) return true
        return group.minute.includes(minute)
      }),
    [steppedMinuteView, availableGroup, chosenHour]
  )

  React.useEffect(() => {
    // 點選後，該element要至於中間
    const timeout = setTimeout(() => {
      const chosenHourElement = document.querySelector(`[data-hour="${chosenHour.toString().padStart(2, "0")}"]`)
      if (chosenHourElement) {
        chosenHourElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      const chosenMinuteElement = document.querySelector(`[data-minute="${chosenMinute.toString().padStart(2, "0")}"]`)
      if (chosenMinuteElement) {
        chosenMinuteElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 0)
    return () => clearTimeout(timeout)
  }, [chosenHour, chosenMinute])

  const handleHourClick = (hour: number) => {
    const newDate = new Date(value)
    newDate.setHours(hour)
    onChange(newDate)
  }

  const handleMinuteClick = (minute: number) => {
    const newDate = new Date(value)
    newDate.setMinutes(minute)
    onChange(newDate)
  }

  return (
    <Stack direction="row" gap="2" h="180px">
      <Box w="100%" maxW="175px" h="100%" gap="2" overflow="scroll">
        <Box h="calc((100% / 2) - 24px)" />
        {hourView.map((hour) => (
          <Stack
            key={hour}
            h="40px"
            alignItems="center"
            justifyContent="center"
            bg={hour === chosenHour ? "materialBg" : "transparent"}
            borderRadius="8px"
            onClick={() => handleHourClick(hour)}
            my="1"
            data-hour={hour.toString().padStart(2, "0")}
          >
            <Text>{hour.toString().padStart(2, "0")}</Text>
          </Stack>
        ))}
        <Box h="calc((100% / 2) - 24px)" />
      </Box>
      <Box w="100%" maxW="175px" h="100%" gap="2" overflow="scroll">
        <Box h="calc((100% / 2) - 24px)" />
        {filteredMinuteView.map((minute) => (
          <Stack
            key={minute}
            h="40px"
            alignItems="center"
            justifyContent="center"
            bg={minute === chosenMinute ? "materialBg" : "transparent"}
            borderRadius="8px"
            onClick={() => handleMinuteClick(minute)}
            my="1"
            data-minute={minute.toString().padStart(2, "0")}
          >
            <Text>{minute.toString().padStart(2, "0")}</Text>
          </Stack>
        ))}
        <Box h="calc((100% / 2) - 24px)" />
      </Box>
    </Stack>
  )
}
