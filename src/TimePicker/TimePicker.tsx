"use client"

import { Box, Stack, Text } from "@chakra-ui/react"
import React from "react"

const hourView = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
]

const minuteView = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]

type TimePickerProps = {
  value: Date
  onChange: (date: Date) => void
  minuteStep?: 5 | 10 | 15 | 30
}

export const TimePicker = ({ value = new Date(), onChange, minuteStep = 5 }: TimePickerProps) => {
  const chosenHour = value.getHours().toString().padStart(2, "0")
  const chosenMinute = value.getMinutes().toString().padStart(2, "0")
  // minuteView 只有整數，但怕使用者忘記點分，故先不處理

  const filteredMinuteView = minuteStep ? minuteView.filter((minute) => parseInt(minute) % minuteStep === 0) : minuteView

  React.useEffect(() => {
    // 點選後，該element要至於中間
    const timeout = setTimeout(() => {
      const chosenHourElement = document.querySelector(`[data-hour="${chosenHour}"]`)
      if (chosenHourElement) {
        chosenHourElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      const chosenMinuteElement = document.querySelector(`[data-minute="${chosenMinute}"]`)
      if (chosenMinuteElement) {
        chosenMinuteElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 0)
    return () => clearTimeout(timeout)
  }, [chosenHour, chosenMinute])

  const handleHourClick = (hour: string) => {
    const newDate = new Date(value)
    newDate.setHours(parseInt(hour))
    onChange(newDate)
  }

  const handleMinuteClick = (minute: string) => {
    const newDate = new Date(value)
    newDate.setMinutes(parseInt(minute))
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
            data-hour={hour}
          >
            <Text>{hour}</Text>
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
            data-minute={minute}
          >
            <Text>{minute}</Text>
          </Stack>
        ))}
        <Box h="calc((100% / 2) - 24px)" />
      </Box>
    </Stack>
  )
}
