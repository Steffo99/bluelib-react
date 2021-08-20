import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Area} from "../inputs/Area";
import {Form} from "./Form";
import {FormSlot} from "./FormSlot";
import {Field} from "../inputs/Field";


interface FormAreaProps {
    label: string,
    required?: boolean,
    disabled?: boolean,
    placeholder: string,

    state: [string, React.Dispatch<React.SetStateAction<string>>],
}


export function FormArea({label, required, disabled, placeholder, state}: FormAreaProps): JSX.Element {
    return (
        <FormSlot label={label}>
            <Area placeholder={placeholder} value={state[0]} onChange={state[1]} required={required} disabled={disabled}/>
        </FormSlot>
    )
}