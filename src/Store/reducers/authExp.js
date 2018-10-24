import { TESTRT } from '../actions/authExp';

const initState = {
    count: 0,
    isAuth: false,
    user: {}
};

const updateState = (state, updater) => {
    return{
        ...state,
        ...updater
    };
};

const reducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case TESTRT:{
            //console.log('Inside Reducer. State Val is', state);
            //console.log('Inside Reducer. Action has Value is', action.pay);
            return updateState(state, {count: state.count + action.pay})
        }
        default: return state;
    }
}


export default reducer;