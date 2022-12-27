import React from 'react';
import {GetSearchCards} from "../../data/getSearchCards";
import Card from "../../components/cards";
import {WrapperCards} from "../main/home/style";

const SearchPage = () => {


    const searchCards = GetSearchCards()


    return (
        <WrapperCards>
            {searchCards.cards?.items.length && searchCards.cards?.items.map(e => <Card props={e} key={e.kinopoiskId}/>)}
        </WrapperCards>
    );
};

export default SearchPage;