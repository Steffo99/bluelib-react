import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormGroup as FormGroupComponent } from "./FormGroup"


export default {
    component: FormGroupComponent,
    title: "Forms/Base/Form Group",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormGroup = props => (
    <FormGroupComponent {...props}>
        Inputs go here
    </FormGroupComponent>
)
FormGroup.args = {}
