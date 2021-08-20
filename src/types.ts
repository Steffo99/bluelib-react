import * as React from "react"
import Color from "color"
import {Argument as ClassNamesArgument} from "classnames"


export type ClassNames = ClassNamesArgument


export type State<S> = [S, React.Dispatch<React.SetStateAction<S>>]
export type StateContext<S> = React.Context<State<S> | undefined>


export interface BluelibProps<T> extends React.HTMLProps<T> {
    bluelibClassNames?: ClassNames,
    customColor?: typeof Color,
    disabled?: boolean,
}
