import { FETCH_BREEDS } from "../actions";


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BREEDS:
      return action.payload.data
    default:
      return state
  }
}