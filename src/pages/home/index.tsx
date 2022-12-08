import React from 'react';
import Card from '../../components/card';
import {GetHomeCards} from '../../data/getHomeCards';
import {BlockTest, ButtonTest, Wrapper, WrapperCards} from "./style";

const Home = () => {

    const cardsArray = GetHomeCards()
    // console.log(cardsArray?.cards)
    // console.log(cardsArray.page)
    return (
        <BlockTest>
            {cardsArray.cards.length ? <Wrapper>
                <WrapperCards>
                    {cardsArray.cards.map((e) => e.items.map(card => <Card children={card} key={card.kinopoiskId}/>))}
                </WrapperCards>
                {cardsArray.page < 5 &&
                    <ButtonTest onClick={() => cardsArray.setPage(page => page + 1)}>Показать еще</ButtonTest>}
            </Wrapper> : <div>Loading...</div>}
        </BlockTest>
    );
};

export default Home;