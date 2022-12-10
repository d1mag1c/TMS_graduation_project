import React from 'react';
import {HeaderBlock} from "./style";
import Login from "./login";
import Menu from "./menu";
import Search from "./search";
import Logo from './logo';
import ThemeSwitcher from "./themeSwitcher";

const Header = () => {

    return (
        <HeaderBlock>
            <Menu/>
            <Logo/>
            <Search/>
            <Login/>
            <ThemeSwitcher/>
        </HeaderBlock>
    );
};

export default Header;