import React from "react";
import { InputContainer, InputLabelContainer, InputName, InputStyled, InputType } from "./style";
import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

type CustomInputProps = {
title: string;
placeholder: string;
type: string;
isRequired: boolean;
register: UseFormRegisterReturn<any>;
}

export default function CustomInput ({title, placeholder, type, isRequired = false, register}: CustomInputProps){
return (
<InputContainer>
<InputLabelContainer>
<InputName>
{title}
{isRequired && <span>required</span>}
</InputName>
<InputType>{type}</InputType>
</InputLabelContainer>
<InputStyled type={type} placeholder={placeholder} {...register}/>
</InputContainer>
)
}