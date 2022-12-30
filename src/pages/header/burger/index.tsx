import React, {FC, SetStateAction} from 'react';
import {BurgerBlock, BurgerList, LiGoToHome, ListLi} from "./style";
import {useThemeSelector} from "../../../store";
import {useNavigate} from "react-router-dom";
import {TOP_100, TOP_250 } from '../../../constants';

type BurgerStateType = {
    burgerState: boolean,
    setBurgerState: React.Dispatch<SetStateAction<boolean>>
}

const Burger: FC<BurgerStateType> = ({burgerState, setBurgerState}) => {
    const theme = useThemeSelector(state => state.themeReducer)
    const navigate = useNavigate()
    const closeBurger = () => {
        setBurgerState(false)
    }

    return (
        <BurgerBlock theme={theme} burgerState={burgerState}>
            <BurgerList theme={theme}>
                <LiGoToHome onClick={ () => {
                    closeBurger()
                    navigate('/')
                }
                } theme={theme}>На главную</LiGoToHome>
                <ListLi onClick={closeBurger}>Фильмы</ListLi>
                <ListLi onClick={() => {
                    closeBurger()
                    navigate(`top_films/${TOP_100}`)
                    window.scroll({top: 0})
                }
                }>Топ 100</ListLi>
                <ListLi onClick={() => {
                    closeBurger()
                    navigate(`top_films/${TOP_250}`)
                    window.scroll({top: 0})
                }}>Топ 250</ListLi>
                <ListLi onClick={closeBurger}>Сериалы</ListLi>
                <ListLi onClick={closeBurger}>Мини-сериалы</ListLi>
                <ListLi onClick={closeBurger}>ТВ-шоу</ListLi>
            </BurgerList>
        </BurgerBlock>
    );
};

export default Burger;