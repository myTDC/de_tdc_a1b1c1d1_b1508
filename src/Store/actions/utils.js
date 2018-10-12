//import * as actionTypes from './actionTypes';

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('storeState');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch(err){
        console.log('[Act/Utils] -> [loadState()] Error Getting Serilaized State');
        return undefined;
    }
};

export const setState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('storeState', serializedState);
    } catch (err) {
        console.log('[Act/Utils] -> [setState()] Error Setting Serilaized State');
    }
}