import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {AwaitCardBlock, AwaitDescription, AwaitImgBlock, CardRating, FavoriteBlock, WrapperCard} from "./style";
import {FilmsType} from "../../types";
import {colorChange} from "../../utils/colorChange";
import {FavoriteIcon} from "../svg/favoriteIcon";
import {useUserSelector} from "../../store";

type CardTopFilmsType = {
    props: FilmsType
}
const AwaitCard: FC<CardTopFilmsType> = ({props}) => {

    const navigate = useNavigate()

    const clickCard = (id: number) => {
        navigate(`/review/${id}`)
        window.scroll({top: 0})
    }
    const user = useUserSelector(state => state.authReducer.user?.username)
    return (
        <WrapperCard>
            {user && <FavoriteBlock>
                <FavoriteIcon id={props.filmId}/>
            </FavoriteBlock>}
            <AwaitCardBlock onClick={() => clickCard(props.filmId)}>
                <AwaitImgBlock image={props.posterUrl}>
                    {props.rating && <CardRating
                        colorChange={colorChange(Number(props.rating))}>Ожидание: {props.rating}</CardRating>}
                </AwaitImgBlock>
                <AwaitDescription>
                    <p>{props.nameRu}</p>
                </AwaitDescription>
            </AwaitCardBlock>
        </WrapperCard>
    );
};

export default AwaitCard;