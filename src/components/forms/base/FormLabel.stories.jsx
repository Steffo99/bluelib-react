import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormLabel as FormLabelComponent } from "./FormLabel"


export default {
    component: FormLabelComponent,
    title: "Forms/Base/Form Label",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormLabel = props => (
    <FormLabelComponent {...props}>
        Username
    </FormLabelComponent>
)
FormLabel.args = {}
