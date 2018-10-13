import { combineReducers } from 'redux'
import animalReducer from './animalReducer'
import breedReducer from './breedReducer'

export default combineReducers({
  animal: animalReducer,
  breeds: breedReducer
});
