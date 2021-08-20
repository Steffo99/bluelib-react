import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormSlot} from "./FormSlot";


interface FormGroupProps {
    label: string,

    children: React.ReactNode,

    [props: string]: any,
}


export function FormGroup({label, children, ...props}: FormGroupProps): JSX.Element {
    return (
        <FormSlot label={label} {...props}>
            <BaseElement kind={"div"} bluelibClassNames={"form-group"}>
                {children}
            </BaseElement>
        </FormSlot>
    )
}
