export type payloadType = {
    background: string,
    color: string
}

export type actionThemeType = {
    type?: string,
    theme?: payloadType
}

export type themeReducerType = {
    themeReducer: payloadType
}