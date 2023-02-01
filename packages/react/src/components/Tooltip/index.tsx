import * as Tooltip_ from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent, TooltipTrigger } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  tooltipText: string
  triggerElement: ReactNode
}

export function Tooltip({
  tooltipText,
  triggerElement,
  ...props
}: TooltipProps) {
  return (
    <Tooltip_.Provider>
      <Tooltip_.Root>
        <TooltipTrigger>{triggerElement}</TooltipTrigger>
        <Tooltip_.Portal>
          <TooltipContent side="top" {...props}>
            {tooltipText}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip_.Portal>
      </Tooltip_.Root>
    </Tooltip_.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
