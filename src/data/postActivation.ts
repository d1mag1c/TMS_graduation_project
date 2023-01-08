import {useEffect, useState} from "react";

const headers = {
    'Content-Type': 'application/json;charset=utf-8'
}

export const PostActivation = (uid: string, token: string) => {

    const [stateActivation, setStateActivation] = useState(false)

    useEffect(() => {
        if(uid && token){
            console.log(uid,token)
            fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
                method: 'POST',
                body: JSON.stringify({uid, token}),
                headers
            }).then(response => {
                console.log('response', response)
                response.json()
                setStateActivation(true)
            })
                .then(data => {
                    console.log(data)
                });
        }

    }, [uid, token])

    return {stateActivation}
}