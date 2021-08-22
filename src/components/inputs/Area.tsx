import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface AreaProps extends Types.BluelibHTMLProps<HTMLTextAreaElement> {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value?: string,
}


export function Area({...props}: AreaProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-area")

    return (
        <BaseElement kind={"textarea"} {...props}/>
    )
}
