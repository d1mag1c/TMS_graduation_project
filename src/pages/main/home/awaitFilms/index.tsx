import React from 'react';
import { GetAwaitFilms } from '../../../../data/getAwaitFilms';
import {AwaitFilmsBlock} from "./style";

const AwaitFilms = () => {

    const awaitFilmsArray = GetAwaitFilms().cards?.films

    return (
        <AwaitFilmsBlock>
            {}
        </AwaitFilmsBlock>
    );
};

export default AwaitFilms;