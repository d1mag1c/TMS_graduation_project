import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/main/home";
import TopFilms from '../../pages/main/topFilms';
import ReviewCard from "../../pages/reviewCard";
import SearchPage from "../../pages/searchPage";
import Registration from "../../pages/registration";
import { ActivationRoute } from './activation';

const RouteComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path='top_films/:value' element={< TopFilms/>} />
            <Route path='review/:id' element={<ReviewCard/>}/>
            <Route path={'films'} element={<SearchPage/>}/>
            <Route path={'registration'} element={<Registration/>}/>
            <Route path='/activate/:uid/:token' element={<ActivationRoute/>}/>
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default RouteComponent;