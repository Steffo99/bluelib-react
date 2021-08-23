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
import { FormRow } from "./FormRow"
import { Button } from "../inputs/Button"
import { Parenthesis } from "../panels/Parenthesis"


export default {
    component: FormComponent,
    title: "Forms/Form",
    decorators: [Decorators.Box, Decorators.Bluelib],
}


export const Form = props => (
    <FormComponent {...props}>
        <FormField label={"Username"}/>
        <FormField label={"Password"} type={"password"}/>
        <FormRow>
            <Parenthesis>Enter the details of your characters below.</Parenthesis>
        </FormRow>
        <FormField label={"Name"}/>
        <FormArea label={"Backstory"}/>
        <FormSelect label={"Gender"}>
            <Option value={"Male"}/>
            <Option value={"Female"}/>
            <Option value={"Non-binary"}/>
        </FormSelect>
        {/* TODO: This doesn't work properly */}
        <FormField label={"Level"} type={"number"} min={1} max={20}/>
        <FormRadioGroup label={"Alignment"} row={true} options={[
            "Lawful good",
            "Lawful neutral",
            "Lawful evil",
            "Neutral good",
            "Neutral",
            "Neutral evil",
            "Chaotic good",
            "Chaotic neutral",
            "Chaotic evil",
            "Other",
        ]}/>
        <FormCheckboxGroup label={"Classes"} row={false} options={[
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
        <FormRow>
            <Button>Throw fireball</Button>
            <Button>Shoot a magic missile</Button>
            <Button>Save character</Button>
        </FormRow>
    </FormComponent>
)
Form.args = {}
