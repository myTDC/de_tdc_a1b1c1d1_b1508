import * as actionType from "./actionTypes";
import {
  //articlesRef_3P,
  dbRef,
  pushRef,
  getUserRef //,
  // usrTodoRef
} from "../config/fb";

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

export const setupAnal = uID => {
  console.log("[Act/User] [setupAnal] for uID:", uID);
  return {
    type: actionType.DASH_FETCH_DATA
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
let dateObj = new Date();
// let todayOld = dateObj.getMilliseconds() + dateObj.getMinutes() + "/" + dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
let today = dateObj.getTime();
// let userTodoSingle = {
//     title: "Continue learning where you left off",
//     desc: "Complete the last learning material you'd accessed..",
//     setOn: "" + today,
//     tobecompletedBy: "30th Sept 2018",//new Date(new Date()+(12*3600)),
//     source: "User",
//     url: "",
//     isComplete: false
// }
let userTodo = {
  1: {
    title: "Continue learning where you left off",
    desc: "Complete the last learning material you'd accessed..",
    setOn: "" + today,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "User",
    url: "",
    isComplete: false
  },
  2: {
    title: "Seek Investment at TDC Elevate '18",
    desc:
      "Participate in TDC Elevate through DE portal and test your knowledge by pitching directly to the investors and analysts.",
    setOn: today,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  },
  3: {
    title: "Meet and Greet - Founders Club",
    desc:
      "Join fellow founders and potential investors for the much awaited fellow dinner..",
    setOn: today,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  },
  4: {
    title: "Link your LinkedIn account to TDC DE",
    desc:
      "LinkedIn is a major medium for professionals and we highly recommend that you share your progress on the platform. Start by providing your linkedIn Profile Link on the dashboard",
    setOn: today,
    tobecompletedBy: "30th Sept 2018", //new Date(new Date()+(12*3600)),
    source: "System",
    url: "",
    isComplete: false
  },
  5: {
    title: "Share learn progress on facebook ",
    desc:
      "Share your leanring progress with the world so they know you're ready to face all the challenges. #AarambhHaiPrachand",
    setOn: today,
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
      const readArts = dbRef.child("users/" + uID + "/readHistory");
      readArts
        .once("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            console.log(
              "[Act/Content] [readFromFB] -> Data Key: ",
              childKey,
              "Data Value: ",
              childData
            );
            hist[childKey] = childData;
          });
        })
        .then(() => dispatch(readSuccess(hist)));
    } catch (err) {
      dispatch(readFailure(err));
    }
  };
};

export const readSuccess = hist => {
  console.log("User history read succesfuly! :): ", hist);
  return {
    type: actionType.DASH_UPDATE_USERDATA,
    val: hist
  };
};

const readFailure = error => {
  console.log("User history read failure :(: ", error);
  return { type: null };
};

export const updateUserReadHistory = (found, uID, id, art, Readart) => {
  const readArts = dbRef.child("users/" + uID + "/readHistory");
  const updates = {};
  if (found) {
    let read = art["b1008" + id];
    read.count++;
    read[read.count] = new Date();
    updates["/" + "b1008" + id] = read;
    readArts.update(updates);
    //let newState = {};
    //newState["b1008"+id]=read;
    art["b1008" + id] = read;
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
    read[i] = new Date();
    updates["/" + "b1008" + id] = read;
    readArts.update(updates);
    let newState = {};
    newState = read;
    art["b1008" + id] = { ...art["b1008" + id], ...newState };
    return {
      type: actionType.DASH_WRITE_PROGRESS,
      val: art
    };
  }
};

//################################################### End of Code to Initialize and Modfiy user read history ################################################
