import { actionTypes } from "./cartConstants";

export function addToCart(payload) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload
    };
}

export function removeFromCart(payload) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload
    };
}