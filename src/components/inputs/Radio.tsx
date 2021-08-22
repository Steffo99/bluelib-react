import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface RadioProps extends Types.BluelibHTMLProps<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    checked?: boolean,
}


export function Radio({...props}: RadioProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-radio")

    return (
        <BaseElement kind={"input"} type={"radio"} {...props}/>
    )
}
