import axios from 'axios';
import { FETCH_ANIMAL } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_animal');

  dispatch({ type: FETCH_ANIMAL, payload: res.data });
};