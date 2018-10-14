import { combineReducers } from 'redux'
import animalReducer from './animalReducer'
import breedReducer from './breedReducer'
import detailsReducer from './detailsReducer'

export default combineReducers({
  animal: animalReducer,
  breeds: breedReducer,
  details: detailsReducer
});
