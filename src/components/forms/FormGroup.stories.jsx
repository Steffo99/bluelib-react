import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormGroup } from "./FormGroup"


export default {
    component: FormGroup,
    title: "FormGroup",
    decorators: [Decorators.Bluelib],
}


export const Default = props => (
    <FormGroup {...props}/>
)
Default.args = {}
