import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Panel } from "./Panel"


export default {
    component: Panel,
    title: "Panels/Panel",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
        disabled: {
            control: {type: "boolean"},
        },
        todo: {
            defaultValue: false,
        },
    },
}


export const Default = props => (
    <Panel {...props}>
        This is a Panel.
    </Panel>
)
Default.args = {
    disabled: false,
}


export const Nested = props => (
    <Panel {...props}>
        <Panel>
            <Panel>
                These are three nested Panels.
            </Panel>
        </Panel>
    </Panel>
)
Nested.args = {
    disabled: false,
}


export const NestedMultiple = props => (
    <Panel {...props}>
        <Panel>
            This is the first Panel in a Panel.
        </Panel>
        <Panel>
            This is the second Panel in a Panel.
        </Panel>
        <Panel>
            This is the third Panel in a Panel.
        </Panel>
    </Panel>
)
NestedMultiple.args = {
    disabled: false,
}


export const Todo = Default.bind({})
Todo.args = {
    todo: true,
}
