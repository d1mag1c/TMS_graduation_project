import {actionThemeType, payloadType} from "./type";

const defaultState: payloadType = {
    background: "#F3F3F3;",
    color: "#120818;",
    colorHover: "#ffe311"
}

const nightTheme: payloadType = {
    background: "#120818;",
    color: "#bbbbbb;",
    colorHover: "white"
}

export const themeReducer = (state = nightTheme, action: actionThemeType) => {

    switch (action.type) {
        case "LIGHT_THEME":
            return defaultState

        case "DARK_THEME":
            return nightTheme

        default:
            return {...state}
    }
};

