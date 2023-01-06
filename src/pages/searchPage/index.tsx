import React, {useState} from 'react';
import {GetSearchCards} from "../../data/getSearchCards";
import Card from "../../components/cards";
import {Wrapper, WrapperCards} from "../main/home/style";
import {PaginationBlock} from "../../components/pagination/allPage";
import Loader from "../../components/loader";
import {SearchPageBlock} from "./style";

const SearchPage = () => {

    const [force, setForce] = useState(0)
    const searchCards = GetSearchCards()

    const changePage = (e: { selected: number }) => {
        searchCards.setPage(e.selected + 1)
        window.scroll({top: 0})
        setForce(e.selected)
    }

    return (
        <SearchPageBlock>
            {searchCards.cards?.items.length ? <Wrapper>
                <WrapperCards>
                    {searchCards.cards?.items.length  &&
                        searchCards.cards.items.map((e) =>  <Card props={e} key={e.kinopoiskId}/>)}
                </WrapperCards>
                <PaginationBlock pageCount={searchCards.cards.totalPages} forcePage={force} changePage={changePage}/>
            </Wrapper> : <Loader/>}
        </SearchPageBlock>

    );
};

export default SearchPage;