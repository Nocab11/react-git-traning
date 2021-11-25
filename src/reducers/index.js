// store и корневой reducer

// combineReducers объединяет все редьюсеры
import {combineReducers} from "redux";

// createStore - создает store
// applyMiddleware - подключает redux-thunk
import {createStore, applyMiddleware} from "redux";
import reposReducer from "./reposReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// Передадим с помощью combineReducers все редьюсеры
const rootReducers = combineReducers({
    repos: reposReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))