import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface FieldProps extends Types.BluelibProps<HTMLInputElement> {}


export function Field({onChange, value, ...props}: FieldProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-field")

    return (
        <BaseElement kind={"input"} {...props}/>
    )
}
