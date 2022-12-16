import React from 'react';
import {
    SimilarBlock,
    SimilarInfo,
    SimilarTitleBlock
} from "./style";
import { useParams} from "react-router-dom";
import {GetSimilarCards} from "../../../data/getSimilarCards";
import SliderSimilar from "../../../components/sliderSimilar";

const SimilarCards = () => {
    const params = useParams()
    const paramsId = Number(params.id)
    const cardsSimilar = GetSimilarCards(paramsId)
    const card = cardsSimilar.cards

    return (
        <>
            {card && <SimilarBlock>
                <SimilarInfo>
                    <SimilarTitleBlock>
                        <h1>Похожие:</h1>
                        <span>({card.total})</span>
                    </SimilarTitleBlock>
                </SimilarInfo>
                <SliderSimilar/>
            </SimilarBlock>}
        </>
    );
};

export default SimilarCards;