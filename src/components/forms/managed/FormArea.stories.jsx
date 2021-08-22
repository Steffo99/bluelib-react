import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormArea as FormAreaComponent } from "./FormArea"


export default {
    component: FormAreaComponent,
    title: "Forms/Managed/Form Area",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormArea = props => (
    <FormAreaComponent label={"Bio"} {...props}/>
)
FormArea.args = {}
