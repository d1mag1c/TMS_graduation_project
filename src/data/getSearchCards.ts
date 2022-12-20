import {useEffect, useState} from "react";
import {CardsHomeType} from "../types";
import {API_KEY} from "../constants";

type SearchParamsType = {
    keyword?:string | null
}

export const GetSearchCards = (keyword: any) => {

    const [cards, setCards] = useState<CardsHomeType>()
    const URLSearchCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=1`;

    useEffect(() => {

        fetch(URLSearchCards, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setCards(json)
            )
            .catch(err => console.log(err))


    }, [URLSearchCards, keyword])

// console.log( URLSearchCards)
    return {cards}
}