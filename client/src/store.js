import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer, 
  intialState, 
  applyMiddleware(...middleWare));

export default store;