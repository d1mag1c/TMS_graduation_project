import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useFavoriteSelector, useUserSelector} from "../store";
import {addToFavorites} from "../store/favoriteReducer/action";

export const FavoriteHook = (id: number) => {

    const user = useUserSelector(state => state.authReducer.user?.username)
    const findUser = JSON.parse(localStorage.getItem(`${user}`)!);
    const favoritesIdArray = useFavoriteSelector(state => state.favoriteReducer.idFavorite)

    const [stateId, setStateId] = useState(findUser?.favorites.find((e: number) => e === id)!)
    const dispatch = useDispatch();

    const addId = () => {

        if (user) {
            if (stateId) {
                dispatch(addToFavorites([...favoritesIdArray].filter(e => e !== id)))
                setStateId(undefined)

            } else {
                dispatch(addToFavorites([...favoritesIdArray, id]))
                setStateId(id)
            }
        }
    }

    useEffect(() => {
        if (user && favoritesIdArray.length) {
            localStorage.setItem(`${user}`, JSON.stringify({favorites: favoritesIdArray}))
        }
    }, [stateId])


    return {stateId, addId};
};
