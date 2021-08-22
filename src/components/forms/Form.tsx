import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface FormProps extends Types.BluelibProps<HTMLFormElement> {}


export function Form({...props}: FormProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "form")

    return (
        <BaseElement kind={"form"} {...props}/>
    )
}
