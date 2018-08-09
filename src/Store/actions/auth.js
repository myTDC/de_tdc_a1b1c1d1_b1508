import * as actionTypes from './actionTypes';
import {authRef, provider} from '../config/fb';
import localforage from 'localforage';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, expTime, user, uInfo, userID) => {
    return { /*Returns an action*/
        type: actionTypes.AUTH_SUCCESS,
        authToken: token,
        authExpTime: expTime,
        authUser: user,
        authUserInfo: uInfo,
        userId: userID
    };
};

export const loginSuccess = (token, user, uInfo, userID) => {
    return { /*Returns an action*/
        type: actionTypes.AUTH_LOGIN,
        authToken: token,
        authUser: user,
        authUserInfo: uInfo,
        userId: userID
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logInError = (code, message) => {
    return { /*Retunrs an action*/
        type: actionTypes.AUTH_ERROR,
        errorCode: code,
        errorMessage: message
    };
};

export const fbSignIn = (/*Takes Payload of the associated Action*/) => {
    return dispatch => {
        authRef.signInWithPopup(provider).then(result => {
            console.log('[Act/Auth] Inside FB SignIn', result);
            const accessToken = result.credential.accessToken;  // This gives you a Google Access Token. You can use it to access the Google API.

            const user = result.user;
            const userId = result.user.uid;
            const uInfo = result.additionalUserInfo;    // The signed-in user info.

            // dispatch(setupAutoLogin(accessToken, user, uInfo, userId));
            dispatch(loginSuccess(accessToken, user, uInfo, userId));
            setupAutoLogin(accessToken, user, uInfo, userId);
            console.log('[Acts/Auth] Login complete');

          }).catch(error => {
            const errorCode = error.code;           // Handle Errors here.
            const errorMessage = error.message;
            // const email = error.email;           // The email of the user's account used.
            // const credential = error.credential; // // The firebase.auth.AuthCredential type that was used.
            dispatch(logInError(errorCode, errorMessage));
        });
}};

export const logout = () => {
    console.log('[Acts/auth] -> Inside logout Action');
    localforage.removeItem('accessToken');
    localforage.removeItem('userID');
    localforage.removeItem('userGivenName');
    localforage.removeItem('userFamilyName');
    localforage.removeItem('userPicUrl');
    localforage.removeItem('userEmail');
    localforage.removeItem('userPhoneNumber');

    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('userID');
    // localStorage.removeItem('userGivenName');
    // localStorage.removeItem('userFamilyName');
    // localStorage.removeItem('userPicUrl');
    // localStorage.removeItem('userEmail');
    // localStorage.removeItem('userPhoneNumber');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime); //value in miliseconds
//     };
// };
export const setupAutoLogin = (token, user, uInfo, uId) => {
    localStorage.setItem('accessToken', token);
    localforage.setItem('accessToken', token);
    localforage.setItem('userID', uId);
    localforage.setItem('userGivenName', uInfo.profile.given_name);
    localforage.setItem('userFamilyName', uInfo.profile.family_name);
    localforage.setItem('userPicUrl', uInfo.profile.picture);
    localforage.setItem('userEmail', uInfo.profile.email);
    localforage.setItem('userPhoneNumber', user.phoneNumber);
    return{
        type: actionTypes.AUTH_AUTO_LOGIN_PREP
    };
    // console.log("Login Data:" , user.metadata);
};

const initAutoLogin = (currentToken) => {
    console.log('[Acts/auth] -> [initAutoLogin] -> Token Value:', currentToken, 'Attempting AutoLogin');
    return{
        type: actionTypes.AUTH_AUTO_LOGIN,
        token: localforage.getItem('accessToken'),
        uId: localforage.getItem('userID'),
        gname: localforage.getItem('userGivenName'),
        fname: localforage.getItem('userFamilyName'),
        pic: localforage.getItem('userPicUrl'),
        email: localforage.getItem('userEmail'),
        num: localforage.getItem('userPhoneNumber')
    };
};

export const checkAuthState = () => {
    return dispatch => {         
        let currentToken = localStorage.getItem('accessToken');
        // const currentToken = localStorage.getItem('accessToken');
        console.log('[Acts/auth] -> [checkAuthState] Current Auth Token is: ', currentToken || 'Not Stored. Clearing Storage');

        if(!currentToken) {
            console.log('[Acts/auth] -> Token Value:', currentToken, 'Logging Out Now');
            dispatch(logout());
        }
        else {
            console.log('[Acts/auth] -> Token Value:', currentToken, 'Attempting AutoLogin');
            dispatch(initAutoLogin(currentToken));
        }
    };
};


/* Old Code with additional Comments and experiments */
// export const fbSignIn = (/*Takes Payload of the associated Action*/) => {
//     return dispatch => {
//         authRef.signInWithPopup(provider).then(result => {
//             console.log('Inside FB SignIn', result);
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const accessToken = result.credential.accessToken;
//             //const expirationTime = result.user.stsTokenManager.expirationTime;
//             //console.log('Expiration Timer Stored', expirationTime);

//             // The signed-in user info.
//             const user = result.user;
//             const userId = result.user.uid;
//             const uInfo = result.additionalUserInfo;

//             //localStorage.setItem('expirationTime', expirationTime); //Can't Be Accessed.
//             // localStorage.setItem('userSchema', user);           //To Be removed post Dev
//             // localStorage.setItem('userInfoSchema', uInfo);      //To Be removed post Dev

//             dispatch(setupAutoLogin(accessToken, user, uInfo, userId));
//             dispatch(loginSuccess(accessToken, user, uInfo, userId));
//             //dispatch(authSuccess(accessToken, expirationTime, user, uInfo, userId));
//             // ...
//           }).catch(error => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             // const email = error.email;
//             // // The firebase.auth.AuthCredential type that was used.
//             // const credential = error.credential;
//             // // ...
//             dispatch(logInError(errorCode, errorMessage));
//         });
// }};


// export const checkAuthState = () => {
//     return dispatch => {
//         //dispatch(fbSignIn());
            
//         const currentToken = localStorage.getItem('accessToken');
//         console.log('Current Auth Token is: ',currentToken);

//         if(!currentToken) {
//             dispatch(logout());
//         }
//         else {
//             dispatch(initAutoLogin());
//         }

//         // if (!currentToken) {
//         //     dispatch(logout());
//         // } else {
//         //     const expirationTime = new Date(localStorage.getItem('expirationTime'));
//         //     console.log(expirationTime);
//         //     if (expirationTime <= new Date()) {
//         //         dispatch(logout());
//         //     } else {
//         //         const userId = localStorage.getItem('userId');
//         //         const user = localStorage.getItem('user');
//         //         const uInfo = localStorage.getItem('userInfo');

//         //         dispatch(authSuccess(currentToken, expirationTime, user, uInfo, userId));
//         //         dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime()) / 1000 ));
//         //     }   
//         // }
//     };
// };