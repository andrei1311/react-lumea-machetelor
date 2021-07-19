import {
    signInWithGoogle,
    signInWithFacebook,
    signOut
} from "../../apis/firebase/firebase";

import { actionTypes } from "./userConstants";

function startLoading() {
    return {
        type: actionTypes.START_LOADING
    };
}

function updateUserData(payload) {
    return {
        type: actionTypes.UPDATE_USER_DATA,
        payload
    };
}

function updateUserError(payload) {
    return {
        type: actionTypes.UPDATE_USER_ERROR,
        payload
    };
}

export function loginGoogle() {
    return dispatch => {
        dispatch(startLoading());

        signInWithGoogle()
            .then(userData => {
                dispatch(updateUserData(userData.user));
            })
            .catch(error => {
                dispatch(updateUserError(error));
            });
    };
}

export function loginFacebook() {
    return dispatch => {
        dispatch(startLoading());

        signInWithFacebook()
            .then(userData => {
                dispatch(updateUserData(userData.user));
            })
            .catch(error => {
                dispatch(updateUserError(error));
            });
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut()
            .then(() => {
                dispatch(updateUserData(null));
            })
            .catch(error => {
                dispatch(updateUserError(error));
            });
    };
}