import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

const contentShow = keyframes({
  from: { transform: 'scale(0,0)' },
  to: { transform: 'scale(1,1)' },
})
const contentHide = keyframes({
  from: { transform: 'scale(1,1)' },
  to: { transform: 'scale(0,0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '$3 $4',
  borderRadius: '$xs',
  border: 'none',
  maxWidth: 200,

  zIndex: 9999999999,

  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$medium',
  '&[data-state="delayed-open"]': {
    animation: `${contentShow} 200ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${contentHide} 200ms ease-in`,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
  fill: '$gray900',
})
