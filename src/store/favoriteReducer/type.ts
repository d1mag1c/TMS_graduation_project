import {ACTION_FAVORITE_TYPES} from "./action";

export type ActionFavoriteType = {
    type: ACTION_FAVORITE_TYPES,
    payload: {

        idFavorite?:number[]
    }
}

export type FavoriteStateType = {
    idFavorite:number[]
}

export type FavoriteReducerType = {
    favoriteReducer: FavoriteStateType
}