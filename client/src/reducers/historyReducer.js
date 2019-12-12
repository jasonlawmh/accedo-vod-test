import { GET_HISTORY, ADD_HISTORY, UPDATE_HISTORY, DELETE_HISTORY, HISTORY_LIST_LOADING } from '../actions/types';

const initalState = {
    history : [],
    loading : false
};

export default function(state = initalState, action ) {
    switch(action.type) {
        case GET_HISTORY:
            return {
                ...state,
                history: action.payload,
                loading: false
            }
        case HISTORY_LIST_LOADING:
            return {
                ...state,
                loading : true
            }
        case ADD_HISTORY:
            return {
                ...state,
                history: [action.payload, ...state.history]
            };    
        case DELETE_HISTORY:
            return {
                ...state,
                history: state.history.filter(history => history._id !== action.payload)
        }
        default:
            return state;
    }
}