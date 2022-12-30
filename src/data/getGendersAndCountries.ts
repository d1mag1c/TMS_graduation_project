import {useEffect, useState} from "react";
import {GenresCountriesType} from "../types";
import {API_KEY} from "../constants";

export const GetGenresAndCountries = () => {

    const [arrayList, setArrayList] = useState<GenresCountriesType>()

    const URLGendersAndCountries = `https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`;

    useEffect(() => {

        fetch(URLGendersAndCountries, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setArrayList(json)
            )
            .catch(err => console.log(err))


    }, [URLGendersAndCountries])

    return {arrayList}
}