import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LabelledRadio as LabelledRadioComponent } from "./LabelledRadio"


export default {
    component: LabelledRadioComponent,
    title: "Uncategorized/LabelledRadio",
    decorators: [Decorators.Bluelib],
}


export const LabelledRadio = props => (
    <LabelledRadioComponent {...props}/>
)
LabelledRadio.args = {}
