import { FETCH_PIC } from './types';
import axios from 'axios';

export function fetchPic() {
  return function(dispatch) {
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      return res.data[0];
    }).then(data => dispatch({
      type: FETCH_PIC,
      payload: data
    }))
  }
}