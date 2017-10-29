import { combineReducers } from 'redux';
import offersReducer from './offers_reducer';
import queryReducer from './query_reducer';
import detailsReducer from './details_reducer';

const rootReducer = combineReducers({
  offers: offersReducer,
  query: queryReducer,
  details: detailsReducer,
});

export default rootReducer;
