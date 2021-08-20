import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface RadioProps {
    disabled?: boolean,

    onChange?: (value: string) => boolean,

    name: string,
    value: string,

    [props: string]: any,
}


export function Radio({onChange, ...props}: RadioProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-radio")

    const onChangeWrapper = React.useCallback(

        (event: React.ChangeEvent<HTMLInputElement>): boolean => {
            const value = event.target.value

            if(onChange) {
                return onChange(value)
            }

            return false
        },

        [onChange]
    )

    return (
        <BaseElement kind={"input"} type={"radio"} onChange={onChangeWrapper} {...props}/>
    )
}