import * as actionTypes from './actionTypes';
import {authRef, provider} from '../config/fb';
// import localforage from 'localforage';

export const fbSignIn = (/*Takes Payload of the associated Action*/) => {
    return dispatch => {
        authRef.signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const userId = result.user.uid;
            const uInfo = result.additionalUserInfo;
            

            localStorage.setItem('token', token);
            localStorage.setItem('userID', userId);

            dispatch(logIn(token, user, uInfo, userId));
            // ...
          }).catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // const credential = error.credential;
            // // ...
            dispatch(logInError(errorCode, errorMessage));
        });
}};

export const logIn = (token, user, uInfo, userID) => {
    return { /*Retunrs an action*/
        type: actionTypes.AUTH_LOGIN,
        authToken: token,
        authUser: user,
        authUserInfo: uInfo,
        userId: userID
    };
};

export const logInError = (code, message) => {
    return { /*Retunrs an action*/
        type: actionTypes.AUTH_ERROR,
        errorCode: code,
        errorMessage: message
    };
};


export const logout = () => {
    localStorage.removeItem('authState');
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('authState');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch(err){
        console.log('[Act/Auth] -> [loadState()] Error Getting Serilaized State');
        return undefined;
    }
};

export const setState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('authState', serializedState);
    } catch (err) {
        console.log('[Act/Auth] -> [setState()] Error Setting Serilaized State');
    }
}