import * as actionType from "./actionTypes";
import {
	//articlesRef_3P,
	dbRef,
	pushRef,
	getUserRef //,
	// usrTodoRef
} from "../config/fb";

//import _ from 'lodash';

//Global Variables
let dateNow = new Date();
// let timeNowOld = dateObj.getMilliseconds() + dateObj.getMinutes() + "/" + dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
let timeNow = dateNow.getTime();
let timeCompleteby_d1 = timeNow+86400000;
let timeCompleteby_d15 = timeNow+1296000000;
let timeCompleteby_d30 = timeNow+2592000000;

//################ Common Helper Functions ################
const asyncTriggerReducer = (type, object) => {
	console.log('[Act/User][asyncTrigger] Action Dispatched: ', type, ' with data: ', object);
	return {
		type: type,
		obj: object
	};
};

const fbDBUpdater = (ref, id, data) => {
	let updates = {};
	updates["/" + id] = data;
	//updates['/user-posts/' + uid + '/' + newPostKey] = postData;
	return ref.update(updates);
};

const readSuccess = (source, data, actType) => {
	console.log("[Act/User] [readSuccess] " + source + " read succesfuly! :)  :", data);
	return {
		type: actType,
		val: data
	};
};

const readFailure = (source, error) => {
	console.log("[Act/User] [readFailure] " + source + " read failure :(  :", error);
	return {
		type: null
	};
};

export const writeSuccess = (source, data, actType) => {
	console.log("[Act/User] [writeSuccess] " + source + " read succesfuly! :)  :", data);
	return {
		type: actType,
		val: data
	};
};

const writeFailure = (source, error) => {
	console.log("[Act/User] [readFailure] " + source + " read failure :(  :", error);
	return {
		type: null
	};
};
//################ End of Common Helper Functions ################

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
		const userInfo = {
			uID,
			uGname,
			uFname,
			uEmail,
			uPic,
			uPhone
		};

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



//################################################### Code to Initialize and Modfiy user ToDo data ################################################
export const addTodo = uID => {
	let todoObj = userTodo; //TODO: Adds all the todo list items to fb.
	//let todoLastRead = userTodo[1]; //TODO: Only adds the first item in the list

	console.log("[Act/User] [addToDo] Todo Item is:", todoObj);
	return dispatch => {
		//const usersRef = getUserRef(uID);
		const todoRef = getUserRef(uID).child("todo");

		try {
			//const pushRef = todoRef.push().key;
			//console.log("[Act/User] [addToDo] pushRef is", pushRef)
			//fbDBUpdater(todoRef, 1, todoLastRead);
			//fbDBUpdater(todoRef, 1, todo);
			todoRef.set({
				...todoObj
			});

			console.log("[Act/User] [addToDo] Todo added to firebase");

			dispatch(asyncTriggerReducer(actionType.DASH_SET_TODO, {
				...todoObj
			}));
		} catch (err) {
			writeFailure('addTodo', err);
		}

	};
};

export const readTodo = uID => {
	return async dispatch => {
		let userTodos = {};
		try { //TODO: Abstract the db ref path. only get the reference variable to be returned from a function
			const todoRef = getUserRef(uID).child("todo");
			todoRef.once("value", function (snapshot) {
				//console.log('Snap', snapshot);
				snapshot.forEach(function (childSnapshot) {
					//let todoKey = childSnapshot.key;
					let todoData = childSnapshot.val();
					userTodos = {
						...userTodos,
						todoKey: todoData
					}
					//console.log("[Act/User] [addToDo] Todo read from firebase", {userTodos});
				});
				console.log('[Act/User] [readTodo] todolist is: ', userTodos);
				dispatch(asyncTriggerReducer(actionType.DASH_SET_TODO, userTodo //{ ...userTodos }
				));
			}).then(() => dispatch(readSuccess('readTodo', userTodos, null)));
		} catch (err) {
			dispatch(readFailure(err));
		}
	};
}

//################################################### Dummy Data to supprt user ToDo data ################################################
//getTime gives value in miliseconds
//30 days = 2592000000 miliseconds
let userTodo = {
	1: {
		title: "Continue learning where you left off",
		desc: "Complete the last learning material you'd accessed..",
		setOn: timeNow,
		tobecompletedBy: timeCompleteby_d1, //new Date(new Date()+(12*3600)),
		source: "User",
		url: "",
		isComplete: false
	},
	2: {
		title: "Seek Investment at TDC Elevate '18",
		desc: "Participate in TDC Elevate through DE portal and test your knowledge by pitching directly to the investors and analysts.",
		setOn: timeNow,
		tobecompletedBy: timeCompleteby_d30, //new Date(new Date()+(12*3600)),
		source: "System",
		url: "",
		isComplete: false
	},
	3: {
		title: "Fill Up the Lean Canvas",
		desc: "Use the powers of the lean canvas to find out the gaps and biases in your idea",
		setOn: timeNow,
		tobecompletedBy: timeCompleteby_d15, //new Date(new Date()+(12*3600)),
		source: "System",
		url: "",
		isComplete: false
	},
	4: {
		title: "Do a SWOT Analysis for your team",
		desc: "Gain control over the unknowns by knowing where you are at right now. Map out your Strengths Weaknesses Opportunities and Threats",
		setOn: timeNow,
		tobecompletedBy: timeCompleteby_d15, //new Date(new Date()+(12*3600)),
		source: "System",
		url: "",
		isComplete: false
	},
	5: {
		title: "Prioritize your tasks via Eisenhower Matrix",
		desc: "User the wisdom of Dwight D. Eisenhower the 34th President of the US to Bring Clarity and make the most out of your work hours",
		setOn: timeNow,
		tobecompletedBy: timeCompleteby_d1, //new Date(new Date()+(12*3600)),
		source: "System",
		url: "",
		isComplete: false
	}
};
//################################################### End of Dummy Data to supprt user ToDo data ################################################

//################################################### End of Code to Initialize and Modfiy user ToDo data ################################################

//################################################### Code to Initialize and Modfiy user read history ################################################
export const readUserHistory = uID => {
	let hist = {};
	return async dispatch => {

		const readArts = dbRef.child("users/" + uID + "/readHistory"); //TODO: Abstract the db ref path. only get the reference variable to be returned from a function
		readArts.once("value", function (snapshot) {
			try {
				snapshot.forEach(function (childSnapshot) {
					let childKey = childSnapshot.key;
					let childData = childSnapshot.val();
					// console.log(
					//   "[Act/User] [readFromFB] -> Data Key: ", childKey,
					//   "Data Value: ", childData
					// );
					hist[childKey] = childData;
				});
				if (Object.keys(hist).length !== 0)
					dispatch(setupAnal(uID, hist)).then(() => dispatch(uReadSuccess(hist)));
			} catch (err) {
				dispatch(uReadFailure(err));
			};
		})
	};
};

const uReadSuccess = hist => {
	console.log("[Act/User] [uReadSuccess] User history read succesfuly! :)  :", hist);
	return {
		type: actionType.DASH_SET_USERHISTORY,
		val: hist
	};
};

const uReadFailure = error => {
	console.log("[Act/User] [uReadFailure] User history read failure :(  :", error);
	return {
		type: null
	};
};

export const updateUserReadHistory = (found, uID, id, art, Readart) => {
	//Called in Container/Learn
	const readArts = dbRef.child("users/" + uID + "/readHistory");
	const contentUpdateVersion = "b1008";
	const updates = {};

	readArts.update({
		[contentUpdateVersion + "_" + 0]: id
	}); //Storing the last read article as cVer_0 : id
	return async dispatch => {
		if (found) {
			let read = art[contentUpdateVersion + "_" + id];
			read.count++;
			read[read.count] = timeNow;
			updates["/" + contentUpdateVersion + "_" + id] = read;
			readArts.update(updates);
			//let newState = {};
			//newState[contentUpdateVersion+id]=read;
			art[contentUpdateVersion + "_" + id] = read;
			dispatch(setupAnal(uID, art));
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
			art[contentUpdateVersion + "_" + id] = { ...art[contentUpdateVersion + "_" + id],
				...newState
			};
			dispatch(setupAnal(uID, art));
			return {
				type: actionType.DASH_WRITE_PROGRESS,
				val: art
			};
		}
	};
};

export const updateLastRead = (uID, artObj) => {
	let todoLastRead = artObj; //TODO: Only adds the first item in the list

	console.log("[Act/User] [updateLastRead] New Todo Item is:", artObj);
	return dispatch => {
		//const usersRef = getUserRef(uID);
		const todoRef = getUserRef(uID).child("todo");

		//const pushRef = todoRef.push().key;
		//console.log("[Act/User] [addToDo] pushRef is", pushRef)
		try {
			fbDBUpdater(todoRef, 1, todoLastRead).then(() => dispatch(writeSuccess('updateLastRead', todoLastRead)));
		} catch (err) {
			dispatch(readFailure(err));
		}

		//fbDBUpdater(todoRef, 1, todo);

		// todoRef.set({
		//     ...todoObj
		// });

		console.log("[Act/User] [addToDo] Last Read updated in firebase");

		dispatch(asyncTriggerReducer(actionType.DASH_SET_TODO, {
			todoLastRead
		}));
	};
};
//############################################ End of Code to Initialize and Modfiy user read history ############################################

//############################################ Code to Fetch Data for Analytics based on user read history ############################################

export const setupAnal = (uID, userHistory) => {
  //console.log("[Act/User] [setupAnal] for uID:", uID);
  //historyLoader(uID);
  //let readHistory = {};
  return async (dispatch, getState) => {
    const readHistory = userHistory;
    let readUserHistory = Object.values(readHistory);
    let dates = [];
    let readArticles = [];
    let anData = [0, 0, 0, 0, 0, 0, 0];
    let count;
    let i = 0,
      j = 0;
    count = readUserHistory[i].count;
    for (i = 1; i < readUserHistory.length; i++) {
      count = readUserHistory[i].count;
      readArticles.push(readUserHistory[i].id);
      for (j = 1; j <= count; j++) {
        let f = j.toString();
        let temp = new Date(readUserHistory[i][f]);
        dates.push(temp);
      }
    }
    for (i = 0; i < dates.length; i++) {
      if ((timeNow - dates[i].getTime()) < 518400000)
        anData[dates[i].getDay()] += 1;
    }
    //let articleArray = Object.values(this.props.articles);    

    console.log("[Act/User] [setupAnal] User's reading history is:", anData, readArticles);
    // readHistory.forEach(()=>{
    //   console.log('Read Count is:',1);
    // });
    //console.log("[Act/User] [setupAnal] readhist is:", readHistory[1]);
    //TODO: set the data in state from reducer
    dispatch(asyncTriggerReducer(actionType.DASH_FETCH_DATA, {
      anData,
      readArticles
    }));
  };
};

//############################################ End of Code to Fetch Data for Analytics based on user read history ############################################

//############################################ Code for favorites ########################
const updateFavArtList = (favList, arts) => { //FIXME: Return Values Porperly
//	return getState => {
		let artList = Object.values(arts);
		let favArticlesList = [];

		favList.forEach(element => {
			favArticlesList.push(artList[element]);
		});
		return favArticlesList;
//	};
};

export const fetchFavorite = (uID, artList) => {
	return async dispatch => {
		let userFav = [];
		try {
			const favRef = getUserRef(uID).child("favList");
			favRef.once("value", function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					let favData = childSnapshot.val();
					userFav.push(favData);
				});

				//console.log('[Act/User] [fetchFavorite] favorites are: ', uID, userFav);
				
				let userFavArtList = updateFavArtList(userFav, artList);
				console.log('[Act/User] [fetchFavorite] favorite Articles are (List): ', userFavArtList);
				dispatch(asyncTriggerReducer(actionType.DASH_SET_USERFAV, {userFav, userFavArtList}/*{ ...userTodos }*/));
			}).then(() => dispatch(readSuccess('readFavs', userFav, null)));
		} catch (err) {
			dispatch(readFailure(err));
		}
	};
};

export const writeFavList = (uID, favList) => {
	//const list = favList;
	const favRef = getUserRef(uID).child("favList/");
	const updates = favList;
	favRef.set(updates);
	return async dispatch => {
		dispatch(asyncTriggerReducer(actionType.DASH_WRITE_USERFAV, updates));
	};
};
//############################################ Code to Setup User Environment ############################################

// export const ecoSet = uID => {

// }

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




// let userTodoSingle = {
//     title: "Continue learning where you left off",
//     desc: "Complete the last learning material you'd accessed..",
//     setOn: "" + timeNow,
//     tobecompletedBy: "30th Sept 2018",//new Date(new Date()+(12*3600)),
//     source: "User",
//     url: "",
//     isComplete: false
// }

// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…

//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });
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

