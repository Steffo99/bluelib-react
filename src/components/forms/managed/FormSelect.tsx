import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair} from "../base/FormPair";
import {FormLabel} from "../base/FormLabel";
import {Select, SelectProps} from "../../inputs/Select";


export interface FormSelectProps extends SelectProps {
    label: string,
}


export function FormSelect({label, ...inputProps}: FormSelectProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel>{label}</FormLabel>}
            input={<Select {...inputProps}/>}
        />
    )
}
