import { CONT_COMMIT_ARTICLES, CONT_FETCH_ARTICLES, DASH_FETCH_DAILY_COUNT } from '../actions/actionTypes';
import _ from 'lodash';
// console.log('[Red/User] [userCommiter] ->  Initial State Val is', state);
//let seq = 0;

const initState = {
    userId: null,
    todolist:{
        seq: { 
            title: "Seek Investment at TDC Elevate '18",
            desc: "Participate in TDC Elevate through DE portal and test your knowledge by pitching directly to the investors and analysts.",
            setOn: new Date(),
            compBy: "30th Sept 2018",//new Date(new Date()+(12*3600)),
            isComplete: false
        }
    },
    chartdata : { } ,
    chartoptions : { }
};

const updateObject = (baseObject, updater) => { return{...baseObject ,...updater}; };

const articlesCommiter = (state, action) => {
    return updateObject(state, {count: state.count + action.pay})
}

const getJulianDay = () => {
    //let julDay = null;
    switch(new Date().getDay()){
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: return null;
    }
}

const setupCharts = (state, action) => {
    let today = getJulianDay();
    console.log("Today's Day is:", today);

    return updateObject(state, null);
}

const setStateonFetch = (state, action) => {
    const articles3p = {...state.articles3p}

    return updateObject(state, { articles3p: {
        ...articles3p,
        ...action.val
    }});
};

const reducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case CONT_COMMIT_ARTICLES:  return articlesCommiter(state, action);
        case CONT_FETCH_ARTICLES: { console.log('[Red/Switch]'); return setStateonFetch(state, action);}
        case DASH_FETCH_DAILY_COUNT: return setupCharts(state, action);
        default: { console.log('[Red/Users] [Defaulter] Reducer Triggered');
            return state;}
    }
}


export default reducer;