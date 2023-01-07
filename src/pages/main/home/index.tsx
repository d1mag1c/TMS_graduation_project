import React, {useState} from 'react';
import Card from '../../../components/cards';
import Loader from '../../../components/loader';
import {ButtonLoaderBlock} from '../../../components/loader/buttonLoader/style';
import {ALL} from '../../../constants';
import {GetHomeCards} from '../../../data/getHomeCards';
import {ButtonGetMore, Wrapper, WrapperCards} from "./style";
import AwaitFilms from "./awaitFilms";

const Home = () => {

    const cardsArray = GetHomeCards(ALL)
    const [buttonLoad, setButtonLoad] = useState(false)

    const getButtonLoad = () => {
        setButtonLoad(true)

        setTimeout(() => {
            setButtonLoad(false)
        }, 1000)
    }

    const getCards = () => {
        getButtonLoad()
        cardsArray.setPage(page => page + 1)
    }

    return (
        <>
            {cardsArray.cards.length ?
                <Wrapper>
                    <AwaitFilms/>
                    <WrapperCards>
                        {cardsArray.cards.map((e) => e.items.map(card => <Card props={card}
                                                                               key={card.kinopoiskId}/>))}
                    </WrapperCards>
                    {cardsArray.page < 5 &&
                        <ButtonGetMore onClick={getCards}>Показать еще
                            {buttonLoad && <ButtonLoaderBlock/>}
                        </ButtonGetMore>}
                </Wrapper>
                : <Loader/>}
        </>
    );
};

export default Home;