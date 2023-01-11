import {useEffect, useState} from "react";
import {CardsTopFilmsType} from "../types";
import {API_KEY} from "../constants";
import {useNavigate} from "react-router-dom";

export const GetTopFilmsCards = (value: string | undefined) => {

    const [cards, setCards] = useState<CardsTopFilmsType>()
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const URLHomeCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${value}&page=${page}`;

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
                .catch(err => {
                    console.log(err)
                    if(value !== 'TOP_AWAIT_FILMS'){
                        navigate('/error404')
                    }
                })


    }, [URLHomeCards, page])




    return {cards, page, setPage}


}