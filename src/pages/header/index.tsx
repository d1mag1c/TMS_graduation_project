import React, {useState} from 'react';
import {BackgroundBlock, HeaderBlock, OverflowBodyStyle, WrapperLoginStyle} from "./style";
import Login from "./login";
import Menu from "./menu";
import Search from "./search";
import Logo from './logo';
import ThemeSwitcher from "./themeSwitcher";
import Burger from "./burger";
import AdvancedSearch from './advancedSearch';

const Header = () => {

    const [burgerState, setBurgerState] = useState(false)
    const [stateAdvSearch, setStateAdvSearch] = useState(false)

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keyword') || ''
    const [valueSearch, setValueSearch] = useState(keywordParams)

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValueSearch(e.target.value)
    }
    return (
        <>
            {burgerState && <BackgroundBlock onClick={() => setBurgerState(false)}/>}
            {burgerState && <OverflowBodyStyle/>}
            {stateAdvSearch && <BackgroundBlock onClick={() => setStateAdvSearch(false)}/>}
            {stateAdvSearch && <OverflowBodyStyle/>}

            <Burger burgerState={burgerState} setBurgerState={setBurgerState}/>
            <AdvancedSearch stateAdvSearch={stateAdvSearch} setStateAdvSearch={setStateAdvSearch} valueSearch={valueSearch} handleSubmitValue={handleSubmit}/>

            <HeaderBlock>

                <Menu setBurgerState={setBurgerState} burgerState={burgerState}/>
                <Logo/>
                <Search setstateAdvSearch={setStateAdvSearch} valueSearch={valueSearch} handleSubmitValue={handleSubmit}/>
                <WrapperLoginStyle>
                    <Login/>
                    <ThemeSwitcher/>
                </WrapperLoginStyle>

            </HeaderBlock>
        </>

    );
};

export default Header;