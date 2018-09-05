import * as actionType from './actionTypes';
import {    //articlesRef_3P, 
    dbRef,
    pushRef//, 
    // usrTodoRef 
} from '../config/fb';

// let artStored = [
//     {"ver": contentUpdateVer, 
//     "id": 31, 
//     "title": "How We Decided To Split Equity As Co-Founders", 
//     "url": "https://entrepreneurshandbook.co/how-we-decided-to-split-equity-as-co-founders-of-digital-press-cffd464232dd",
//     "image": "https://cdn-images-1.medium.com/max/2000/1*9yqQX9xPZ95KisyOlHkWGQ.jpeg", 
//     "category": "Best Practices", 
//     "length": "4 Mins", 
//     "read": 0, 
//     "author": "Nicolas Cole", 
//     "publisher": "Medium/Entrepreneur's Handbook"},
// ];

const asyncTriggerReducer = (type, object) => {
    return {
        type: type,
        obj: object
    }
}

export const setupAnal = () => {
    console.log('[Act/User] [setupAnal] -> ');
    return {
        type: actionType.DASH_FETCH_DATA
    }
}


export const writeUserPersonalInfo = (uID, uGname, uFname, uEmail, uPic, uPhone) => {
    return (dispatch,getState) => {
        console.log('[Act/User] [writeUserPersonalInfo] State is:', getState());
        const usersRef = dbRef.child('users/' + uID);

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
        const userInfo = { uID, uGname, uFname, uEmail, uPic, uPhone };

        dispatch(asyncTriggerReducer(actionType.DASH_SET_USERDATA, userInfo));
    };

}

export const writeUserCompanyInfo = (uID, cName, isReg, doI, doR, indSec, prevFund, teamSize, bPlan, leanCanvas, founderObj) => {
    console.log('[Act/User] [writeUserPersonalInfo]');
    return dispatch => {
        const usersRef = dbRef.child('users/' + uID);

        usersRef.set({
            company: {
                name: cName,
                isRegistered: isReg,
                dateOfInception: doI,
                dateOfRegistration: doR,
                industrySector: indSec,
                previousFunding: prevFund,
                teamSize: teamSize,
                bplan: bPlan,
                leancanvas: leanCanvas,
                founders: founderObj
            }
        });

        dispatch(asyncTriggerReducer(actionType.DASH_SET_COMPDATA, { uID, cName, isReg, doI, doR, indSec, prevFund, teamSize, bPlan, leanCanvas, founderObj }));
    };


};

export const setupPushNotifications = () => {
    pushRef.requestPermission()//Returns a Promise
        .then(() => {
            console.log('[Act/User] [setupPushNotifications] [Promise Lvl1] User Gave Permission');
            return pushRef.getToken();
        })
        .then((token) => {
            console.log("[Act/User] [setupPushNotifications] [Promise Lvl2] User's Token is:", token);
        })
        .catch(() => {
            console.log("[Act/User] [setupPushNotifications] [Promise Lvl1] User Didn't Give Permission");
            //Add Logic to prompt again. Add snackbar to ask not now or never. Add trigger in settings to toggle permission if user chooses to.
        })
};

export const setVisited = (item) => {
    console.log("[Act/User] [setVisited] Item id is:", item.id);
    return {
        type: null
    }
}

export const setFavorite = (item) => {
    console.log("[Act/User] [setFavorite] Item id is:", item.id);
    return {
        type: null
    }
}
// const listenToFB = () => {

// };
/* Dispatch and getstate Example
export function fetchPostsIfNeeded(subreddit) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.
  ​
    // This is useful for avoiding a network request if
    // a cached value is already available.
  ​
    return (dispatch, getState) => {
      if (shouldFetchPosts(getState(), subreddit)) {
        // Dispatch a thunk from thunk!
        return dispatch(fetchPosts(subreddit))
      } else {
        // Let the calling code know there's nothing to wait for.
        return Promise.resolve()
      }
    }
  }
  */