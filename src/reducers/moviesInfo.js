import { MOVIES_INFO } from "../actions/types";

const initialState = []

export default function (state = initialState, action) {
    switch(action.type){
        case MOVIES_INFO: 
            return [action.payload]
        default: 
            return state
    }
}
