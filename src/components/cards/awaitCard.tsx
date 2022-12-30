import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {AwaitCardBlock, AwaitDescription, AwaitImgBlock, CardRating} from "./style";
import {FilmsType} from "../../types";
import {colorChange} from "../../utils/colorChange";

type CardTopFilmsType = {
    props: FilmsType
}
const AwaitCard: FC<CardTopFilmsType> = ({props}) => {

    const navigate = useNavigate()

    const clickCard = (id: number) => {
        navigate(`/review/${id}`)
        window.scroll({top: 0})
    }

    return (
        <AwaitCardBlock onClick={() => clickCard(props.filmId)}>
            <AwaitImgBlock image={props.posterUrl}>
                {props.rating && <CardRating colorChange={colorChange(Number(props.rating))}>Ожидание: {props.rating}</CardRating>}
            </AwaitImgBlock>
            <AwaitDescription>
                <p>{props.nameRu}</p>
            </AwaitDescription>
        </AwaitCardBlock>
    );
};

export default AwaitCard;