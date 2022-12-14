import {useEffect, useState} from "react";
import {CardsSimilarType} from "../types";
import {API_KEY} from "../constants";

export const GetSimilarCards = (id: number) => {

    const [cards, setCards] = useState<CardsSimilarType>()

    const URLSimilarCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`;

    useEffect(() => {

        fetch(URLSimilarCards, {
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

    }, [URLSimilarCards])

    return {cards}
}