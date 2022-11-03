import { Divider, Input as ChakraInput, Stack } from '@chakra-ui/react'
import { useState } from 'react'

import Chip from '../components/Chip'
import Input from '../components/Input'

export default function Home() {
  const [select, setSelect] = useState<string>(undefined)

  return (
    <Stack padding={4}>
      <ChakraInput placeholder="Basic" />
      <Input readOnly label="Nombre" value="Emanuel" />
      <Input label="Apellido" value="Emanuel" />
      <Input label="Fecha de Nacimiento" placeholder="" type="date" />
      <Divider />
      <Stack direction={'row'}>
        <Chip
          clickable
          label="Ema"
          selected={select === '1'}
          onClick={() => {
            setSelect('1')
          }}
        />
        <Chip
          clickable
          label="Ema"
          selected={select === '2'}
          onClick={() => {
            setSelect('2')
          }}
        />
        <Chip
          clickable
          label="Ema"
          selected={select === '3'}
          onClick={() => {
            setSelect('3')
          }}
        />
      </Stack>
    </Stack>
  )
}
