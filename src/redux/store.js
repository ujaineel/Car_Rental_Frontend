import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {carsReducer} from "./reducers/carsReducer";
import {alertsReducer} from "./reducers/alertsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const rootReducer = combineReducers({
    carsReducer,
    alertsReducer
});


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;