import { GET_MOVIES, MOVIE_LIST_LOADING, SET_CURRENT_MOVIE_SLIDE } from '../actions/types';

const initalState = {
    movies : [],
    loading : false,
    currentMovieSlide : {category : "", movie_id : ""}

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
        case SET_CURRENT_MOVIE_SLIDE:
            return {
                ...state,
                currentMovieSlide: action.payload
            }
        default:
            return state;
    }
}