import React from 'react'
import { ErrorText, IconContainer, InputContainer, InputText } from './Styles'
import { Controller } from 'react-hook-form'

export default function Input({ leftIcon, name, errorMessage, control, ...rest }) {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller name={name} control={control} rules={{ required: true }} render={({ field }) => <InputText {...field} {...rest} />} />
        </InputContainer>
        {
            errorMessage ?  <ErrorText>{errorMessage}</ErrorText> : null
        }
        </>
    )
}
