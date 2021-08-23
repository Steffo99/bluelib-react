import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "../base/FormPair";
import {FormLabel, FormLabelProps} from "../base/FormLabel";
import {Area, AreaProps} from "../../inputs/Area";


export interface FormAreaProps {
    label: string,

    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onSimpleChange?: (value: string) => void,
    value?: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    inputProps?: AreaProps,
}


export function FormArea({label, onChange, onSimpleChange, value, validity, pairProps, labelProps, inputProps}: FormAreaProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Area onChange={onChange} onSimpleChange={onSimpleChange} value={value} {...inputProps}/>}
            validity={validity}
            {...pairProps}
        />
    )
}
