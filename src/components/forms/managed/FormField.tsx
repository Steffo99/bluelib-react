import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair} from "../base/FormPair";
import {FormLabel} from "../base/FormLabel";
import {Field, FieldProps} from "../../inputs/Field";


export interface FormFieldProps extends FieldProps {
    label: string,
}


export function FormField({label, ...inputProps}: FormFieldProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel>{label}</FormLabel>}
            input={<Field {...inputProps}/>}
        />
    )
}
