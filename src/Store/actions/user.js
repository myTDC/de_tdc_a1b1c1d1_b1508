import * as actionType from "./actionTypes";
import {
  //articlesRef_3P,
  dbRef,
  pushRef,
  getUserRef //,
  // usrTodoRef
} from "../config/fb";

import _ from 'lodash';

//Global Variables
let dateNow = new Date();
// let timeNowOld = dateObj.getMilliseconds() + dateObj.getMinutes() + "/" + dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
let timeNow = dateNow.getTime();


// const readHistory = {
//     // new Date().getMilliseconds(): {
//     //     id: '',
//     //     title:''
//     //      url: ''
//     // }
// }
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
  };
};

export const writeUserPersonalInfo = (
  uID,
  uGname,
  uFname,
  uEmail,
  uPic,
  uPhone
) => {
  return (dispatch, getState) => {
    console.log("[Act/User] [writeUserPersonalInfo] State is:", getState());
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
    const userInfo = { uID, uGname, uFname, uEmail, uPic, uPhone };

    dispatch(asyncTriggerReducer(actionType.DASH_SET_USERDATA, userInfo));
  };
};

export const writeUserCompanyInfo = (
  uID,
  cName,
  isReg,
  doI,
  doR,
  indSec,
  prevFund,
  teamSize,
  bPlan,
  leanCanvas,
  founderObj
) => {
  console.log("[Act/User] [writeUserPersonalInfo]");
  return dispatch => {
    const usersRef = getUserRef(uID);

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

    dispatch(
      asyncTriggerReducer(actionType.DASH_SET_COMPDATA, {
        uID,
        cName,
        isReg,
        doI,
        doR,
        indSec,
        prevFund,
        teamSize,
        bPlan,
        leanCanvas,
        founderObj
      })
    );
  };
};

export const setupPushNotifications = () => {
  pushRef
    .requestPermission() //Returns a Promise
    .then(() => {
      console.log(
        "[Act/User] [setupPushNotifications] [Promise Lvl1] User Gave Permission"
      );
      return pushRef.getToken();
    })
    .then(token => {
      console.log(
        "[Act/User] [setupPushNotifications] [Promise Lvl2] User's Token is:",
        token
      );
    })
    .catch(() => {
      console.log(
        "[Act/User] [setupPushNotifications] [Promise Lvl1] User Didn't Give Permission"
      );
      //Add Logic to prompt again. Add snackbar to ask not now or never. Add trigger in settings to toggle permission if user chooses to.
    });
};

export const setVisited = item => {
  console.log("[Act/User] [setVisited] Item id is:", item);
  return {
    type: null
  };
};

export const setFavorite = item => {
  console.log("[Act/User] [setFavorite] Item id is:", item.id);
  return {
    type: null
  };
};

const fbDBUpdater = (ref, id, data) => {
  var updates = {};
  updates["/" + id] = data;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return ref.update(updates);
};

//################################################### Code to Initialize and Modfiy user ToDo data ################################################
export const addToDo = uID => {
  let todoObj = userTodo;
  let todoLastRead = userTodo[1];
  console.log("[Act/User] [addToDo] Todo Item is:", todoObj);
  return dispatch => {
    //const usersRef = getUserRef(uID);
    const todoRef = getUserRef(uID).child("todo");

    //const pushRef = todoRef.push().key;
    //console.log("[Act/User] [addToDo] pushRef is", pushRef)
    fbDBUpdater(todoRef, 1, todoLastRead);

    // todoRef.set({
    //     ...todoObj
    // });

    console.log("[Act/User] [addToDo] Todo added to firebase");

    dispatch(asyncTriggerReducer(actionType.DASH_SET_TODO, { todoLastRead }));
  };
};

//################################################### Dummy Data to supprt user ToDo data ################################################
// let userTodoSingle = {
//     title: "Continue learning where you left off",
//     desc: "Complete the last learning material you'd accessed..",
//     setOn: "" + timeNow,
//     tobecompletedBy: "30th Sept 2018",//new Date(new Date()+(12*3600)),
//     source: "User",
//     url: "",
//     isComplete: false
// }
let userTodo = {
  1: {
    title: "Continue learning where you left off",
    desc: "Complete the last learning material you'd accessed..",
    setOn: "" + timeNow,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "User",
    url: "",
    isComplete: false
  },
  2: {
    title: "Seek Investment at TDC Elevate '18",
    desc:
      "Participate in TDC Elevate through DE portal and test your knowledge by pitching directly to the investors and analysts.",
    setOn: timeNow,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  },
  3: {
    title: "Meet and Greet - Founders Club",
    desc:
      "Join fellow founders and potential investors for the much awaited fellow dinner..",
    setOn: timeNow,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  },
  4: {
    title: "Link your LinkedIn account to TDC DE",
    desc:
      "LinkedIn is a major medium for professionals and we highly recommend that you share your progress on the platform. Start by providing your linkedIn Profile Link on the dashboard",
    setOn: timeNow,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  },
  5: {
    title: "Share learn progress on facebook ",
    desc:
      "Share your leanring progress with the world so they know you're ready to face all the challenges. #AarambhHaiPrachand",
    setOn: timeNow,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  }
};
//################################################### End of Dummy Data to supprt user ToDo data ################################################

//################################################### End of Code to Initialize and Modfiy user ToDo data ################################################
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
//################################################### Code to Initialize and Modfiy user read history ################################################
export const readUserHistory = uID => {
  let hist = {};
  return async dispatch => {
    try {
      const readArts = dbRef.child("users/" + uID + "/readHistory"); //TODO: Abstract the db ref path. only get the reference variable to be returned from a function
      readArts.once("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          let childKey = childSnapshot.key;
          let childData = childSnapshot.val();
          // console.log(
          //   "[Act/User] [readFromFB] -> Data Key: ", childKey,
          //   "Data Value: ", childData
          // );
          hist[childKey] = childData;
        });
      }).then(() => dispatch(readSuccess(hist)));
    } catch (err) {
      dispatch(readFailure(err));
    }
  };
};

export const readSuccess = hist => {
  console.log("[Act/User] [readSuccess] User history read succesfuly! :)  :", hist);
  return {
    type: actionType.DASH_UPDATE_USERDATA,
    val: hist
  };
};

const readFailure = error => {
  console.log("[Act/User] [readFailure] User history read failure :(  :", error);
  return { type: null };
};

export const updateUserReadHistory = (found, uID, id, art, Readart) => {
  const readArts = dbRef.child("users/" + uID + "/readHistory");
  const contentUpdateVersion = "b1008";
  const updates = {};
  if (found) {
    let read = art[contentUpdateVersion + id];
    read.count++;
    read[read.count] = timeNow;
    updates["/" + contentUpdateVersion + "_" + id] = read;
    readArts.update(updates);
    //let newState = {};
    //newState[contentUpdateVersion+id]=read;
    art[contentUpdateVersion + id] = read;
    return {
      type: actionType.DASH_UPDATE_PROGRESS,
      val: art
    };
  } else {
    let i = 1;
    let read = {
      id: id,
      count: i
    };
    read[i] = timeNow;
    updates["/" + contentUpdateVersion + "_" + id] = read;
    readArts.update(updates);
    let newState = {};
    newState = read;
    art[contentUpdateVersion + "_" + id] = { ...art[contentUpdateVersion + "_" + id], ...newState };
    return {
      type: actionType.DASH_WRITE_PROGRESS,
      val: art
    };
  }
};

//############################################ End of Code to Initialize and Modfiy user read history ############################################

//############################################ Code to Fetch Data for Analytics based on user read history ############################################
//Julian day = Monday, Tuesday, etc. starts at 0 goes up to 6.

// const historyLoader = (id) => {
//   return (dispatch, getState) => {
//     if (getState().user.readHistory) {
//       const uReadHistory = getState().user.readHistory;
//     } else {
//       //TODO: Get dat from fb and write it in the state.
//     }


//   }
// }

export const setupAnal = (uID, userHistory) => {
  //console.log("[Act/User] [setupAnal] for uID:", uID);
  //historyLoader(uID);
  //let readHistory = {};
  return (dispatch, getState) => {
    const readHistory = userHistory;
    //let readUserHistory = Object.values(readHistory)
    //let articleArray = Object.values(this.props.articles);
    console.log("[Act/User] [setupAnal] User's reading history is:", readHistory);
    // readHistory.forEach(()=>{
    //   console.log('Read Count is:',1);
    // });
    //console.log("[Act/User] [setupAnal] readhist is:", readHistory[1]);
    dispatch(asyncTriggerReducer(actionType.DASH_FETCH_DATA, {}));
  };
};

//############################################ End of Code to Fetch Data for Analytics based on user read history ############################################

//############################################ Code to Setup User Environment ############################################

export const ecoSet = uID => {

}

//############################################ End of Code to Setup User Environment ############################################

//############################################ Code to Fetch Data for Analytics based on user read history ############################################

//############################################ End of Code to Fetch Data for Analytics based on user read history ############################################

//let sUser;
//let sAuth;
// let sContent;

// const loadState = () => (dispatch, getState) => {
//   const cState = getState();
//   //sUser = cState.user;
//   //sAuth = cState.auth;
//   sContent = cState.content;

//   dispatch(() => {
//     console.log('[Act/User][loadState] State loaded', cState);
//     getContentBuildVersion(sContent);
//   })
// };

// const getContentBuildVersion = (content) => {
//   //loadState();
//   return content.updateVer;
// };