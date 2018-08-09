import * as actionTypes from './actionTypes';
import {authRef, provider} from '../config/fb';
import localforage from 'localforage';
import _ from 'lodash';

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
            console.log('Inside FB SignIn', result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const accessToken = result.credential.accessToken;
            //const expirationTime = result.user.stsTokenManager.expirationTime;
            //console.log('Expiration Timer Stored', expirationTime);

            // The signed-in user info.
            const user = result.user;
            const userId = result.user.uid;
            const uInfo = result.additionalUserInfo;
            
            //localStorage.setItem('expirationTime', expirationTime); //Can't Be Accessed.
            // localStorage.setItem('userSchema', user);           //To Be removed post Dev
            // localStorage.setItem('userInfoSchema', uInfo);      //To Be removed post Dev

            // dispatch(setupAutoLogin(accessToken, user, uInfo, userId));
            dispatch(loginSuccess(accessToken, user, uInfo, userId));
            //dispatch(authSuccess(accessToken, expirationTime, user, uInfo, userId));
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

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('userGivenName');
    localStorage.removeItem('userFamilyName');
    localStorage.removeItem('userPicUrl');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPhoneNumber');
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
export const setupAutoLogin = () =>{
    return{
        type: actionTypes.AUTH_AUTO_LOGIN_PREP
    }
    // console.log("Login Data:" , user.metadata);
}

const initAutoLogin = () => {
    return{
        type: actionTypes.AUTH_AUTO_LOGIN
    }
}

export const checkAuthState = () => {
    return dispatch => {         
        const currentToken = localStorage.getItem('accessToken');
        console.log('Current Auth Token is: ', currentToken|| 'Not Stored. Clearing Storage');

        if(!currentToken) {
            dispatch(logout());
        }
        else {
            dispatch(initAutoLogin());
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