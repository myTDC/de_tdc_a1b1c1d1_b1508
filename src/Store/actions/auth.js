import * as actionTypes from './actionTypes';
import {authRef, getUserRef, provider} from '../config/fb';

//Actions
import * as acts from "../actions";
// import localforage from 'localforage';

const asyncTriggerReducer = (type, object) => {
	//console.log('[Act/User][asyncTrigger] Action Dispatched: ', type, ' with data: ', object);
	return {
		type: type,
		obj: object
	};
};

const writeUserPersonalInfo = (uID, uGname, uFname, uEmail, uPic, uPhone) => {
    const userInfo = {
        uID,
        uGname,
        uFname,
        uEmail,
        uPic,
        uPhone
    };
	return dispatch => {/*(dispatch, getState)*/
		//console.log("[Act/User] [writeUserPersonalInfo] State is:", getState());
		const usersRef = getUserRef(uID);
		
		usersRef.set({
			gname: uGname,
			fname: uFname,
			email: uEmail,
			dp: uPic,
			mobile: uPhone
		});
		// usersRef.push({[uID]: {
		//     'Given_Name': uName
		// }});
		
		//console.log("[Act/Auth/writeUserPersonalInfo] uInfo is:", userInfo);
		dispatch(asyncTriggerReducer(actionTypes.AUTH_SET_USERDATA, userInfo));
	};
};

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
            //console.log('[Act/Auth/FBSignin] user Info is: ', uInfo);
            //console.log('[Act/Auth/FBSignin] user Data is: ', user);
            dispatch(writeUserPersonalInfo(userId, uInfo.profile.given_name, uInfo.profile.family_name, uInfo.profile.email, uInfo.profile.picture, user.phoneNumber)); //FIXME
            //console.log("[Act/Auth] Trying Multi Dispatcher");
            if(uInfo.isNewUser)
                dispatch(acts.addTodo(userId));

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