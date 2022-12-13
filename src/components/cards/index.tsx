import React, {FC} from 'react';
import {ItemsType} from '../../types';
import {
    CardBlock,
    CardDescription, CardGenre,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres
} from "./style";
import {useNavigate} from "react-router-dom";
import { colorChange } from '../../utils/colorChange';
import {genreTranslate} from "../../utils/genreTranslate";

type CardType = {
    props: ItemsType
}

const Card: FC<CardType> = ({props}) => {

    const navigate = useNavigate()

    return (
        <CardBlock id={String(props.kinopoiskId)} onClick={() => navigate(`/review/${props.kinopoiskId}`)}>
            <CardImg image={props.posterUrl}>
                {props.ratingImdb ?
                    <CardRating colorChange={colorChange(props.ratingImdb)}>{props.ratingImdb}</CardRating> :
                    <CardRating colorChange={colorChange(props.ratingKinopoisk)}>{props.ratingKinopoisk}</CardRating>
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
    );
};

export default Card;