import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "../base/FormPair";
import {FormLabel, FormLabelProps} from "../base/FormLabel";
import {Field, FieldProps} from "../../inputs/Field";


export interface FormFieldProps {
    label: string,

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string) => void,
    value?: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    inputProps?: FieldProps,
}


export function FormField({label, onChange, onSimpleChange, value, validity, pairProps, labelProps, inputProps}: FormFieldProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Field onChange={onChange} onSimpleChange={onSimpleChange} value={value} {...inputProps}/>}
            validity={validity}
            {...pairProps}
        />
    )
}
