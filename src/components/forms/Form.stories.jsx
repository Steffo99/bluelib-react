import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Form } from "./Form"
import { Option } from "../inputs/Option"


export default {
    component: Form,
    title: "Forms/Form",
    decorators: [Decorators.Box, Decorators.Bluelib],
}


export const Default = props => {
    const nameState = React.useState("")
    const bioState = React.useState("")
    const genderState = React.useState("")
    const moodState = React.useState([])

    return (
        <Form {...props}>
            <Form.Field label={"Name"} placeholder={"Stefano Pigozzi"} state={nameState}/>
            <Form.Area label={"Bio"} placeholder={"I develop websites using React."} state={bioState}/>
            <Form.Select label={"Gender"} state={genderState}>
                <Option value={"Male"}/>
                <Option value={"Female"}/>
                <Option value={"Non-binary"}/>
                <Option value={"Prefer not to say"}/>
            </Form.Select>
            <Form.Multiselect label={"Mood"} state={moodState}>
                <Option value={"Happy"}/>
                <Option value={"Sad"}/>
                <Option value={"Angry"}/>
                <Option value={"Tired"}/>
            </Form.Multiselect>
        </Form>
    )
}
Default.args = {}
