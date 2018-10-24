// import * as actionTypes from './actionTypes';

export const TESTRT = 'TEST_REDUX_THUNK';
export const TESTR = 'TEST_REDUX';

const thunkTest = (val) =>{
    //console.log('inside thunkTest');
    return{
        type: TESTRT,
        pay: val
    };
};

export const reduxTest = () => {
    //console.log('inside reduxTest');
    return dispatch => {
        dispatch(thunkTest(1));
    };
};