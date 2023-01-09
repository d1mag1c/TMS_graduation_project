import React, {useState} from 'react';
import {FavoritesBlock, FavoritesWrapperCard} from "./style";
import {useFavoriteSelector} from "../../store";
import {PaginationBlock} from '../../components/pagination/allPage';

import Card from "../../components/cards";
import {GetFavoritesCards} from "../../data/getFavoritesCards";

const Favorites = () => {

    const favoritesIdArray = useFavoriteSelector(state => state.favoriteReducer.idFavorite)
    const [page, setPage] = useState(0)
    const [cardsId, setCardsId] = useState<number[]>(favoritesIdArray?.slice(page, page + 5) || [])
    const pageCount = Math.ceil(favoritesIdArray.length / 5)

    const changePage = (e: { selected: number }) => {
        setPage(e.selected * 5)
        setCardsId(favoritesIdArray?.slice(e.selected * 5, e.selected * 5 + 5))
    }
    const arrayCards = GetFavoritesCards(cardsId)

    return (
        <FavoritesBlock>
            <FavoritesWrapperCard>
                {arrayCards.cards?.length
                    ? arrayCards.cards.map(card => card && <Card props={card} key={card.kinopoiskId}/>)
                    : <h1>Вы ничего не добавили в избранное!</h1>}
            </FavoritesWrapperCard>
            {pageCount > 1 &&
                <PaginationBlock
                forcePage={0} pageCount={pageCount}
                changePage={changePage}/>}
        </FavoritesBlock>
    );
};

export default Favorites;