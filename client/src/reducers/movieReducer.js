import { GET_MOVIES, MOVIE_LIST_LOADING } from '../actions/types';

const initalState = {
    movies : [],
    loading : false

};

export default function(state = initalState, action ) {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case MOVIE_LIST_LOADING:
            return {
                ...state,
                loading : true
            }
        default:
            return state;
    }
}