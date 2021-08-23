import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Form as FormComponent } from "./Form"
import { FormField } from "./FormField"
import { FormArea } from "./FormArea"
import { FormSelect } from "./FormSelect"
import { Option } from "../inputs/Option"
import { FormMultiselect } from "./FormMultiselect"
import { FormRadioGroup } from "./FormRadioGroup"
import { FormCheckboxGroup } from "./FormCheckboxGroup"


export default {
    component: FormComponent,
    title: "Forms/Form",
    decorators: [Decorators.Box, Decorators.Bluelib],
}


export const Form = props => (
    <FormComponent {...props}>
        <FormField label={"Username"}/>
        <FormField label={"Password"} type={"password"}/>
        <FormArea label={"Bio"}/>
        <FormSelect label={"Gender"}>
            <Option value={"Male"}/>
            <Option value={"Female"}/>
            <Option value={"Non-binary"}/>
            <Option value={"Other"}/>
            <Option value={"Don't want to say"}/>
        </FormSelect>
        <FormMultiselect label={"Favourite colors"}>
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
        </FormMultiselect>
        <FormRadioGroup label={"Alignment"} options={[
            "Good",
            "Neutral",
            "Evil"
        ]}/>
        <FormCheckboxGroup label={"Classes"} row={true} options={[
            "Artificer",
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Warlock",
            "Wizard",
        ]}/>
    </FormComponent>
)
Form.args = {}
