import {useEffect, useState} from "react";
import {CardsTopFilmsType} from "../types";
import {API_KEY} from "../constants";

export const GetAwaitFilms = () => {

    const [cards, setCards] = useState<CardsTopFilmsType>()
    const [page, setPage] = useState(1)

    const URLHomeCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${page}`;

    useEffect(() => {

        fetch(URLHomeCards, {
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


    }, [URLHomeCards, page])

    return {cards, page, setPage}
}