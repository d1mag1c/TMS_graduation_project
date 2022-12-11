import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {WrapperCards} from "./style";
import {GetTopFilmsCards} from "../../../data/getTopFilmsCards";
import TopFilmsCard from "../../../components/cards/topFilmsCard";
import Loader from "../../../components/loader";
import {PaginationBlock} from '../../../components/pagination';
import ScrollToTop from "react-scroll-to-top";

const TopFilms = () => {

    const params = useParams().value
    const cardsArray = GetTopFilmsCards(params)

    const changePage = (e: { selected: number }) => {
        cardsArray.setPage(e.selected + 1)
        window.scroll({top: 0})
    }

    useEffect(() => {
        cardsArray.setPage(1)

    }, [params])

    return (
        <>
            {cardsArray.cards?.films ?
                <>
                    <WrapperCards>
                        {cardsArray.cards?.films.map(cards => <TopFilmsCard props={cards} key={cards.filmId}/>)}
                    </WrapperCards>
                    <PaginationBlock changePage={changePage} pageCount={cardsArray.cards.pagesCount}/>
                </>
                : <Loader/>}
        </>
    );
};

export default TopFilms;