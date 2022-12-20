import React, {useEffect, useState} from 'react';
import {VideoTrailerBlock} from './style';
import ReactPlayer from "react-player";
import {GetVideo} from "../../../data/getVideo";

type paramsIdType = {
    paramsId: number
}

const VideoTrailer = ({paramsId}: paramsIdType) => {

    const videoArray = GetVideo(paramsId).video?.items
    const [NewUrl, setNewUrl] = useState('')

    useEffect(() => {

        if(videoArray) {
            setNewUrl(videoArray.filter(e => e.url?.includes('youtube'))[0]?.url)
            // setNewUrl(videoArray.find(e => e.url?.includes('youtube')).url)
        } else setNewUrl('')

    },[videoArray, paramsId, NewUrl])

    return (
        <>
            {NewUrl &&
                < VideoTrailerBlock>
                    <ReactPlayer
                        url={NewUrl}/>
                </VideoTrailerBlock>}

        </>
    );
};

export default VideoTrailer;