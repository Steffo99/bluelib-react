import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import * as UUID from "uuid"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface FormSlotProps {
    label: string,

    children: JSX.Element,

    [props: string]: any,
}


export function FormSlot({label, children, ...props}: FormSlotProps): JSX.Element {
    const uuid = React.useMemo(() => UUID.v4(), [])

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "form-label")

    const labelElement = React.useMemo(
        () => (

            <BaseElement kind={"label"} for={uuid} {...props}>
                {label}
            </BaseElement>

        ),
        [label, props, uuid]
    )

    const inputElement = React.useMemo(
        () => (

            React.cloneElement(children, {id: uuid})

        ),
        [children, uuid]
    )

    return (
        <>
            {labelElement}
            {inputElement}
        </>
    )
}
