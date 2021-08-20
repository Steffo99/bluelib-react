import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface CheckboxProps {
    disabled?: boolean,

    onChange?: (value: string, checked: boolean) => void,

    name: string,
    value: string,

    [props: string]: any,
}


export function Checkbox({onChange, ...props}: CheckboxProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-checkbox")

    const onChangeWrapper = React.useCallback(

        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const checked = event.target.checked
            const value = event.target.value

            if(onChange) {
                onChange(value, checked)
            }
        },

        [onChange]
    )

    return (
        <BaseElement kind={"input"} type={"checkbox"} onChange={onChangeWrapper} {...props}/>
    )
}
