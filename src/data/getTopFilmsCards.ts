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
                    'X-API-KEY': '88d541ef-2a7a-4314-81cb-47abad1833b6',
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