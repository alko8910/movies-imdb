import { MOVIES_INFO } from "./types";

export const moviesInfo = newItem => dispatch => {
    dispatch({
        type: MOVIES_INFO,
        payload: newItem
    })
}