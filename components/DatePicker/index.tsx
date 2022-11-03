import React, { HTMLAttributes } from 'react'
import ReactDatePicker from 'react-datepicker'

interface Props {
  isClearable?: boolean
  onChange: (date: Date) => any
  selectedDate: Date | undefined
  showPopperArrow?: boolean
}

const DatePicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  ...props
}: Props & HTMLAttributes<HTMLElement>) => {
  return (
    <ReactDatePicker
      isClearable={isClearable}
      selected={selectedDate}
      showPopperArrow={showPopperArrow}
      onChange={onChange}
      {...props}
    />
  )
}

export default DatePicker
