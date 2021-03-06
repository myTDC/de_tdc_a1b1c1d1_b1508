import {
  DASH_SET_TODO,
  //DASH_SET_USERDATA,
  DASH_SET_COMPDATA,
  DASH_FETCH_DATA,
  DASH_WRITE_PROGRESS,
  DASH_UPDATE_PROGRESS,
  DASH_SET_USERHISTORY,
  DASH_SET_USERFAV,
  DASH_WRITE_USERFAV,
} from "../actions/actionTypes";
// import _ from 'lodash';
// console.log('[Red/User] [userCommiter] ->  Initial State Val is', state);
//let seq = 0;

//let tStampNow = new Date().getMilliseconds();

const initState = {
  userId: null,
  givenName: null,
  familyName: null,
  eMail: null,
  dPic: null,
  mobNum: null,
  company: {
    name: "",
    isRegistered: "",
    dateOfInception: "",
    dateOfRegistration: "",
    industrySector: "",
    previousFunding: "",
    teamSize: "",
    bplan: "",
    leancanvas: "",
    founders: {}
  },
  todolist: {},
  learnProgress: {
    assignedCount: 30,
    assigned: {},
    readCount: 2,
    read: {
      // ref: {
      //   id: "xyz",
      //   date: " ",
      //   openCount: 1,
      //   timeTaken: 120,
      //   isCompleted: false
      // }
    },
    readList: {

    }
  },
  participateProgress: {
    isParticipating: false,
    lastStage: "from 4 defined objects",
    completionDate: new Date()
  },
  favList: [],
  favArtList: [],
    // tStampNow : {
    //     id: null
    // }
  categoryCoverage:{
    "Best Practices": {
      total: 11,
      read: 0
    },
    "Investment": {
      total: 8,
      read: 0
    },
    "Design": {
      total: 5,
      read: 0
    },
    "Motivation": {
      total: 2,
      read: 0
    },
    "Develop": {
      total: 2,
      read: 0
    },
    "Leadership": {
      total: 2,
      read: 0
    }
  },
  history: {
    cVer:{
        count: 'i',
        i: new Date(),
    }
  },
  readHistoryLineData: [1, 2, 1, 6, 1, 2, 1],
  readHistoryLineLabel: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  readHistoryRadarData: [4, 1, 3, 4, 2, 3],
  readHistoryRadarDataBaseline: [11, 8, 5, 2, 2, 2], //11,8,5,2,2,2,
  readHistoryRadarLabel: ["Best Practices" , "Investment", "Design", "Motivation", "Develop", "Leadership"],
};


//#################### Helper Function ####################
const updateObject = (baseObject, updater) => {
  return { ...baseObject, ...updater };
};
//#################### End of Helper Function ####################

// const mapUserData = (state, action) => {
//   console.log("[Red/User] User Data Payload Is:", action.obj);
//   return updateObject(state, {
//     userId: action.obj.uID,
//     givenName: action.obj.gname,
//     familyName: action.obj.fname,
//     eMail: action.obj.email,
//     dPic: action.obj.dp,
//     mobNum: action.obj.mobile
//   });
// };

const mapCompData = (state, action) => {
  console.log("[Red/User] Payload Is:", action.obj);
  return updateObject(state, {
    userId: action.obj.uID,
    givenName: action.obj.gname,
    familyName: action.obj.fname,
    eMail: action.obj.email,
    dPic: action.obj.dp,
    mobNum: action.obj.mobile
  });
};

const mapTodoData = (state, action) => {
  //console.log("[Red/User] Todos Added:", action.obj);
  return updateObject(state, {
    todolist: { ...action.obj }
  });
};

const mapFavData = (state, action) => {
  //console.log("[Red/User] Favs Added:", action.obj);
  return updateObject(state, {
    favList: [...action.obj.userFav],
    favArtList: action.obj.userFavArtList
  });
};

const setUserHistonFetch = (state, action) => {
  const history = { ...state.user }
  return updateObject(state, {
    history: {
      ...history,
      ...action.val
    }
  });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // case DASH_SET_USERDATA:
    //   return mapUserData(state, action);
    case DASH_SET_COMPDATA:
      return mapCompData(state, action);
    case DASH_SET_TODO:
      return mapTodoData(state, action);
    case DASH_FETCH_DATA: {
      return updateObject(state, { 
        readHistoryLineData: action.obj.anData,
        learnProgress: {
          ...state.learnProgress,
          read: {
            ...state.learnProgress.read,
            ...action.obj.readArticles
          },
          readList: {
            ...state.learnProgress.readList,
            ...action.obj.readArticlesList
          }
        }
       })
    }      
    case DASH_SET_USERHISTORY: 
      //console.log('[Red/User] User data set in state *thumbs up*')
      return setUserHistonFetch(state, action);
  
    case DASH_UPDATE_PROGRESS: 
      //console.log('[Red/User] progress updated');
      return updateObject(state, { history: action.val })
    
    case DASH_WRITE_PROGRESS: 
      //console.log('[Red/User] progress updated');
      return updateObject(state, { history: action.val })
    
    case DASH_SET_USERFAV:
      return mapFavData(state, action);

    case DASH_WRITE_USERFAV:
      return updateObject(state, { favList: action.obj });

    default:
      return state;
  }
};

export default reducer;
