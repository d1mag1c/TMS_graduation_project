import {
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SignUpError,
    SignUpPayload,
    SignUpSuccessPayload
} from "./type";

export const signUpFailure = (payload: SignUpError) => ({
    type: SIGNUP_FAILURE,
    payload: payload
});

export const signUpSuccess = (payload: SignUpSuccessPayload) => ({
    type: SIGNUP_SUCCESS,
    payload: payload
});

export const signUpRequest = (payload: SignUpPayload) => ({
    type: SIGNUP_REQUEST,
    payload: payload
})