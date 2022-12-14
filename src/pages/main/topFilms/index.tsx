import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {WrapperCards} from "./style";
import {GetTopFilmsCards} from "../../../data/getTopFilmsCards";
import TopFilmsCard from "../../../components/cards/topFilmsCard";
import Loader from "../../../components/loader";
import { PaginationBlock } from '../../../components/pagination/allPage';

const TopFilms = () => {

    const params = useParams().value
    const cardsArray = GetTopFilmsCards(params)
    const [force, setForce] = useState(0)

    const changePage = (e: { selected: number }) => {
        cardsArray.setPage(e.selected + 1)
        window.scroll({top: 0})
        setForce(e.selected)
    }

    useEffect(() => {
        cardsArray.setPage(1)
        setForce(0)
    }, [params])

    return (
        <>
            {cardsArray.cards?.films ?
                <>
                    <WrapperCards>
                        {cardsArray.cards?.films.map(cards => <TopFilmsCard props={cards} key={cards.filmId}/>)}
                    </WrapperCards>
                    <PaginationBlock changePage={changePage} pageCount={cardsArray.cards.pagesCount} forcePage={force}/>
                </>
                : <Loader/>}
        </>
    );
};

export default TopFilms;