import React from 'react';
import Slider from "react-slick";
import {CardBlock, CardImg, CardImgBlock, SimilarCardsBlock} from "./style";
import {useNavigate, useParams} from "react-router-dom";
import {GetSimilarCards} from "../../data/getSimilarCards";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {useThemeSelector} from "../../store";

export const SlickButtonFix = ({currentSlide, slideCount, children, ...props} : any) => (
    <span {...props}  style={{ cursor:'pointer'}}>{children}</span>
);

const SliderSimilar = () => {
    const params = useParams()
    const paramsId = Number(params.id)
    const cardsSimilar = GetSimilarCards(paramsId)
    const card = cardsSimilar.cards
    const navigate = useNavigate()

    const clickCard = (id: number) => {
        navigate(`/review/${id}`)
        window.scroll({top: 0})
    }
    const theme = useThemeSelector(state => state.themeReducer)
    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: false,
        speed: 300,
        prevArrow: (<SlickButtonFix><FaChevronLeft/></SlickButtonFix>),
        nextArrow: (<SlickButtonFix><FaChevronRight/></SlickButtonFix>),
    }

    return (
        <SimilarCardsBlock theme={theme}>
            {card && <Slider {...sliderSettings}>
                {card.items.map(e =>
                    <CardBlock key={e.filmId} onClick={() => clickCard(e.filmId)}>
                        <CardImgBlock>
                            <CardImg src={e.posterUrl}/>
                        </CardImgBlock>
                    </CardBlock>)}

            </Slider>}

        </SimilarCardsBlock>
    );
};

export default SliderSimilar;