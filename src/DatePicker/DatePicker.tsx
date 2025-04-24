"use client"

import React, { createContext, Fragment, useContext } from "react"
import { Box, Flex, Stack, Icon, Text } from "@chakra-ui/react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { endOfDay, endOfMonth, format, isAfter, isBefore, isSameDay, startOfDay, startOfMonth } from "date-fns"
import { type DateUnit as DateUnitType, useDatePicker } from "./DatePicker.hook"

const Indicator = ({ color }: { color?: string }) => (
  <Box w="8px" border="1px solid" borderColor={color} borderRadius="4px" pos="relative" bottom="1px" left="1px" />
)

type DatePickerProps = {
  locale?: string
  value: Date
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
  onDateChange?: (date: Date) => void
}

const DatePickerContext = createContext<DatePickerProps | null>(null)

const DatePickerProvider = ({ children, ...props }: React.PropsWithChildren<DatePickerProps>) => {
  return <DatePickerContext.Provider value={props}>{children}</DatePickerContext.Provider>
}

/**
 * 一個日期選擇器
 */
export const DatePicker = (props: DatePickerProps) => {
  const { locale, aspectDate, weekDayView, dayView, handleChangeMonth } = useDatePicker({ locale: props.locale || "enUS" })
  const { minDate, maxDate } = props
  
  const monthYear = format(aspectDate, "MMM,yyyy", { locale })

  const isAbleToPrevMonth = minDate ? isBefore(minDate, startOfMonth(aspectDate)) : true;
  const handleClickNavPrevMonth = () => {
    if(!isAbleToPrevMonth) return;
    handleChangeMonth("prev")
  }

  const isAbleToNextMonth = maxDate ? isAfter(maxDate, endOfMonth(aspectDate)) : true;
  const handleClickNavNextMonth = () => {
    if(!isAbleToNextMonth) return;
    handleChangeMonth("next")
  }

  return (
    <DatePickerProvider {...props}>
      <Box w="100%" maxW="358px" h="100%">
        <Stack justifyContent="space-between" alignItems="center" direction="row" gap="0">
          <Icon fontSize="24px" onClick={handleClickNavPrevMonth} color={isAbleToPrevMonth ? undefined : 'disabled.grey'} _hover={{ cursor: isAbleToPrevMonth ? "pointer" : "disabled" }}>
            <MdChevronLeft />
          </Icon>
          <Text textStyle="notoH16">{monthYear}</Text>
          <Icon fontSize="24px" onClick={handleClickNavNextMonth} color={isAbleToNextMonth ? undefined : 'disabled.grey'} _hover={{ cursor: isAbleToNextMonth ? "pointer" : "disabled" }}>
            <MdChevronRight />
          </Icon>
        </Stack>
        <Stack mt="4" gap="1">
          <Stack direction="row" gap="4">
            {weekDayView.map((view) => (
              <Flex key={view.weekday} h="28px" flex="1" justifyContent="center" alignItems="center">
                <Text textStyle="notoH14">{view.weekdayText}</Text>
              </Flex>
            ))}
          </Stack>
          {dayView.map((view, viewIndex) => (
            <Stack key={viewIndex} direction="row" gap="4">
              {view.map((day, dayIndex) => (
                <Fragment key={dayIndex}>{day ? <Day {...day} /> : <EmptyDay />}</Fragment>
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </DatePickerProvider>
  )
}

export type DayProps = {
  isChosen?: boolean
  disabled?: boolean
} & DateUnitType

const Day = ({ day, date, isToday }: DayProps) => {
  const { value, minDate, maxDate, disabledDates, onDateChange } = useContext(DatePickerContext)!

  const _minDate = minDate ? startOfDay(minDate) : null
  const _maxDate = maxDate ? endOfDay(maxDate) : null

  const isChosen = isSameDay(date, value)
  const isDisabled =
    (_minDate ? isBefore(date, _minDate) : false) ||
    (_maxDate ? isAfter(date, _maxDate) : false) ||
    (disabledDates ? disabledDates.some((disabledDate) => isSameDay(date, disabledDate)) : false)

  return (
    <Flex h="36px" flex="1" justifyContent="center" alignItems="center" gap="0">
      <Flex
        maxW="36px"
        w="100%"
        h="36px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        data-date-string={date?.toISOString() || "null"}
        bg={isChosen ? "primary" : "transparent"}
        color={isChosen ? "white" : "text.primary"}
        borderRadius="8px"
        cursor={isDisabled ? "not-allowed" : "pointer"}
        _hover={{ bg: isChosen ? "default" : isDisabled ? "transparent" : "materialBg" }}
        onClick={() => {
          if (isDisabled) return
          const prevDate = value
          const newDate = new Date(prevDate)
          newDate.setFullYear(date.getFullYear())
          newDate.setMonth(date.getMonth())
          newDate.setDate(date.getDate())

          onDateChange?.(newDate)
        }}
        gap="0"
      >
        <Text textStyle="notoP16" color={isDisabled ? "disabled" : "inherit"}>
          {day}
        </Text>
        {isToday && <Indicator color={isChosen ? "white" : "text.primary"} />}
      </Flex>
    </Flex>
  )
}

const EmptyDay = () => {
  return <Flex h="36px" flex="1" flexDirection="column" justifyContent="center" alignItems="center" />
}
