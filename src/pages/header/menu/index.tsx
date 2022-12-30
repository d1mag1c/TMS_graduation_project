import React, {Dispatch, FC, SetStateAction} from 'react';
import {MenuBlock} from './style';

type OnclickType = {
    setBurgerState: Dispatch<SetStateAction<boolean>>,
    burgerState: boolean
}


const Menu: FC<OnclickType> = ({setBurgerState, burgerState}) => {

    return (
        <MenuBlock onClick={() => setBurgerState(true)} burgerState={burgerState}/>
    );
};

export default Menu;