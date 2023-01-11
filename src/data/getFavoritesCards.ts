import {useEffect, useState} from "react";
import {CardReviewType} from "../types";
import {API_KEY} from "../constants";
import {useUserSelector} from "../store";
import {useNavigate} from "react-router-dom";

export const GetFavoritesCards = (arrayId: number[]) => {

    const [cards, setCards] = useState<CardReviewType[]>()
    const user = useUserSelector(state => state.authReducer.user?.username)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            const arrayFetchId = arrayId.map(id => fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.json()))

            Promise.all(arrayFetchId)
                .then(values => {
                    setCards(values);
                })
                .catch(err => {
                    console.log(err)
                    navigate('/error404')
                });
        }

    }, [arrayId, user])

    return {cards}
}