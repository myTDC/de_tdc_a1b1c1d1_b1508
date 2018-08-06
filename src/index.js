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

//Components

// Reducers
// import testred from './Store/reducers/authExp';
import authRed from './Store/reducers/auth';
// import contentRed from '../src/store/reducers/content';

const rootReducer = combineReducers({
    auth: authRed//,
    // content: contentRed,
    // test: testred
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const de_tdc_store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

const app = (
    <Provider store={de_tdc_store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app, 
    document.getElementById('root'));
registerServiceWorker();
