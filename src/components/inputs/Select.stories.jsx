import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Select } from "./Select"
import { Option } from "./Option"
import { OptionGroup } from "./OptionGroup"


export default {
    component: Select,
    title: "Inputs/Select",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Select {...props}>
        <Option value={"Yes"}/>
        <Option value={"Maybe"}/>
        <Option value={"No"}/>
    </Select>
)
Default.args = {
    disabled: false,
}


export const WithGroups = props => (
    <Select {...props}>
        <Option value={"Ungrouped"}/>
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
    </Select>
)
WithGroups.args = {
    disabled: false,
}