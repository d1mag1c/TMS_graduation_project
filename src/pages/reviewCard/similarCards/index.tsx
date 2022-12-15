import React from 'react';
import {
    CardBlock,
    CardImg,
    CardImgBlock,
    SimilarBlock,
    SimilarCardsBlock,
    SimilarInfo,
    SimilarTitleBlock
} from "./style";
import {useNavigate, useParams} from "react-router-dom";
import {GetSimilarCards} from "../../../data/getSimilarCards";

const SimilarCards = () => {
    const params = useParams()
    const paramsId = Number(params.id)
    const cardsSimilar = GetSimilarCards(paramsId)
    const card = cardsSimilar.cards
    const navigate = useNavigate()
    const clickCard = (id: number) => {
            navigate(`/review/${id}`)
            window.scroll({top: 0})
    }


    const changePage = (e: { selected: number }) => {
        console.log(e.selected)
    }

    return (
        <>
            {card && <SimilarBlock>
                <SimilarInfo>
                    <SimilarTitleBlock>
                        <h1>Похожие:</h1>
                        <span>({card.total})</span>
                    </SimilarTitleBlock>
                    {/*<SimilarPagination changePage={changePage}/>*/}
                </SimilarInfo>
                <SimilarCardsBlock>
                    {card.items.map(e =>
                        <CardBlock key={e.filmId} onClick={() => clickCard(e.filmId)}>
                            <CardImgBlock>
                                <CardImg src={e.posterUrl}/>
                            </CardImgBlock>
                        </CardBlock>).slice(0, 6)}
                </SimilarCardsBlock>
            </SimilarBlock>}
        </>
    );
};

export default SimilarCards;