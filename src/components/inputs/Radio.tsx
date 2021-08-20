import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface RadioProps extends Types.BluelibProps<HTMLInputElement> {}


export function Radio({onChange, ...props}: RadioProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-radio")

    return (
        <BaseElement kind={"input"} type={"radio"} {...props}/>
    )
}
