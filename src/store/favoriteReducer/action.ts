
export enum ACTION_FAVORITE_TYPES {
    GET_ID_FAVORITE = "GET_ID_FAVORITE"
}

export const addToFavorites = (arrayFavorites: number[]) => ({
    type: ACTION_FAVORITE_TYPES.GET_ID_FAVORITE,
    payload: {
        idFavorite: arrayFavorites
    }
})