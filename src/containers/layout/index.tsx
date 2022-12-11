import React from 'react';
import Header from '../../pages/header';
import Main from '../../pages/main';
import {useThemeSelector} from "../../store";
import { GlobalStyle } from '../../styles';
import RouteComponent from "../router";

const Layout = () => {
    const selectTheme = useThemeSelector(state => state.themeReducer)
    return (
        <>
            <Header/>
            <GlobalStyle props={selectTheme}/>
            <Main>
                <RouteComponent/>
            </Main>
            {/*<Footer/>*/}
        </>
    );
};

export default Layout;