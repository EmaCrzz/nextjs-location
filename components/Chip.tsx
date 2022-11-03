import { Badge, chakra, theme, shouldForwardProp } from '@chakra-ui/react'
import React from 'react'

interface Props {
  clickable?: boolean
  onClick?: () => void
  label: string
  colorScheme?: string
  variant?: 'outline' | 'solid' | 'subtle'
  selected?: boolean
}

const ChipRoot = chakra(Badge, {
  baseStyle: {
    padding: theme.space[5],
    borderRadius: 9999,
    textTransform: 'capitalize',
    cursor: 'default',
    userSelect: 'none',
    '[data-selected="true"]': {
      bg: 'red.400'
    }
  }
})

export default function Chip(props: Props) {
  const { clickable, onClick, label, colorScheme, variant, selected } = props

  return (
    <ChipRoot
      _hover={{
        cursor: clickable ? 'pointer' : 'default',
        opacity: clickable ? 0.9 : 1
      }}
      background={selected && 'red.500'}
      colorScheme={colorScheme}
      data-selected={!!selected}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </ChipRoot>
  )
}
