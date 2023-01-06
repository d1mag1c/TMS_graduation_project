import React, {FC} from 'react';
import {CardReviewType, ItemsType} from '../../types';
import {
    CardBlock,
    CardDescription, CardGenre,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres, FavoriteBlock, WrapperCard
} from "./style";
import {useNavigate} from "react-router-dom";
import {colorChange} from '../../utils/colorChange';
import {genreTranslate} from "../../utils/genreTranslate";
import {FavoriteIconComponent} from "../svg/favoriteIcon";
import {useUserSelector} from "../../store";

type CardType = {
    props: ItemsType | CardReviewType
}

const Card: FC<CardType> = ({props}) => {

    const navigate = useNavigate()
    const clickCard = (id: number) => {
        navigate(`/review/${id}`)
        window.scroll({top: 0})
    }

    const user = useUserSelector(state => state.authReducer.user?.username)

    return (
        <WrapperCard>
            {user && <FavoriteBlock>
                <FavoriteIconComponent id={props.kinopoiskId}/>
            </FavoriteBlock>}
            <CardBlock id={String(props.kinopoiskId)} onClick={() => clickCard(props.kinopoiskId)}>
                <CardImg image={props.posterUrl}>
                    {props.ratingKinopoisk ?
                        <CardRating
                            colorChange={colorChange(props.ratingKinopoisk)}>{props.ratingKinopoisk}</CardRating>
                        : <CardRating colorChange={colorChange(props.ratingImdb)}>{props.ratingImdb}</CardRating>
                    }
                    <CardGenre>{genreTranslate(props.type)}</CardGenre>
                </CardImg>
                <CardInfo>
                    <CardTitle>{props.nameRu ? props.nameRu : props.nameOriginal}</CardTitle>
                    <CardDescription>
                        <CardYearAndGenres>
                            <span>{props.year}</span>,
                            {props.genres.map(e => ' ' + e.genre).slice(0, 5).toString()}
                        </CardYearAndGenres>

                        <CardsCountries>
                            {props.countries.map(e => ' ' + e.country).slice(0, 2).toString()}
                        </CardsCountries>
                    </CardDescription>
                </CardInfo>
            </CardBlock>
        </WrapperCard>
    );
};

export default Card;