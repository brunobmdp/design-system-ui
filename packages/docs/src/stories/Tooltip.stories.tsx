import { StoryObj, Meta } from '@storybook/react'

import { Text, Tooltip, TooltipProps } from '@bmdp-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    tooltipText: 'Tooltip text exemple',
    triggerElement: <Text>Tooltip exemple</Text>,
  },
  argTypes: {
    triggerElement: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
