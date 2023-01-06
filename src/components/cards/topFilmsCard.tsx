import React, {FC} from 'react';
import {FilmsType} from '../../types';
import {
    CardBlock,
    CardDescription,
    CardImg,
    CardInfo,
    CardRating, CardsCountries,
    CardTitle,
    CardYearAndGenres, FavoriteBlock, WrapperCard
} from "./style";
import {useNavigate} from "react-router-dom";
import { colorChange } from '../../utils/colorChange';
import {FavoriteIconComponent} from "../svg/favoriteIcon";
import {useUserSelector} from "../../store";

type CardTopFilmsType = {
    props: FilmsType
}

const TopFilmsCard: FC<CardTopFilmsType> = ({props}) => {

    const navigate = useNavigate()

    const clickCard = (id: number) => {
        navigate(`/review/${id}`)
        window.scroll({top: 0})
    }
    const user = useUserSelector(state => state.authReducer.user?.username)

    return (
        <WrapperCard>
        {user && <FavoriteBlock>
            <FavoriteIconComponent id={props.filmId}/>
        </FavoriteBlock>}
        <CardBlock id={String(props.filmId)} onClick={() => clickCard(props.filmId)}>
            <CardImg image={props.posterUrl}>
                {props.rating && <CardRating colorChange={colorChange(Number(props.rating))}>{props.rating}</CardRating>}
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
            </WrapperCard>
    );
};

export default TopFilmsCard;