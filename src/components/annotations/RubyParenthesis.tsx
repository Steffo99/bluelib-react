import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface RubyParenthesisProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function RubyParenthesis({...props}: RubyParenthesisProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "ruby-parenthesis")

    return (
        <BaseElement kind={"rp"} {...props}/>
    )
}
