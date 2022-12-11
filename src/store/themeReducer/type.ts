export type payloadType = {
    background: string,
    color: string,
    colorHover: string
}

export type actionThemeType = {
    type?: string,
    theme?: payloadType
}

export type themeReducerType = {
    themeReducer: payloadType
}