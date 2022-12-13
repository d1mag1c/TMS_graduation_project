import {useEffect, useState} from "react";
import {CardsTopFilmsType} from "../types";

export const GetTopFilmsCards = (value: string | undefined) => {

    const [cards, setCards] = useState<CardsTopFilmsType>()
    const [page, setPage] = useState(1)

    const URLHomeCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${value}&page=${page}`;

    useEffect(() => {

            fetch(URLHomeCards, {
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


    }, [URLHomeCards, page])




    return {cards, page, setPage}


}