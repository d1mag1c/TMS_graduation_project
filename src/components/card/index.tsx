import React, { FC } from 'react';
import { ItemsType } from '../../types';
import {
    CardBlock,
    CardDescription, CardGenre,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres
} from "./style";

type CardType = {
    props: ItemsType
}

const Card:FC<CardType> = ({props}) => {
    return (
                <CardBlock>
                    <CardImg image={props.posterUrl}>
                        <CardRating>{props.ratingImdb ? props.ratingKinopoisk : props.ratingImdb}</CardRating>
                        <CardGenre>{props.type}</CardGenre>
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