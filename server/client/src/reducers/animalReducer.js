import { FETCH_ANIMALS } from '../actions/index';

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case FETCH_ANIMALS:
      console.log(action)
      return action.payload.data;
    default:
      return state;
  }
}
