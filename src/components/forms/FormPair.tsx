import * as React from "react"
import * as ReactDOM from "react-dom"
import * as UUID from "uuid"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormLabel} from "./FormLabel";
import {FormGroup} from "./FormGroup";


export interface FormPairProps {
    label: React.ReactNode,
    input: React.ReactNode,
    id?: string,
    group?: boolean,
}


export function FormPair({id, label, input, group = false}: FormPairProps): JSX.Element {
    if(!id) {
        id = UUID.v4()
    }

    if(group) {
        input = <FormGroup>{input}</FormGroup>
    }

    return <>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {input}
    </>
}
