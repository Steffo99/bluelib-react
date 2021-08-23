import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface LabelledRadioProps extends Types.BluelibHTMLProps<unknown> {
}


export function LabelledRadio({...props}: LabelledRadioProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "")

    return (
        <BaseElement kind={"label"} {...props}/>
    )
}
