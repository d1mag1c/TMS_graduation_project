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
import {FILM, MINI_SERIES, TV_SERIES, TV_SHOW} from "../../constants";

type CardType = {
    props: ItemsType
}

const Card: FC<CardType> = ({props}) => {

    const colorChange = (rating: number) => {
        switch (rating !== 0) {
            case rating < 7 && rating > 5 :
                return '#c4aa00'
            case rating >= 7 :
                return 'green'
            case rating <= 5 :
                return 'red'
            default:
                return 'grey'
        }
    }

    const genreTranslate = () => {
        switch (props.type) {
            case FILM:
                return 'Фильм'
            case TV_SHOW:
                return 'ТВ-шоу'
            case TV_SERIES:
                return 'Сериал'
            case MINI_SERIES:
                return 'Мини-сериал'
            default:
                return props.type
        }
    }

    return (
        <CardBlock id={String(props.kinopoiskId)}>
            <CardImg image={props.posterUrl}>
                {props.ratingImdb ?
                    <CardRating colorChange={colorChange(props.ratingImdb)}>{props.ratingImdb}</CardRating> :
                    <CardRating colorChange={colorChange(props.ratingKinopoisk)}>{props.ratingKinopoisk}</CardRating>
                }
                <CardGenre>{genreTranslate()}</CardGenre>
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