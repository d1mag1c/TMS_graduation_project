import React from 'react';
import {HeaderBlock, LogoBlock} from "./style";
import Login from "./login";
import Menu from "./menu";
import Search from "./search";

const Header = () => {

    return (
        <HeaderBlock>
            <Menu/>
            <LogoBlock></LogoBlock>
            <Search/>
            <Login/>
        </HeaderBlock>
    );
};

export default Header;