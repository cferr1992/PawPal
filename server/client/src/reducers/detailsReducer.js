import { FETCH_ANIMAL_BY_ID } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ANIMAL_BY_ID:
      console.log(action)
      return action.payload.data;
    default:
      return state;
  }
}
