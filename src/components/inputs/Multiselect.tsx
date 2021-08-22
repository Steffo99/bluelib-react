import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Option} from "./Option";
import {OptionGroup} from "./OptionGroup";


export interface MultiselectProps extends Types.BluelibHTMLProps<HTMLSelectElement> {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    value?: string[],
}


export function Multiselect({...props}: MultiselectProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-multiselect")

    return (
        <BaseElement kind={"select"} multiple={true} {...props}/>
    )
}


Multiselect.Option = Option
Multiselect.Group = OptionGroup
