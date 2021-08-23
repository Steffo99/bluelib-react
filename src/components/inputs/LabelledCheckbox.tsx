import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {InputLabel, InputLabelProps} from "./InputLabel";
import {Checkbox, CheckboxProps} from "./Checkbox";


export interface LabelledCheckboxProps extends CheckboxProps {
    label: string,
    labelProps?: InputLabelProps,
}


export function LabelledCheckbox({label, labelProps, ...props}: LabelledCheckboxProps): JSX.Element {
    return (
        <InputLabel {...labelProps}>
            <Checkbox {...props}/>
            &nbsp;{label}
        </InputLabel>
    )
}
