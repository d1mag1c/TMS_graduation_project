import React, {FC, useEffect} from 'react';
import {useFavoriteSelector, useThemeSelector, useUserSelector} from "../../../store";
import {OnclickType} from "../login";
import {LoginMenuBlock, LoginMenuLi, LoginMenuUl} from './style';
import {useNavigate} from "react-router-dom";
import SettingIcon from "../../../components/svg/settingIcon";
import { FavoriteIcon } from '../../../components/svg/favoriteIcon/favoriteIcon';
import {useDispatch} from "react-redux";
import {addToFavorites} from "../../../store/favoriteReducer/action";


const LoginMenu: FC<OnclickType> = ({loginState, setLoginState}) => {
    const theme = useThemeSelector(state => state.themeReducer)
    const user = useUserSelector(state => state.authReducer.user?.username)
    const navigation = useNavigate()
    const dispatch = useDispatch();

    const findUser = JSON.parse(localStorage.getItem(`${user}`)!);
    const favoritesIdArray = useFavoriteSelector(state => state.favoriteReducer.idFavorite)

    useEffect(() => {
        if(user && findUser?.favorites.length && !favoritesIdArray.length) {

            localStorage.setItem(`${user}`, JSON.stringify({favorites: [...findUser?.favorites]}))
            dispatch(addToFavorites([...findUser?.favorites]))

        }
    },[user])

    return (
        <>
            {loginState && <LoginMenuBlock theme={theme}>
                <LoginMenuUl>
                    <LoginMenuLi>{user}</LoginMenuLi>
                    <LoginMenuLi onClick={() => {
                        setLoginState(false)
                        navigation('/favorites')
                    }}>
                        <FavoriteIcon/>
                        <p>Избранное</p>
                    </LoginMenuLi>
                    <LoginMenuLi onClick={() => {
                        setLoginState(false)
                        navigation('/activation')
                    }}>
                       <SettingIcon/> <p>Настройки</p>
                    </LoginMenuLi>
                    <LoginMenuLi onClick={() => {
                        setLoginState(false)
                        dispatch({type:"REGISTER_SUCCESS", payload: null})
                        dispatch(addToFavorites([]))}}>
                        Выйти
                    </LoginMenuLi>
                </LoginMenuUl>
            </LoginMenuBlock>}
        </>
    );
};

export default LoginMenu;