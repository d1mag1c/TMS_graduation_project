import React from 'react';
import {VideoTrailerBlock} from './style';
import ReactPlayer from "react-player";
import {GetVideos} from "../../../data/getVideos";
import {useParams} from "react-router-dom";

const VideoTrailer = () => {

    const params = useParams()
    const paramsId = Number(params.id)
    const videoArray = GetVideos(paramsId).video?.items

    const findURL = () => {

        if (videoArray?.length) {

            return videoArray.map(e => e.url).slice(0, 1)[0]
        } else return ''
    }
console.log(findURL())
    return (
        <>
            {videoArray &&
                < VideoTrailerBlock>
                    {paramsId && <ReactPlayer
                        className='react_player'
                        url={findURL()}/>
                    }
                </VideoTrailerBlock>}

        </>
    );
};

export default VideoTrailer;