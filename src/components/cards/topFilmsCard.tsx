import React, {FC} from 'react';
import {FilmsType} from '../../types';
import {
    CardBlock,
    CardDescription,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres
} from "./style";
import {useNavigate} from "react-router-dom";

type CardTopFilmsType = {
    props: FilmsType
}

const TopFilmsCard: FC<CardTopFilmsType> = ({props}) => {

    const navigate = useNavigate()

    const colorChange = () => {
        const rating = Number(props.rating);
        if (rating < 7 && rating > 5) {
            return '#c4aa00'
        }
        if (rating >= 7) {
            return 'green'
        }
        if (rating <= 5) {
            return 'red'
        }
    }

    return (
        <CardBlock id={String(props.filmId)} onClick={() => navigate(`/review/${props.filmId}`)}>
            <CardImg image={props.posterUrl}>
                {props.rating && <CardRating colorChange={colorChange()}>{props.rating}</CardRating>}
            </CardImg>
            <CardInfo>
                <CardTitle>{props.nameRu ? props.nameRu : props.nameEn}</CardTitle>
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

export default TopFilmsCard;