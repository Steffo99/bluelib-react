import * as React from "react"
import * as Types from "../../types"


export const MultiselectContext: Types.StateContext<string[]> = React.createContext(null) as Types.StateContext<string[]>
