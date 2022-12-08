import React, {useState} from 'react';
import {GetHomeCards} from '../../data/getAllCards';
import {BlockTest, ButtonTest, WrapperCards} from "./style";
import Card from "./card";


const Home = () => {

    const [page, setPage] = useState(1)

    const cardsArray = GetHomeCards(page)
    console.log(cardsArray?.cards)

    return (
        <BlockTest>
            <WrapperCards>
                {cardsArray?.cards.map((e) => e.items.map(card => <Card children={card} key={card.kinopoiskId}/>))}
            </WrapperCards>

            {page < 6 && <ButtonTest onClick={() => setPage(page + 1)}>Показать еще</ButtonTest>}
        </BlockTest>
    );
};

export default Home;