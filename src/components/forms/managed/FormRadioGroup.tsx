import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import * as UUID from "uuid"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "../base/FormPair";
import {FormLabel, FormLabelProps} from "../base/FormLabel";
import {FormGroup, FormGroupProps} from "../base/FormGroup";
import {Radio} from "../../inputs/Radio";



export interface FormRadioGroupProps {
    name?: string,
    label: string,
    options: string[],

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string) => void,
    value: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    groupProps?: FormGroupProps,
}


export function FormRadioGroup({name, label, options, onChange, onSimpleChange, value, validity, pairProps, labelProps, groupProps}: FormRadioGroupProps): JSX.Element {
    if(!name) {
        name = UUID.v4()
    }

    const radios = options.map<JSX.Element>(option => <Radio value={option} name={name}/>)

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(event.target.value)
        },
        [onChange, onSimpleChange]
    )

    const group = (
        <FormGroup onChange={onChangeWrapped} value={value} {...groupProps}>
            {radios}
        </FormGroup>
    )

    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={group}
            validity={validity}
            {...pairProps}
        />
    )
}
