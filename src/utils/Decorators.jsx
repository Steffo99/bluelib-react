import { Bluelib as BluelibComponent } from "../components/Bluelib"
import { Box as BoxComponent } from "../components/panels/Box"
import { Form as FormComponent } from "../components/forms/Form"
import { Ruby as RubyComponent } from "../components/annotations/Ruby"


export const Bluelib = Story => <BluelibComponent theme={"paper"} style={{backgroundColor: "transparent"}}>{Story()}</BluelibComponent>

export const Fill = Story => <div style={{height: "100vh"}}>{Story()}</div>

export const Box = Story => <BoxComponent>{Story()}</BoxComponent>

export const Form = Story => <FormComponent>{Story()}</FormComponent>

export const Ruby = Story => <RubyComponent>{Story()}</RubyComponent>
