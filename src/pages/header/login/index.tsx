import React from 'react';
import {IconUser, LoginBlock} from "./style";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigation = useNavigate()

    return (
        <LoginBlock onClick={() => navigation('registration')}>
            <IconUser></IconUser>
        </LoginBlock>
    );
};

export default Login;