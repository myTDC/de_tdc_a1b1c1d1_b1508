import * as actionTypes from './actionTypes';
import {authRef, provider} from '../config/fb';

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
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

// export const authStart = () => {
//     return {
//         type: actionTypes.AUTH_START
//     };
// };

// export const authSuccess = (token, userId) => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         idToken: token,
//         userId: userId
//     };
// };

// export const authFail = (error) => {
//     return {
//         type: actionTypes.AUTH_FAIL,
//         error: error
//     };
// };

// export const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationDate');
//     localStorage.removeItem('userId');
//     return {
//         type: actionTypes.AUTH_LOGOUT
//     };
// };

// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime * 1000);
//     };
// };

// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem('expirationDate'));
//             if (expirationDate <= new Date()) {
//                 dispatch(logout());
//             } else {
//                 const userId = localStorage.getItem('userId');
//                 dispatch(authSuccess(token, userId));
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
//             }   
//         }
//     };
// };
// export const authStart = () => {
//     return {
//         type: actionTypes.AUTH_START
//     };
// };

// export const authSuccess = (token, userId) => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         idToken: token,
//         userId: userId
//     };
// };

// export const authFail = (error) => {
//     return {
//         type: actionTypes.AUTH_FAIL,
//         error: error
//     };
// };


// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime * 1000);
//     };
// };

// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem('expirationDate'));
//             if (expirationDate <= new Date()) {
//                 dispatch(logout());
//             } else {
//                 const userId = localStorage.getItem('userId');
//                 dispatch(authSuccess(token, userId));
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
//             }   
//         }
//     };
// };