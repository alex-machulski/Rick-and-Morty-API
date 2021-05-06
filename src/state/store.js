import {appReducer} from "./app-reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    app: appReducer
});

export const store = createStore(rootReducer);

window.store = store;