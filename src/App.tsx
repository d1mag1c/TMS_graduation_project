import React from 'react';
import Home from "./pages/home";
import {GlobalStyle} from "./styles";
import Header from "./pages/header";
import {useThemeSelector} from './store';

function App() {

    const selectTheme = useThemeSelector(state => state.themeReducer)

    return (
        <>
            <Header/>
            <GlobalStyle props={selectTheme}/>
            <Home></Home>
        </>

    );
}

export default App;
