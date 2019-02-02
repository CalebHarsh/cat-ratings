import { FETCH_PIC } from './types';
import axios from 'axios';
import { API_KEY } from '../env';

export function createVote(voteData) {
  return function (dispatch) {
    axios.post('https://api.thecatapi.com/v1/votes?api_key=' + API_KEY, voteData)
      .then(data => axios.get('https://api.thecatapi.com/v1/images/search'))
      .then(res => res.data[0])
      .then(data => dispatch(
        {
          type: FETCH_PIC,
          payload: data
        })
      )
  }
}