import React from 'react';
import Home from "./pages/home";
import {GlobalStyle} from "./styles";
import Header from "./pages/header";

function App() {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Home></Home>
        </>

    );
}

export default App;
