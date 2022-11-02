import { useEffect, useRef, useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import LockIcon from './LockIcon'

interface Props {
  readOnly?: boolean
  isRequired?: boolean
  value: string
  label: string
}

export default function Input(props: Props) {
  const { readOnly, value, label, isRequired } = props

  const labelRef = useRef<HTMLLabelElement>(null)
  const [paddingLeft, setPaddingLeft] = useState<number>()

  useEffect(() => {
    setPaddingLeft(labelRef?.current?.clientWidth + 2)
  }, [labelRef])

  return (
    <FormControl id="first-name" isInvalid={false} isRequired={isRequired} variant="floating">
      <InputGroup>
        <ChakraInput paddingLeft={`${paddingLeft}px`} readOnly={readOnly} value={value} />
        {readOnly && <InputRightElement children={<LockIcon color="white" />} />}
      </InputGroup>
      <FormLabel ref={labelRef} data-readOnly={readOnly}>
        {label}
      </FormLabel>
    </FormControl>
  )
}
