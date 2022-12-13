import React, {useState} from 'react';
import {BackgroundBlock, HeaderBlock, OverflowBodyStyle, WrapperLoginStyle} from "./style";
import Login from "./login";
import Menu from "./menu";
import Search from "./search";
import Logo from './logo';
import ThemeSwitcher from "./themeSwitcher";
import Burger from "./burger";

const Header = () => {

    const [burgerState, setBurgerState] = useState(false)

    const changeStateBurger = () => {

        setBurgerState(state => !state)
    }

    return (
        <>
            {burgerState && <BackgroundBlock onClick={() => setBurgerState(false)}/>}
            {burgerState && <OverflowBodyStyle/>}
            <HeaderBlock>
                <Burger burgerState={burgerState} setBurgerState={setBurgerState}/>
                <Menu changeStateBurger={changeStateBurger} burgerState={burgerState}/>
                <Logo/>
                <Search/>
                <WrapperLoginStyle>
                    <Login/>
                    <ThemeSwitcher/>
                </WrapperLoginStyle>

            </HeaderBlock>
        </>

    );
};

export default Header;