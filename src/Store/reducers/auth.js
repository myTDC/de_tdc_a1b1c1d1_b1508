import * as actionTypes from '../actions/actionTypes';

const initState = {
    user: {
        TEST_USER_RAW: null,
        TEST_USERINFO_RAW: null,
        token: null,
        Id: null,
        GivenName: null,
        FamilyName: null,
        PicUrl: null,
        Email: null,
        PhoneNumber: null,
        test: 'TESTER IS ON'
    },
    error: null,
    loading: false,
    autoLoginSetup: false,
    autoLoginInit: false,
    authRedirectPath: '/'
};


const updateObject = (baseObject, updater) => { return{...baseObject ,...updater}; };

const authStart = ( state ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    console.log('[Red/auth] -> [authSuccess] Authentication Successful');
    //console.log('User Initial State', state);

    const user = {...state.user};
    //console.log('Initial User', user);

    return updateObject(state, { 
        error: null,
        loading: false,
        user: {
            ...user,
            token: action.authToken,
            Id: action.userId,
            GivenName: action.authUserInfo.profile.given_name,
            FamilyName: action.authUserInfo.profile.family_name,
            PicUrl: action.authUserInfo.profile.picture,
            Email: action.authUserInfo.profile.email,
            PhoneNumber: action.authUser.phoneNumber || 'No Number Given by User'
    }});
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const logoutInit = (state) => {
    console.log('[Red/auth] -> Logout Initiated');
    return updateObject(state, initState);
};

const autoLoginSetup = (state, action) => {
    if(state.user.token){
        // console.log('Autologin is being Set Up');
        // localStorage.setItem('accessToken', state.user.token);
        // localStorage.setItem('userID', state.user.Id);
        // localStorage.setItem('userGivenName', state.user.GivenName);
        // localStorage.setItem('userFamilyName', state.user.FamilyName);
        // localStorage.setItem('userPicUrl', state.user.PicUrl);
        // localStorage.setItem('userEmail', state.user.Email);
        // localStorage.setItem('userPhoneNumber', state.user.PhoneNumber);
        //console.log("Login Data:" , user.metadata);
        return updateObject(state, { autoLoginSetup: true });
    }
    else {
        console.log('[Red/auth] -> User Needs to Login before Autologin can be Set Up')
        return updateObject(state, { autoLoginSetup: false });
    }
}

const autoLoginInit = (state, action) => {
    if(state.user.autoLoginSetup){
        console.log('[Red/auth] -> Autologin Initiated');
        const user = {...state.user};
        return updateObject(state, { 
            autoLoginInit: true,
            user: {
                ...user,
                token: action.token,
                Id: action.uId,
                GivenName: action.gname,
                FamilyName: action.fname,
                PicUrl: action.pic,
                Email: action.email,
                PhoneNumber: action.num
        }});

        /* 
        token: localStorage.getItem('accessToken'),
        Id: localStorage.getItem('userID'),
        GivenName: localStorage.getItem('userGivenName'),
        FamilyName: localStorage.getItem('userFamilyName'),
        PicUrl: localStorage.getItem('userPicUrl'),
        Email: localStorage.getItem('userEmail'),
        PhoneNumber: localStorage.getItem('userPhoneNumber'),
        */
    }
    else {
        console.log("[Red/auth] -> [autoLoginInit] User Hasn't Logged In Even Once");
        return state;
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGIN: return authSuccess(state, action);
        case actionTypes.AUTH_AUTO_LOGIN: return autoLoginInit(state, action);
        case actionTypes.AUTH_AUTO_LOGIN_PREP: return autoLoginSetup(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return logoutInit(state);
        default: return state;
    }
};

/*Experimental and Other stuff with additional comments*/
// const authSuccess = (state, action) => {
//     console.log('Authentication Successful');
//     // //Extracting Values from User Object
//     // const uPhNum = action.authUser.phoneNumber;
//     // //Extracting Values from UserInfo Object
//     // const uFName = action.authUserInfo.profile.given_name;
//     // const uLName = action.authUserInfo.profile.family_name;
//     // const uEmail = action.authUserInfo.profile.email;
//     // const uPic = action.authUserInfo.profile.picture;

    

//     //const oldState = {...state}

//     console.log('User Initial State', state);

//     const user = {...state.user};
//     console.log('Initial User', user);

//     // const newState = { user: {
//     //     ...user,
//     //     isAuth: true,
//     //     token: action.authToken,
//     //     Id: action.userId,
//     //     GivenName: action.authUserInfo.profile.given_name,
//     //     FamilyName: action.authUserInfo.profile.family_name,
//     //     PicUrl: action.authUserInfo.profile.picture,
//     //     Email: action.authUserInfo.profile.email,
//     //     PhoneNumber: action.authUser.phoneNumber || 'No Number Given',
//     // }};
//     // console.log('New User', newUser);
//     // console.log('User update State', uFName, uLName, uPhNum, uEmail, uPic);

//     // localStorage.setItem('userGivenName', uFName);
//     // localStorage.setItem('userFamilyName', uLName);
//     // localStorage.setItem('userPhoneNumber', uPhNum);
//     // localStorage.setItem('userEmail', uEmail);
//     // localStorage.setItem('userPic', uPic);
//     // return updateObject(state, newState);


//     return updateObject(state, { 
//         error: null,
//         loading: false,
//         user: {
//             ...user,
//             token: action.authToken,
//             Id: action.userId,

//             //TEST_USER_RAW: action.authUser,
//             //TEST_USERINFO_RAW: action.authUserInfo,

//             GivenName: action.authUserInfo.profile.given_name,
//             FamilyName: action.authUserInfo.profile.family_name,
//             PicUrl: action.authUserInfo.profile.picture,
//             Email: action.authUserInfo.profile.email,
//             PhoneNumber: action.authUser.phoneNumber || 'No Number Given by User'
//     }});
// };