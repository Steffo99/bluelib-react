import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormSelect as FormSelectComponent } from "./FormSelect"
import { Option } from "../../inputs/Option"


export default {
    component: FormSelectComponent,
    title: "Forms/Managed/Form Select",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormSelect = props => (
    <FormSelectComponent label={"Ready check"} {...props}>
        <Option value={"I'm ready!"}/>
        <Option value={"Please wait..."}/>
        <Option value={"I won't be there."}/>
    </FormSelectComponent>
)
FormSelect.args = {}
