import React, {FC} from 'react';
import {MenuBlock} from './style';

type OnclickType = {
    changeStateBurger: () => void,
    burgerState: boolean
}


const Menu: FC<OnclickType> = ({changeStateBurger, burgerState}) => {

    return (
        <MenuBlock onClick={changeStateBurger} burgerState={burgerState}/>
    );
};

export default Menu;