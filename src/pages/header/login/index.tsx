import React, {Dispatch, FC, SetStateAction} from 'react';

import {useUserSelector} from '../../../store';
import LoggedOut from "./loggedOut";
import LoggedIn from "./loggedIn";

export type OnclickType = {
    setLoginState: Dispatch<SetStateAction<boolean>>,
    loginState: boolean
}

const Login:FC<OnclickType> = ({loginState, setLoginState}) => {

    const user = useUserSelector(state => state.authReducer.user?.username)
    return (
        <>
            {user?.length ? <LoggedIn loginState={loginState} setLoginState={setLoginState}/> : <LoggedOut/>}
        </>
    );
};

export default Login;