import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Field} from "../inputs/Field";
import {FormSlot} from "./FormSlot";


interface FormFieldProps {
    label: string,
    required?: boolean,
    disabled?: boolean,
    placeholder: string,

    formSlotProps: {[props: string]: any},
    [props: string]: any,
}


export function FormField({label, required, disabled, placeholder, formSlotProps, ...props}: FormFieldProps): JSX.Element {
    return (
        <FormSlot label={label} {...formSlotProps}>
            <Field placeholder={placeholder} required={required} disabled={disabled}/>
        </FormSlot>
    )
}