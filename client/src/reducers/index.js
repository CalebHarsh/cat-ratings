import {combineReducers } from 'redux';
import voteReducer from './voteReducer';
import picReducer from './picReducer';

export default combineReducers({
  votes: voteReducer,
  picture: picReducer
});