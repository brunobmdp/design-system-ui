import { styled, keyframes } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '1px solid $ignite300',
  },
})

const slideIn = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(0%)' },
})

const slideOut = keyframes({
  '0%': { transform: 'translateY(0%)' },
  '100%': { transform: 'translateY(-100%)' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
