import {createStore,applyMiddleware} from "redux"
import {moviesRedux} from "../reducer/moviesRedux"
// import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

export const store=createStore(moviesRedux,applyMiddleware(thunk))