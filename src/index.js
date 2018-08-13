import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Libraries
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';
//Components

import { loadState, setState } from './Store/actions';
// Reducers
// import testred from './Store/reducers/authExp';
import authRed from './Store/reducers/auth';
import contentRed from './Store/reducers/content';
import userRed from './Store/reducers/user';
// import contentRed from '../src/store/reducers/content';

const rootReducer = combineReducers({
    auth: authRed,
    content: contentRed,
    user: userRed//,
    // test: testred
});
const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const de_tdc_store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(reduxThunk)));

de_tdc_store.subscribe(throttle(() => { //throttle runs the encapsulated funciton only once in the specified timer (miliseconds)
    setState({auth: de_tdc_store.getState().auth});
}), 1000);

const app = (
    <Provider store={de_tdc_store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();