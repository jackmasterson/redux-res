import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataReducer from './reducers/data';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({
    data: dataReducer,
});

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);