import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Checkbox as CheckboxComponent } from "./Checkbox"
import { Box } from "../panels/Box"
import { BaseElement } from "../BaseElement"


export default {
    component: CheckboxComponent,
    title: "Inputs/Checkbox",
    decorators: [Decorators.Bluelib],
}


export const Checkbox = props => (
    <CheckboxComponent value={"zero"} {...props}/>
)
Checkbox.args = {
    name: "number"
}
