import {useEffect, useState} from "react";
import {VideoType} from "../types";
import {API_KEY} from "../constants";

export const GetVideos = (id: number) => {

    const [video, setVideo] = useState<VideoType>()

    const URLVideoCard = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`;

    useEffect(() => {

        fetch(URLVideoCard, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setVideo(json)
            )
            .catch(err => console.log(err))

    }, [id, URLVideoCard])


    return {video}
}