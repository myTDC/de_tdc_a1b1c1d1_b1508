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

export const setupAnal = () => {
    console.log('[Act/User] [setupAnal] -> ');
    return {
        type: actionType.DASH_FETCH_DAILY_COUNT
    }
}

export const writeUserPersonalInfo = (uID, uGname, uFname, uEmail, uPic, uPhone) => {
    console.log('[Act/User] [writeUserPersonalInfo]');
    const usersRef=dbRef.child('users/' + uID);

    usersRef.set({
        name: uGname+" "+uFname,
        email: uEmail,
        dp: uPic,
        mobile: uPhone
      });
    // usersRef.push({[uID]: {
    //     'Given_Name': uName
    // }});
    return{
        type: null
    }
}

export const setupPushNotifications = () =>{
    pushRef.requestPermission()//Returns a Promise
    .then(()=>{
        console.log('[Act/User] [setupPushNotifications] [Promise Lvl1] User Gave Permission');
        return pushRef.getToken();
    })
    .then((token)=>{
        console.log("[Act/User] [setupPushNotifications] [Promise Lvl2] User's Token is:", token);
    })
    .catch(() => {
        console.log("[Act/User] [setupPushNotifications] [Promise Lvl1] User Didn't Give Permission");
        //Add Logic to prompt again. Add snackbar to ask not now or never. Add trigger in settings to toggle permission if user chooses to.
    })
}