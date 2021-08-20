import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface FieldProps {
    placeholder: string,
    required?: boolean,
    disabled?: boolean,

    onChange: (contents: string) => void,
    value?: string,

    [props: string]: any,
}


export function Field({onChange, value, ...props}: FieldProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-field")

    const onChangeWrapper = React.useCallback(

        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const contents = event.target.value

            if(onChange) {
                onChange(contents)
            }
        },

        [onChange]
    )

    return (
        <BaseElement kind={"input"} onChange={onChangeWrapper} {...props}/>
    )
}
