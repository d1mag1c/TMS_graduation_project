import React from 'react';
import {ErrorBlock} from "./style";
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <ErrorBlock>
            <h1>Упс... Что-то пошло не так<span>:(</span></h1>
            <Link to='/'>На главную!</Link>
        </ErrorBlock>
    );
};

export default Error404;