import React from 'react';
import { LogoBlock } from './style';
import {useNavigate} from "react-router-dom";


const Logo = () => {
    const navigate = useNavigate()
    const logoReload = () => {
        navigate('/')
        window.location.reload()
    }

    return (
        <LogoBlock onClick={logoReload}/>
    );
};

export default Logo;