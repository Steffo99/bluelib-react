import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair} from "../base/FormPair";
import {FormLabel, FormLabelProps} from "../base/FormLabel";
import {Area, AreaProps} from "../../inputs/Area";


export interface FormAreaProps {
    label: string,

    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value?: string,

    labelProps?: FormLabelProps,
    areaProps?: AreaProps,
}


export function FormArea({label, onChange, value, labelProps, areaProps}: FormAreaProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Area onChange={onChange} value={value} {...areaProps}/>}
        />
    )
}
