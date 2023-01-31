import { ComponentProps } from 'react'
import { Input, InputContainer, Prefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <InputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </InputContainer>
  )
}
TextInput.displayName = 'TextInput'
