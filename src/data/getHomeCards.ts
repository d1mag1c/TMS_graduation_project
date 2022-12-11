import {useEffect, useState} from "react";
import {CardsHomeType} from "../types";
import {random, random2, random3} from "../constants";



export const GetHomeCards = (type: string) => {

    const [cards, setCards] = useState<CardsHomeType[]>([])
    const [page, setPage] = useState(1)

    const URLHomeCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=${type}&ratingFrom=${random}&ratingTo=10&yearFrom=${random2}&yearTo=${random3}&&page=${page}`;

// console.log(URLHomeCards)
    useEffect(() => {

        if (page < 6) {
            fetch(URLHomeCards, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '88d541ef-2a7a-4314-81cb-47abad1833b6',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => {
                    setCards([...cards, json])
                })
                .catch(err => console.log(err))
        }

    }, [page, URLHomeCards])


    return {cards, page, setPage}


}