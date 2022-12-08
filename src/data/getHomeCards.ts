import {useEffect, useState} from "react";
import {CardsHomeType} from "../types";
import {random, random2, random3} from "../constants";

export const GetHomeCards = () => {

    const [cards, setCards] = useState<CardsHomeType[]>([])
    const [page, setPage] = useState(1)
    const URLHomeCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&ratingFrom=${random}&ratingTo=10&yearFrom=${random2}&yearTo=${random3}&&page=${page}`;

// console.log(URLHomeCards)
    useEffect(() => {

        if(page < 6){
            fetch(URLHomeCards, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'd1309ff9-4ad7-4f90-a411-959371b0d2a2',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => {
                    setCards([...cards, json])
                })
                .catch(err => console.log(err))
        }
    }, [page])


        return {cards, page, setPage}


}