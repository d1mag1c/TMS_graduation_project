import {ActionFavoriteType, FavoriteStateType} from "./type";
import {ACTION_FAVORITE_TYPES} from "./action";

const initialFavoritesState: FavoriteStateType = {
    idFavorite: []
};



export const favoriteReducer = (state = initialFavoritesState, action: ActionFavoriteType) => {
    switch (action.type) {
        case ACTION_FAVORITE_TYPES.GET_ID_FAVORITE:
            return {...state, idFavorite: action.payload.idFavorite}
        default:
            return {...state}
    }
}
