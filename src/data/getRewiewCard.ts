import {useEffect, useState} from "react";
import {CardReviewType} from "../types";

export const GetReviewCard = (id: number) => {

    const [cards, setCards] = useState<CardReviewType>()
    const URLReviewCard = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`;

    useEffect(() => {

        fetch(URLReviewCard, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd1309ff9-4ad7-4f90-a411-959371b0d2a2',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setCards(json)
            )
            .catch(err => console.log(err))


    }, [URLReviewCard])

    return {cards}
}