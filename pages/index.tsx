import { Input as ChakraInput, Stack } from '@chakra-ui/react'

import Input from '../components/Input'

export default function Home() {
  return (
    <Stack padding={4}>
      <ChakraInput placeholder="Basic" />
      <Input readOnly label="Nombre" value="Emanuel" />
      <Input label="Apellido" value="Emanuel" />
      <Input label="Fecha de Nacimiento" placeholder="" type="date" />
    </Stack>
  )
}
