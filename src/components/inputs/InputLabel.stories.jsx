import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { InputLabel as InputLabelComponent } from "./InputLabel"


export default {
    component: InputLabelComponent,
    title: "Uncategorized/InputLabel",
    decorators: [Decorators.Bluelib],
}


export const InputLabel = props => (
    <InputLabelComponent {...props}/>
)
InputLabel.args = {}
