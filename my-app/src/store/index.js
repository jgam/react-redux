import { createStore, compose, applyMiddleware } from "redux";  
import promise from 'redux-promise';  
import createLogger from 'redux-logger';  
import thunk from "redux-thunk";

export default function configureStore(reducer, initialState = {}) {  
    const logger = createLogger();
    const enhancer = compose(
        applyMiddleware(thunk,promise, logger/* , middleware 추가*/)
    );
    return createStore(reducer, initialState, enhancer);
}