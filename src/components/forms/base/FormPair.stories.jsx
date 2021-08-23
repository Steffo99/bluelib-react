import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormPair as FormPairComponent } from "./FormPair"
import { FormLabel } from "./FormLabel"
import { FormGroup } from "./FormGroup"


export default {
    component: FormPairComponent,
    title: "Forms/Base/Form Pair",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormPair = (props) => (
    <FormPairComponent
        label={<FormLabel>Gender</FormLabel>}
        input={<FormGroup>Choices go here</FormGroup>}
        {...props}
    />
)
FormPair.args = {
}
