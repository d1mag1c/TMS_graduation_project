import {AuthActions, SignUpError, SignUpSuccessPayload,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,} from "./type";
import {REGISTER_FAILURE, REGISTER_SUCCESS} from "../sagaRegUser/type";

type AuthState = {
    user: SignUpSuccessPayload | null
    error: SignUpError | null,
    // pending: boolean,
}

const initialState: AuthState = {
    user: null,
    error: null,
    // pending: false,
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {

        case SIGNUP_FAILURE || REGISTER_FAILURE:
            return {
                ...state,
                // pending: false,
                user: null,
                error: action.payload,
            };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                // pending: false,
                user: action.payload,
                error: null,
            };
        case REGISTER_SUCCESS:
            console.log(action);
            return {
                user: action.payload,
                error: null,
            };

        default:
            return {
                ...state,
            };
    }
};

export type AuthStateType = {
    authReducer: AuthState
}