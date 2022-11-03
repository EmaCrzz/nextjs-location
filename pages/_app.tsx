import type { AppProps } from 'next/app'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import customTheme from '../theme'
import 'react-datepicker/dist/react-datepicker.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
