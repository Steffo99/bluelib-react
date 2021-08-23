import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Radio, RadioProps} from "./Radio";
import {InputLabel, InputLabelProps} from "./InputLabel";


export interface LabelledRadioProps extends RadioProps {
    label: string,
    labelProps?: InputLabelProps,
}


export function LabelledRadio({label, labelProps, ...props}: LabelledRadioProps): JSX.Element {
    return (
        <InputLabel {...labelProps}>
            <Radio {...props}/>
            &nbsp;{label}
        </InputLabel>
    )
}
