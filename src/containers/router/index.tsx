import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/main/home";
import TopFilms from '../../pages/main/topFilms';
import ReviewCard from "../../pages/reviewCard";
import SearchPage from "../../pages/searchPage";
import Registration from "../../pages/registration";
import Favorites from '../../pages/favorites';
import Activation from "../../pages/activation";
import NotFound from '../../pages/notFound';
import Error404 from "../../pages/404";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='top_films/:value' element={< TopFilms/>} />
            <Route path='review/:id' element={<ReviewCard/>}/>
            <Route path='films' element={<SearchPage/>}/>
            <Route path='registration' element={<Registration/>}/>
            <Route path='favorites' element={<Favorites/>}/>
            <Route path='activation' element={<Activation/>}/>
            <Route path='error404' element={<Error404/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouteComponent;