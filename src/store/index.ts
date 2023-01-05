import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "./themeReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import { themeReducerType } from "./themeReducer/type";
import {authReducer, AuthStateType } from "./authReducer/authReducer";
import {all} from "redux-saga/effects";
import { signUpSaga } from "./sagaRegUser/saga";
import {signInSaga} from "./sagaRegUser/signInSaga";
import createSagaMiddleware from 'redux-saga'
import {favoriteReducer} from "./favoriteReducer";
import {FavoriteReducerType} from "./favoriteReducer/type";

export const useThemeSelector: TypedUseSelectorHook<themeReducerType> = useSelector
export const useUserSelector: TypedUseSelectorHook<AuthStateType> = useSelector
export const useFavoriteSelector: TypedUseSelectorHook<FavoriteReducerType> = useSelector

export const reducer = combineReducers({
    themeReducer,
    authReducer,
    favoriteReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

function* rootSaga() {
    yield all(
        [
            signUpSaga(),
            signInSaga(),
        ]
    )
}


sagaMiddleware.run(rootSaga)
