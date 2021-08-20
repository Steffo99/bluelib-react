import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Option } from "./Option"
import { OptionGroup } from "./OptionGroup"
import { Multiselect } from "./Multiselect"


export default {
    component: Multiselect,
    title: "Inputs/Multiselect",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Multiselect {...props}>
        <Option value={"Yes"}/>
        <Option value={"Maybe"}/>
        <Option value={"No"}/>
    </Multiselect>
)
Default.args = {
    disabled: false,
}


export const WithGroups = props => (
    <Multiselect {...props}>
        <OptionGroup label={"A"}>
            <Option value={"Anchor"}/>
            <Option value={"Angel"}/>
            <Option value={"Anti-air"}/>
        </OptionGroup>
        <OptionGroup label={"B"}>
            <Option value={"Banana"}/>
            <Option value={"Boat"}/>
            <Option value={"Bus"}/>
        </OptionGroup>
    </Multiselect>
)
WithGroups.args = {
    disabled: false,
}