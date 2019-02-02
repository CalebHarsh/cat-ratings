import {FETCH_PIC} from '../actions/types';

const intialState = {
  img_id: '',
  src: ''
}

export default function (state = intialState, action) {
  switch(action.type) {
    case FETCH_PIC: 
    console.log(action.payload.id)
      return {...state,
      src: action.payload.url,
      img_id: action.payload.id
      };
    default: 
      return state;
  }
}