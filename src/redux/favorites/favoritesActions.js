import { actionTypes } from "./favoriteConstants";

export function addToFavorites(payload) {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        payload
    };
}

export function removeFromFavorites(payload) {
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        payload
    };
}