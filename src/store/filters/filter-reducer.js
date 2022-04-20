import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER} from "./filter-action"

export const filterReducer = (state = [], action) => {
    switch(action.type) {
        case CLEAR_FILTER: {
            return [];
        }
        case ADD_FILTER: {
            if(!state.includes(action.filter)) {
                return [...state, action.filter];
            }
            
            return state;
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.filter);
        }
        default: {
            return state;
        }
    }
}