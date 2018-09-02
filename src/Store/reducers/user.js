import { DASH_FETCH_COMPDATA, DASH_SET_USERDATA, DASH_FETCH_DAILY_COUNT, DASH_UPDATE_PROGRESS, DASH_FETCH_USERDATA, DASH_SET_COMPDATA } from '../actions/actionTypes';
import _ from 'lodash';
// console.log('[Red/User] [userCommiter] ->  Initial State Val is', state);
//let seq = 0;

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
        founders: {},
    },
    todolist: {
        seq: {
            title: "Seek Investment at TDC Elevate '18",
            desc: "Participate in TDC Elevate through DE portal and test your knowledge by pitching directly to the investors and analysts.",
            setOn: new Date(),
            tobecompletedBy: "30th Sept 2018",//new Date(new Date()+(12*3600)),
            source: "User",
            url: "",
            isComplete: false
        }
    },
    learnProgress: {
        assignedCount: 30,
        assigned: {},
        readCount: 2,
        read: {
            ref: {
                id: 'xyz',
                date: ' ',
                openCount: 1,
                timeTaken: 120,
                isCompleted: false
            }
        }
    },
    participateProgress: {
        isParticipating: false,
        lastStage: 'from 4 defined objects',
        completionDate: new Date()
    }
};

const updateObject = (baseObject, updater) => { return { ...baseObject, ...updater }; };

const articlesCommiter = (state, action) => {
    return updateObject(state, { count: state.count + action.pay })
}

const setStateonFetch = (state, action) => {
    const articles3p = { ...state.articles3p }

    return updateObject(state, {
        articles3p: {
            ...articles3p,
            ...action.val
        }
    });
};

const mapUserData = (state, action) => {
    console.log('Payload Is:', action.obj);
    return updateObject(state, {
        userId: action.obj.uID,
        givenName: action.obj.gname,
        familyName: action.obj.fname,
        eMail: action.obj.email,
        dPic: action.obj.dp,
        mobNum: action.obj.mobile,
    })
};

const mapCompData = (state, action) => {
    console.log('Payload Is:', action.obj);
    return updateObject(state, {
        userId: action.obj.uID,
        givenName: action.obj.gname,
        familyName: action.obj.fname,
        eMail: action.obj.email,
        dPic: action.obj.dp,
        mobNum: action.obj.mobile,
    })
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case DASH_SET_USERDATA: return mapUserData(state, action);

        case DASH_SET_COMPDATA: return mapCompData(state, action);
        default: return state;
    }
}


export default reducer;