import { combineReducers } from "redux";
import searchReducer from './searchReducer'
import moviesInfo from "./moviesInfo";



export default combineReducers({
    movies: searchReducer,
    moviesInfo: moviesInfo
});








