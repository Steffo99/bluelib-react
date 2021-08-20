import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormField } from "./FormField"


export default {
    component: FormField,
    title: "FormField",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const Default = props => (
    <FormField {...props}/>
)
Default.args = {}
