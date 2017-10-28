import { combineReducers } from 'redux';
import offersReducer from './offers_reducer';
import queryReducer from './query_reducer';

const rootReducer = combineReducers({
  offers: offersReducer,
  query: queryReducer,
});

export default rootReducer;
