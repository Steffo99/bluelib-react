import * as React from "react";

export type {Argument as ClassNames} from "classnames"

// export type IntrinsicComponentKind = JSX.IntrinsicElements
// export type FunctionComponentKind = (props: object) => JSX.Element
// export type ClassComponentKind = typeof React.Component
// export type ComponentKind = IntrinsicComponentKind | FunctionComponentKind | ClassComponentKind
export type ComponentKind = any


export type State<S> = [S, React.Dispatch<React.SetStateAction<S>>]
export type StateContext<S> = React.Context<State<S> | undefined>
