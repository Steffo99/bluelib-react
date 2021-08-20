import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Area} from "../inputs/Area";
import {Field} from "../inputs/Field";
import {Select} from "../inputs/Select";
import {Option} from "../inputs/Option";
import {Multiselect} from "../inputs/Multiselect";
import {FormField} from "./FormField";


interface FormProps {
    [props: string]: any,
}


export function Form({...props}: FormProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "form")

    return (
        <BaseElement kind={"form"} {...props}/>
    )
}


Form.Field = FormField



interface FormSelectProps extends FormElementProps {
    children?: React.ReactNode,

    state: [string, React.Dispatch<React.SetStateAction<string>>],
}


Form.Select = function({label, disabled, state, children}: FormSelectProps): JSX.Element {
    return <>
        <BaseElement kind={"label"} bluelibClassNames={"form-label"}>
            {label}
        </BaseElement>
        <Select value={state[0]} onChange={state[1]} required={true} disabled={disabled}>
            {children}
        </Select>
    </>
}


interface FormMultiselectProps extends FormElementProps {
    children?: React.ReactNode,

    state: [string[], React.Dispatch<React.SetStateAction<string[]>>],
}


Form.Multiselect = function({label, disabled, state, children}: FormMultiselectProps): JSX.Element {
    return <>
        <BaseElement kind={"label"} bluelibClassNames={"form-label"}>
            {label}
        </BaseElement>
        <Multiselect value={state[0]} onChange={state[1]} required={true} disabled={disabled}>
            {children}
        </Multiselect>
    </>
}


interface FormRadiosProps extends FormElementProps {
    children?: React.ReactNode,

    state: [string, React.Dispatch<React.SetStateAction<string>>],
}


Form.Radios = function({label, disabled, state, children}: FormRadiosProps): JSX.Element {
    return <>
        <BaseElement kind={"label"} bluelibClassNames={"form-label"}>
            {label}
        </BaseElement>
        <BaseElement kind={"div"} bluelibClassNames={"form-group"}>
            {children}
        </BaseElement>
    </>
}
