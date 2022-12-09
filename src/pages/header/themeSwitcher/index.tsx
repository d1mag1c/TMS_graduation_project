import React, {useState} from 'react';
import {OptionDay, OptionNight, Switcher, SwitcherBlock} from "./style";

const ThemeSwitcher = () => {
    const [state, setState] = useState(false)

    const changeState = () => {
        setState((state) => !state)
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