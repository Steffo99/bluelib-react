import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "../base/FormPair";
import {FormLabel, FormLabelProps} from "../base/FormLabel";
import {Select, SelectProps} from "../../inputs/Select";


export interface FormSelectProps {
    label: string,

    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    onSimpleChange?: (value: string) => void,
    value?: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    inputProps?: SelectProps,

    children?: React.ReactNode,
}


export function FormSelect({label, onChange, onSimpleChange, value, validity, pairProps, labelProps, inputProps, children}: FormSelectProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Select onChange={onChange} onSimpleChange={onSimpleChange} value={value} {...inputProps}>{children}</Select>}
            validity={validity}
            {...pairProps}
        />
    )
}
