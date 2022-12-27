import {useEffect, useState} from "react";
import {CardsHomeType} from "../types";
import {API_KEY} from "../constants";
import {useLocation, useParams} from "react-router-dom";

export const GetSearchCards = () => {

    const params = useLocation().search;
    const [cards, setCards] = useState<CardsHomeType>()

    const URLSearchCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films${params}&page=${1}`;

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


    }, [URLSearchCards, params])
    // console.log( URLSearchCards)

    return {cards}
}