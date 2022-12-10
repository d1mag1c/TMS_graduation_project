import {combineReducers, createStore} from "redux";
import {themeReducer} from "./themeReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import { themeReducerType } from "./themeReducer/type";

export const useThemeSelector: TypedUseSelectorHook<themeReducerType> = useSelector

export const reducer = combineReducers({
    themeReducer,

})


export const store = createStore(reducer, composeWithDevTools())