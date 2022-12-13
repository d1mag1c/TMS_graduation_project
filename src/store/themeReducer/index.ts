import {actionThemeType, payloadType} from "./type";

const defaultState: payloadType = {
    background: "#F3F3F3;",
    color: "#120818;",
    colorHover: "#ffe311",
    gradient: "linear-gradient(to right, rgb(243, 243, 243), rgba(243, 243, 243, 0)),\n  linear-gradient(to left, rgb(243, 243, 243), rgba(243, 243, 243, 0)),\n  linear-gradient(rgba(243, 243, 243, 0.01), rgb(243, 243, 243))",
    loader: "black"
}

const nightTheme: payloadType = {
    background: "#120818;",
    color: "#bbbbbb;",
    colorHover: "white",
    gradient: "linear-gradient(to right, rgb(18, 8, 24), rgba(18, 8, 24, 0)),\n  linear-gradient(to left, rgb(18, 8, 24), rgba(18, 8, 24, 0)),\n  linear-gradient(rgba(18, 8, 24, 0), rgb(18, 8, 24))",
    loader: "white"
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

