import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../../utils/Decorators"
import { FormMultiselect as FormMultiselectComponent } from "./FormMultiselect"
import { Option } from "../../inputs/Option"


export default {
    component: FormMultiselectComponent,
    title: "Forms/Managed/Form Multiselect",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const FormMultiselect = props => (
    <FormMultiselectComponent label={"Favourite colors"} {...props}>
        <Option value={"Red"}/>
        <Option value={"Orange"}/>
        <Option value={"Yellow"}/>
        <Option value={"Green"}/>
        <Option value={"Cyan"}/>
        <Option value={"Blue"}/>
        <Option value={"Purple"}/>
        <Option value={"White"}/>
        <Option value={"Black"}/>
        <Option value={"Grey"}/>
    </FormMultiselectComponent>
)
FormMultiselect.args = {}
