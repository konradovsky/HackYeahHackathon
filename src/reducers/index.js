import { combineReducers } from 'redux';
import offersReducer from './offers_reducer';
import queryReducer from './query_reducer';
import detailsReducer from './details_reducer';
import myOffersReducer from './myoffers_reducer';

const rootReducer = combineReducers({
  offers: offersReducer,
  myOffers: myOffersReducer,
  query: queryReducer,
  details: detailsReducer,
});

export default rootReducer;
