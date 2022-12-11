import React, {FC} from 'react';
import {MenuBlock} from './style';

type OnclickType = {
    changeStateBurger: () => void,
    burgerState: boolean
}


const Menu: FC<OnclickType> = ({changeStateBurger, burgerState}) => {
    return (
        <MenuBlock onClick={changeStateBurger}>
            {burgerState ? <span>&#10006;</span> : <p>Menu</p>}
        </MenuBlock>
    );
};

export default Menu;