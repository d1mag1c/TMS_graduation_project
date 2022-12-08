import React, { FC } from 'react';
import {
    CardBlock,
    CardDescription, CardGenre,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres
} from "./style";
import {ItemsType} from "../../../types";

type CardType = {
    children: ItemsType
}

const Card:FC<CardType> = ({children}) => {
    return (
                <CardBlock>
                    <CardImg image={children.posterUrl}>
                        <CardRating>{children.ratingImdb ? children.ratingKinopoisk : children.ratingImdb}</CardRating>
                        <CardGenre>{children.type}</CardGenre>
                    </CardImg>
                    <CardInfo>
                        <CardTitle>{children.nameRu ? children.nameRu : children.nameOriginal}</CardTitle>
                        <CardDescription>
                            <CardYearAndGenres>
                                <span>{children.year}</span>,
                                {children.genres.map(e => ' ' + e.genre).slice(0, 5).toString()}
                            </CardYearAndGenres>
                            <CardsCountries>
                                {children.countries.map(e => ' ' + e.country).slice(0, 3).toString()}
                            </CardsCountries>
                        </CardDescription>
                    </CardInfo>
                </CardBlock>
    );
};

export default Card;