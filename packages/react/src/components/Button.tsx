import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontSize: '$md',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  padding: '0 $4',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
      lg: {
        height: 54,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
