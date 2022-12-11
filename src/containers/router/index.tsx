import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/main/home";
import TopFilms from '../../pages/main/topFilms';

const RouteComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path='top_films/:value' element={< TopFilms/>} />
        </Routes>
    );
};

export default RouteComponent;