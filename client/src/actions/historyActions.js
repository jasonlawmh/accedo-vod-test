import axios from 'axios';
import { GET_HISTORY, ADD_HISTORY, UPDATE_HISTORY, DELETE_HISTORY, HISTORY_LIST_LOADING } from './types';

export const getHistory = () => dispatch => {
  dispatch(setHistoryListLoading());
  axios
    .get('/api/history')
    .then(res =>
      dispatch({
        type: GET_HISTORY,
        payload: res.data
      })
    )
};

export const addHistory = history => dispatch => {
  axios
    .post('/api/history', history)
    .then(res =>
      dispatch({
        type: ADD_HISTORY,
        payload: res.data
      })
    )
};

export const updateHistory = (id, history) => dispatch => {
    axios
      .put(`/api/history/${id}`, history)
      .then(res =>
        dispatch({
          type: UPDATE_HISTORY,
          payload: res.data
        })
      )
  };

export const deleteHistory = id => dispatch => {
  axios
    .delete(`/api/history/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_HISTORY,
        payload: id
      })
    )
};

export const setHistoryListLoading = () => {
  return {
    type: HISTORY_LIST_LOADING
  };
};