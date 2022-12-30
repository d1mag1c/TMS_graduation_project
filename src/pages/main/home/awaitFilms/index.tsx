import React from 'react';
import {AwaitFilmsBlock, AwaitWrapperCards} from "./style";
import {GetTopFilmsCards} from "../../../../data/getTopFilmsCards";
import AwaitCard from "../../../../components/cards/awaitCard";

const AwaitFilms = () => {

    const awaitFilmsArray = GetTopFilmsCards('TOP_AWAIT_FILMS')

    return (
        <AwaitFilmsBlock>
            <h1>Скоро в прокате:</h1>
            <AwaitWrapperCards>
                {awaitFilmsArray.cards?.films.length && awaitFilmsArray.cards.films.map(e => e.posterUrl.length && <AwaitCard key={e.filmId} props={e}/>)}
            </AwaitWrapperCards>

        </AwaitFilmsBlock>
    );
};

export default AwaitFilms;