import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Option} from "./Option"
import {OptionGroup} from "./OptionGroup"


export interface SelectProps extends Types.BluelibHTMLProps<HTMLSelectElement> {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    value?: string,
}


export function Select({...props}: SelectProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-select")

    return (
        <BaseElement kind={"select"} multiple={false} required={true} {...props}/>
    )
}


Select.Option = Option
Select.Group = OptionGroup
