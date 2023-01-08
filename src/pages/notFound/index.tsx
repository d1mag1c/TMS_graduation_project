import React from 'react';
import {NotFoundBlock} from "./style";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <NotFoundBlock>
            <h1>Такой страницы не существует!</h1>
            <Link to='/'>На главную!</Link>
        </NotFoundBlock>
    );
};

export default NotFound;