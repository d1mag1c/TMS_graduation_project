import React, {useState} from 'react';
import Card from '../../components/card';
import {GetHomeCards} from '../../data/getHomeCards';
import {BlockTest, ButtonGetMore, Wrapper, WrapperCards} from "./style";
import Loader from "../../components/loader";
import {ButtonLoaderBlock} from "../../components/loader/buttonLoader/style";

const Home = () => {

    const cardsArray = GetHomeCards()
    const [buttonLoad, setButtonLoad] = useState(false)
    // console.log(cardsArray?.cards)
    // console.log(cardsArray.page)
    const getButtonLoad = () => {
        setButtonLoad(true)

        setTimeout(() => {
            setButtonLoad(false)
        },1000)
    }

    const getCards = () => {
        getButtonLoad()
        cardsArray.setPage(page => page + 1)
    }

    return (
        <BlockTest>

            {cardsArray.cards.length ? <Wrapper>
                <WrapperCards>
                    {cardsArray.cards.map((e) => e.items.map(card => <Card props={card} key={card.kinopoiskId}/>))}
                </WrapperCards>
                {cardsArray.page < 5 &&
                    <ButtonGetMore onClick={getCards}>Показать еще
                        {buttonLoad && <ButtonLoaderBlock/>}
                    </ButtonGetMore>}
            </Wrapper> : <Loader/>}
        </BlockTest>
    );
};

export default Home;