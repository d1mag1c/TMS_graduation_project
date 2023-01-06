import React, {FC} from 'react';
import {useThemeSelector, useUserSelector} from "../../../store";
import {OnclickType} from "../login";
import {LoginMenuBlock, LoginMenuLi, LoginMenuUl} from './style';
import {useNavigate} from "react-router-dom";
import SettingIcon from "../../../components/svg/settingIcon";
import { FavoriteIcon } from '../../../components/svg/favoriteIcon/favoriteIcon';


const LoginMenu: FC<OnclickType> = ({loginState, setLoginState}) => {
    const theme = useThemeSelector(state => state.themeReducer)
    const user = useUserSelector(state => state.authReducer.user?.username)
    const navigation = useNavigate()

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
                    }}>
                       <SettingIcon/> <p>Настройки</p>
                    </LoginMenuLi>
                    <LoginMenuLi onClick={() => {
                        setLoginState(false)
                    }}>Выйти</LoginMenuLi>
                </LoginMenuUl>
            </LoginMenuBlock>}
        </>
    );
};

export default LoginMenu;