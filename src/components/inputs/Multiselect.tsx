import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface MultiselectProps {
    disabled?: boolean,

    onChange?: (contents: string[]) => void,

    children: React.ReactNode,

    [props: string]: any,
}


export function Multiselect({onChange, ...props}: MultiselectProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-multiselect")

    const onChangeWrapper = React.useCallback(

        (event: React.ChangeEvent<HTMLSelectElement>): void => {
            const options = Array.from(event.target.selectedOptions)
            const contents = options.map((option: HTMLOptionElement) => option.value)

            if(onChange) {
                onChange(contents)
            }
        },

        [onChange]
    )

    return (
        <BaseElement kind={"select"} multiple={true} onChange={onChangeWrapper} {...props}/>
    )
}
