import { REGISTER_SUCCESS } from "../sagaRegUser/type"

export type SignUpPayload = {
    username: string
    email: string
    password: string
}

export type SignUpSuccessPayload = {
    username: string
    email: string
    id: number
}

export type SignUpError = {
    username: Array<string>
    email: Array<string>
    password: Array<string>
}

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export interface SignupFailurePayload {
    error: string;
}

export interface SignupPayload {
    values: { email: string, password: string };
}

export interface SignupRequest {
    type: "SIGNUP_REQUEST";
    payload: SignupPayload;
}

export type SignupSuccess = {
    type: typeof SIGNUP_SUCCESS,
    payload: SignUpSuccessPayload,
};

export type SignupFailure = {
    type: typeof SIGNUP_FAILURE,
    payload: SignUpError,
};

export type SignInSuccess = {
    type: typeof REGISTER_SUCCESS,
    payload: SignUpSuccessPayload
}

export type AuthActions =
    SignupFailure
    | SignupSuccess
    | SignupRequest
    | SignInSuccess;