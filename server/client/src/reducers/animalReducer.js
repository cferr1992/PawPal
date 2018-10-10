import { FETCH_ANIMALS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ANIMALS:
      return action.payload.data;
    default:
      return state;
  }
}
