import React from 'react';
import {
    BackgroundBlock, DescriptionBlock,
    DescriptionShortBlock,
    ImgBlock,
    ImgReviewCard,
    InfoBlock,
    RatingBlock, RatingLi,
    ReviewCardBlock,
    TextCardReview,
    TitleOriginal,
    TitleRu, VoteSpan, WrapperInfo
} from "./style";
import {useParams} from "react-router-dom";
import {GetReviewCard} from '../../data/getRewiewCard';
import {colorChange} from "../../utils/colorChange";
import {genreTranslate} from "../../utils/genreTranslate";
import {useThemeSelector} from "../../store";

const ReviewCard = () => {

    const params = useParams()
    const paramsId = Number(params.id)
    const cardReview = GetReviewCard(paramsId)
    const card = cardReview.cards
    const theme = useThemeSelector(state => state.themeReducer)

    return (
        <ReviewCardBlock >
            {card &&
                <BackgroundBlock coverUrl={card.coverUrl} theme={theme}>
                    <WrapperInfo>
                        <ImgBlock>
                            <ImgReviewCard src={`${card.posterUrl}`}/>
                        </ImgBlock>
                        <InfoBlock>
                            <TitleRu><p>{card.nameRu}</p></TitleRu>
                            <TitleOriginal>
                                {card.nameOriginal} {card.ratingAgeLimits && <span>{card.ratingAgeLimits.split('age')}+</span>}
                            </TitleOriginal>
                            <RatingBlock>
                                {<RatingLi colorChange={colorChange(card.ratingKinopoisk)}>
                                    <p>Кинопоиск:</p>
                                    <p>{card.ratingKinopoisk ? card.ratingKinopoisk : '-'}</p>
                                    <VoteSpan>Голосов: {card.ratingKinopoiskVoteCount}</VoteSpan>
                                </RatingLi>}
                                {<RatingLi colorChange={colorChange(card.ratingImdb)}>
                                    <p>IMDb:</p>
                                    <p>{card.ratingImdb ? card.ratingImdb : '-'}</p>
                                    <VoteSpan>Голосов: {card.ratingImdbVoteCount}</VoteSpan>
                                </RatingLi>}
                                {<RatingLi colorChange={colorChange(card.ratingFilmCritics)}>
                                    <p>Критики:</p>
                                    <p>{card.ratingFilmCritics ? card.ratingFilmCritics : '-'}</p>
                                    <VoteSpan>Голосов: {card.ratingFilmCriticsVoteCount}</VoteSpan>
                                </RatingLi>}
                            </RatingBlock>
                            <DescriptionShortBlock>
                                {card.type && <TextCardReview>
                                    <span>Тип:</span>{genreTranslate(card.type)}
                                </TextCardReview>}
                                {card.year && <TextCardReview>
                                    <span>Год:</span>{card.year}
                                </TextCardReview>}
                                {card.filmLength && <TextCardReview>
                                    <span>Время:</span><p>{card.filmLength} мин.</p>
                                </TextCardReview>}
                                {card.slogan && <TextCardReview>
                                    <span>Слоган:</span><p>&laquo;{card.slogan}&raquo;</p>
                                </TextCardReview>}
                                {card.countries && <TextCardReview>
                                    <span>Страна:</span><p>{card.countries.map(e => e.country).join(', ')}</p>
                                </TextCardReview>}
                                {card.genres && <TextCardReview>
                                    <span>Жанр:</span><p>{card.genres.map(e => e.genre).join(', ')}</p>
                                </TextCardReview>}
                                {card.shortDescription && <TextCardReview>
                                    <span>Описание:</span><p> {card.shortDescription}</p>
                                </TextCardReview>}
                            </DescriptionShortBlock>
                        </InfoBlock>
                    </WrapperInfo>
                    <DescriptionBlock>
                        <h2>Сюжет:</h2>
                        <p>{card.description}</p>
                    </DescriptionBlock>

                </BackgroundBlock>
            }
        </ReviewCardBlock>
    );
};

export default ReviewCard;