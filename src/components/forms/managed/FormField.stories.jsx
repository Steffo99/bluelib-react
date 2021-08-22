import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormField as FormFieldComponent } from "./FormField"


export default {
    component: FormFieldComponent,
    title: "Forms/Managed/Form Field",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormField = props => (
    <FormFieldComponent label={"Username"} {...props}/>
)
FormField.args = {}
