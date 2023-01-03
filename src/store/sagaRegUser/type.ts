import { SignUpSuccessPayload } from "../authReducer/type"

export type SignInPayload = {
    email: string
    password: string
}

export type SignInSuccessPayload = {
    refresh: string
    access: string
}

export type SignInError = {
    detail: string
}

export const signInSuccess = (payload: SignInSuccessPayload) => ({
    type: REGISTER_FAILURE,
    payload: payload
});

export const signInRequest = (payload: SignInPayload) => ({
    type: SIGNIN_REQUEST,
    payload: payload
})

export const signInFailure = (payload: SignInError) => ({
    type: REGISTER_SUCCESS,
    payload: payload
});

export const registerSuccess = (profile: SignUpSuccessPayload) => ({
    type: REGISTER_SUCCESS,
    payload: profile,
});

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';