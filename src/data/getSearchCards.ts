import {useEffect, useState} from "react";
import {CardsHomeType} from "../types";
import {API_KEY} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

export const GetSearchCards = () => {

    const params = useLocation().search;
    const [cards, setCards] = useState<CardsHomeType>()
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const URLSearchCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films${params}&page=${page}`;

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
            .catch(err => {
                console.log(err)
                navigate('/error404')
            })


    }, [URLSearchCards, params, page])

    return {cards, page, setPage}
}