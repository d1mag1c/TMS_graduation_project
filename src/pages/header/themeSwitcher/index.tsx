import React, {useState} from 'react';
import {OptionDay, OptionNight, Switcher, SwitcherBlock} from "./style";
import {useDispatch} from "react-redux";

const ThemeSwitcher = () => {
    const [state, setState] = useState(false)
    const dispatch = useDispatch()

    const changeState = () => {
        setState((state) => !state)
        state ? dispatch({type: "DARK_THEME"}) : dispatch({type: "LIGHT_THEME"})
    }

    return (
        <SwitcherBlock>
            <OptionDay>Ночь</OptionDay>
            <Switcher onClick={changeState} state={state}/>
            <OptionNight>День</OptionNight>
        </SwitcherBlock>
    );
};

export default ThemeSwitcher;