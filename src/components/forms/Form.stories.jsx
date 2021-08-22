import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Form as FormComponent } from "./Form"


export default {
    component: FormComponent,
    title: "Forms/Form",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const Form = props => (
    <FormComponent {...props}/>
)
Form.args = {}
