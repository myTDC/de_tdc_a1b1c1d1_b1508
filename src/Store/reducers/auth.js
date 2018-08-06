import * as actionTypes from '../actions/actionTypes';

const initState = {
    isAuth: false,
    token: null,
    user: null,
    userInfo: null,
    userId: null,
    userName: null,
    userPicUrl: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
    //
};

const updateState = (state, updater) => { return{...state ,...updater}; };

const authSuccess = (state, action) => {

};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN:
            return updateState(state, {token: action.authToken, user: action.authUser, userInfo:action.authUserInfo, userName: action.authUser.displayName});//action.res || null;
        case actionTypes.AUTH_LOGOUT:
            return action.res;
        default:
            return state;
    }
};

