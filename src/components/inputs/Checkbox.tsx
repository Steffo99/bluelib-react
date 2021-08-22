import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface CheckboxProps extends Types.BluelibHTMLProps<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    checked?: boolean,
}


export function Checkbox({...props}: CheckboxProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-checkbox")

    return (
        <BaseElement kind={"input"} type={"checkbox"} {...props}/>
    )
}
