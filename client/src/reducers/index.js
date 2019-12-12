import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import historyReducer from './historyReducer';

export default combineReducers({
    movies : movieReducer,
    history : historyReducer
});