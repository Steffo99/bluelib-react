import { Bluelib } from "../src/components/Bluelib"


export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z][a-z]*$"
    },
    argTypes: {
        bluelibClassNames: {
            type: "string",
            description: "Additional Bluelib classNames to be appended to the element's classNames",
        },
        customColor: {
            type: "color",
            description: "Apply a Bluelib custom color to the element",
        },
    },
    args: {
        disabled: false,
    },
    options: {
        storySort: {
            order: [
                "Core",
                "Layouts",
                "Panels",
                "Chapters",
                "Separators",
                "Images",
                "Tables",
                "Lists",
                "Status",
                "Inputs",
                "Forms",
                "Common",
                "Annotations",
                "Semantics",
                "Colors",
                "Internals",
            ]
        }
    },
}