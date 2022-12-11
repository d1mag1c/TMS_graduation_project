import React, {FC} from 'react';
import {BurgerBlock, BurgerList, ListLi} from "./style";
import {useThemeSelector} from "../../../store";

type BurgerStateType = {
    burgerState: boolean
}


const Burger: FC<BurgerStateType> = ({burgerState}) => {
    const theme = useThemeSelector(state => state.themeReducer)

    return (
        <BurgerBlock theme={theme} burgerState={burgerState}>
            <BurgerList>
                <ListLi>Топ 100</ListLi>
                <ListLi>Топ 250</ListLi>
                <ListLi>Фильмы</ListLi>
                <ListLi>Сериалы</ListLi>
                <ListLi>Мини-сериалы</ListLi>
                <ListLi>ТВ шоу</ListLi>
                <ListLi>Выбрать категорию</ListLi>
                <ListLi>Выбрать страну</ListLi>

            </BurgerList>
        </BurgerBlock>
    );
};

export default Burger;