import { StoryObj, Meta } from '@storybook/react'

import { Button, Toast, ToastProps } from '@bmdp-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    trigger: <Button>Add</Button>,
    title: 'Title Exemple',
    description: 'This is a very detail description',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
