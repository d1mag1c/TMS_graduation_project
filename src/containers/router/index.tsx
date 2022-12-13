import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/main/home";
import TopFilms from '../../pages/main/topFilms';
import ReviewCard from "../../pages/reviewCard";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path='top_films/:value' element={< TopFilms/>} />
            <Route path='review/:id' element={<ReviewCard/>}/>
        </Routes>
    );
};

export default RouteComponent;