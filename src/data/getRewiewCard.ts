import {useEffect, useState} from "react";
import {CardReviewType} from "../types";
import {API_KEY} from "../constants";
import {useNavigate} from "react-router-dom";

export const GetReviewCard = (id: number) => {

    const [cards, setCards] = useState<CardReviewType>()
    const URLReviewCard = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`;
    const navigate = useNavigate()

    useEffect(() => {

        fetch(URLReviewCard, {
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


    }, [URLReviewCard])

    return {cards}
}