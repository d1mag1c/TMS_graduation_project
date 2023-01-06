import React, {FC, SetStateAction} from 'react';
import {BurgerBlock, BurgerList, LiGoToHome, ListLi} from "./style";
import {useThemeSelector, useUserSelector} from "../../../store";
import {createSearchParams, useNavigate} from "react-router-dom";
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
    const user = useUserSelector(state => state.authReducer.user?.username)

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
                <ListLi onClick={() => {
                    closeBurger()
                    navigate({
                        pathname: "films",
                        search: `?${createSearchParams({
                            type: 'TV_SERIES'
                        })}`
                    });
                    window.scroll({top: 0})
                }}>Сериалы</ListLi>
                <ListLi onClick={() => {
                    closeBurger()
                    navigate({
                        pathname: "films",
                        search: `?${createSearchParams({
                            type: 'MINI_SERIES'
                        })}`
                    });
                    window.scroll({top: 0})
                }}>Мини-сериалы</ListLi>
                <ListLi onClick={() => {
                    closeBurger()
                    navigate({
                        pathname: "films",
                        search: `?${createSearchParams({
                            type: 'TV_SHOW'
                        })}`
                    });
                    window.scroll({top: 0})
                }}>ТВ-шоу</ListLi>
                {user && <ListLi onClick={() => {
                    closeBurger()
                    navigate('/favorites');
                    window.scroll({top: 0})
                }}>Избранное</ListLi>}
            </BurgerList>
        </BurgerBlock>
    );
};

export default Burger;