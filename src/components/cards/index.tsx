import React, {FC} from 'react';
import {ItemsType} from '../../types';
import {
    CardBlock,
    CardDescription, CardGenre,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres, FavoriteBlock
} from "./style";
import {useNavigate} from "react-router-dom";
import {colorChange} from '../../utils/colorChange';
import {genreTranslate} from "../../utils/genreTranslate";
import {FavoriteIcon} from "../svg/favoriteIcon";
import {useThemeSelector} from "../../store";

type CardType = {
    props: ItemsType
}

const Card: FC<CardType> = ({props}) => {

    const navigate = useNavigate()
    const clickCard = (id: number) => {
        navigate(`/review/${id}`)
        window.scroll({top: 0})
    }
    const theme = useThemeSelector(state => state.themeReducer)

    return (
        <CardBlock id={String(props.kinopoiskId)} onClick={() => clickCard(props.kinopoiskId)}>
            <CardImg image={props.posterUrl}>
                {props.ratingKinopoisk ?
                    <CardRating colorChange={colorChange(props.ratingKinopoisk)}>{props.ratingKinopoisk}</CardRating>
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
                    <FavoriteBlock theme={theme}>
                        <CardsCountries>
                            {props.countries.map(e => ' ' + e.country).slice(0, 2).toString()}
                        </CardsCountries>
                        <FavoriteIcon/>
                    </FavoriteBlock>

                </CardDescription>
            </CardInfo>
        </CardBlock>
    );
};

export default Card;