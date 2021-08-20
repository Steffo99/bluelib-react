import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Radio as RadioComponent } from "./Radio"
import { Box } from "../panels/Box"
import { BaseElement } from "../BaseElement"


export default {
    component: RadioComponent,
    title: "Inputs/Radio",
    decorators: [Decorators.Bluelib],
}


export const Radio = props => (
    <RadioComponent value={"zero"} {...props}/>
)
Radio.args = {
    name: "number"
}
