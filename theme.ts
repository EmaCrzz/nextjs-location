import { theme, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const Input = {
  // variants: {
  //   outlineBackgroundFix: (props) => ({
  //     field: {
  //       ...theme.components.Input.variants.outline(props).field,
  //       borderRadius: 9999,
  //       bg: '#333',
  //     },
  //   }),
  // },
  // defaultProps: {
  //   variant: 'outlineBackgroundFix',
  // },
  sizes: {
    md: {
      field: {
        borderRadius: 9999,
        height: '54px'
      }
    }
  }
}
const activeLabelStyles = {
  transform: 'scale(0.90) translateY(-5px)'
}

const Form = {
  variants: {
    floating: {
      container: {
        '[data-readonly="true"]': { ...activeLabelStyles },
        '.chakra-input__right-element': {
          width: 70
        },
        _focusWithin: {
          label: {
            ...activeLabelStyles
          },
          input: {
            boxShadow: theme.shadows.none
          }
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
          {
            ...activeLabelStyles
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          px: 2,
          my: 4,
          pl: 7,
          transformOrigin: 'left top',
          fontSize: theme.fontSizes.sm,
          color: '#A6A6A6',
          '.chakra-form__required-indicator': {
            color: '#A6A6A6'
          }
        },

        input: {
          background: '#555555',
          border: theme.borders.none,
          ':read-only': {
            backgroundColor: 'black',
            cursor: 'not-allowed'
          }
        }
      }
    }
  }
}

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  colors: {
    primary: theme.colors.twitter
  },
  styles: {
    global: (props) => ({
      'html, body, #root': {
        color: mode(undefined, 'whiteAlpha.900')(props),
        height: '100%'
      },
      '*::-webkit-scrollbar': {
        display: 'none'
      }
    })
  },
  components: {
    Input,
    Form
  }
})

export default customTheme
