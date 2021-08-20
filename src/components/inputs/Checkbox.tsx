import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface CheckboxProps extends Types.BluelibProps<HTMLInputElement> {}


export function Checkbox({onChange, ...props}: CheckboxProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-checkbox")

    return (
        <BaseElement kind={"input"} type={"checkbox"} {...props}/>
    )
}
