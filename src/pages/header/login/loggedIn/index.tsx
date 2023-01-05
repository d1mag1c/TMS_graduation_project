import React, {FC} from 'react';
import {LogInBlock, UserBlock, UserInitial} from './style';
import {useUserSelector} from "../../../../store";
import {OnclickType} from "../index";

const LoggedIn:FC<OnclickType> = ({loginState, setLoginState}) => {

    const user = useUserSelector(state => state.authReducer.user?.username)


    const changeLoginState = () => {
        setLoginState(state => !state)
    }
    return (
        <>
            {user?.length &&
                <LogInBlock onClick={changeLoginState}>
                    <UserInitial>{user[0].toUpperCase()}</UserInitial>
                    <UserBlock>{user.slice(1, 11)}</UserBlock>
                </LogInBlock>
            }

        </>
    );
};

export default LoggedIn;