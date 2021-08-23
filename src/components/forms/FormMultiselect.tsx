import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Multiselect, MultiselectProps} from "../inputs/Multiselect";


export interface FormMultiselectProps {
    label: string,

    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    onSimpleChange?: (value: string[]) => void,
    value?: string[],

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    inputProps?: MultiselectProps,

    children?: React.ReactNode,
}


export function FormMultiselect({label, onChange, onSimpleChange, value, validity, pairProps, labelProps, inputProps, children}: FormMultiselectProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Multiselect onChange={onChange} onSimpleChange={onSimpleChange} value={value} {...inputProps}>{children}</Multiselect>}
            validity={validity}
            {...pairProps}
        />
    )
}
