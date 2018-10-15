import { FETCH_ANIMALS, FETCH_BREEDS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ANIMALS:
      return action.payload.data;
    case FETCH_BREEDS:
      return action.payload.data;
    default:
      return state;
  }
}