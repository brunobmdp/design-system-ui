import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  padding: '$8',
})

const slideIn = keyframes({
  from: { transform: 'translateX(100%)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const fadeOut = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(100%)', opacity: 0 },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))', opacity: 1 },
  to: { transform: `translateX(100%)`, opacity: 0 },
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$1',
  backgroundColor: '$gray800',
  minWidth: 240,
  maxWidth: 360,
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-in-out`,
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} 200ms ease-in-out`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-in-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 200ms ease-in-out`,
  },
})
export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$base',
})
export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  fontWeight: '$regular',
})
export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  right: '$4',
  top: '$4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$5',
  height: '$5',
  color: '$gray200',
  cursor: 'pointer',
})
