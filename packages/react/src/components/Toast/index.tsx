import * as Toast_ from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, ReactNode, useState } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
  trigger: ReactNode
}

export function Toast({ trigger, description, title, ...props }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <Toast_.Provider swipeDirection="right">
      <div onClick={() => setOpen(true)}>{trigger}</div>

      <ToastRoot
        type="foreground"
        open={open}
        onOpenChange={setOpen}
        {...props}
      >
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose asChild>
          <X weight="bold" />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </Toast_.Provider>
  )
}
Toast.displayName = 'Toast'
