import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../../types"
import {BaseElement} from "../../BaseElement"
import mergeClassNames from "classnames"
import {FormPair} from "../base/FormPair";
import {FormLabel} from "../base/FormLabel";
import {Multiselect, MultiselectProps} from "../../inputs/Multiselect";


export interface FormMultiselectProps extends MultiselectProps {
    label: string,
}


export function FormMultiselect({label, ...inputProps}: FormMultiselectProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel>{label}</FormLabel>}
            input={<Multiselect {...inputProps}/>}
        />
    )
}
