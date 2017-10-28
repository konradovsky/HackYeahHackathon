import { START_SEARCH, EXTEND_SEARCH } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case START_SEARCH:
      return action.payload;

    case EXTEND_SEARCH:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
