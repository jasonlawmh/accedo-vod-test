import axios from 'axios';
import { GET_MOVIES, MOVIE_LIST_LOADING } from './types';

export const getMovies = () => dispatch => {
    dispatch(setMovieListLoading());
    axios
        .get('https://cors-anywhere.herokuapp.com/https://accedo-ps-programming-exam.s3-ap-southeast-1.amazonaws.com/movies.json')
        .then((res) => 
            dispatch({
                type: GET_MOVIES,
                payload: res.data.entries
            })
        );
}

export const setMovieListLoading = () => {
    return {
        type: MOVIE_LIST_LOADING
    }
}