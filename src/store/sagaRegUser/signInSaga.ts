import {put, call, takeEvery} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'
import {SIGNIN_REQUEST, SignInError, signInFailure, SignInPayload, SignInSuccessPayload, registerSuccess} from './type';
import {SignUpSuccessPayload} from "../authReducer/type";
import {getProfile} from './getUser';

type UserFavoriteType = {
    user: string;
    favorites?: number[];
};

const signInRequest = async (
    payload: SignInPayload
): Promise<SignInSuccessPayload> => {
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
    }
    const response = await fetch(
        'https://studapi.teachmeskills.by/auth/jwt/create/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers,
        }
    )

    const data = await response.json()

    if (!response.ok) {
        return Promise.reject(data as SignInError)
    }

    localStorage.setItem('access', JSON.stringify(data.access))
    localStorage.setItem('refresh', JSON.stringify(data.refresh))

    return data as SignInSuccessPayload
}

export function* signIn(action: PayloadAction<SignInPayload>) {
    try {
        yield call(signInRequest, action.payload);

        const userInfo: SignUpSuccessPayload = yield call(getProfile);
        yield put(registerSuccess(userInfo))

        const userFavorites: UserFavoriteType = {
            user: userInfo.username,
            favorites: []
        };

        localStorage.setItem('user', JSON.stringify(userFavorites))

        console.log(userInfo);
    } catch (error: any) {
        yield put(signInFailure(error))
    }
}

export function* signInSaga() {
    yield takeEvery(SIGNIN_REQUEST, signIn)
}
