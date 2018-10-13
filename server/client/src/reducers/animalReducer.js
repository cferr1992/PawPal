import { FETCH_ANIMALS, FETCH_BREEDS } from '../actions/index';

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case FETCH_ANIMALS:
      console.log(action)
      return action.payload.data;
    case FETCH_BREEDS:
      return action.payload.data;
    default:
      return state;
  }
}
