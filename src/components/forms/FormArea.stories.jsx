import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormArea } from "./FormArea"


export default {
    component: FormArea,
    title: "FormArea",
    decorators: [Decorators.Bluelib],
}


export const Default = props => (
    <FormArea {...props}/>
)
Default.args = {}
