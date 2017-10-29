import { GET_MY_OFFERS, UPDATE_MY_OFFER, REMOVE_MY_OFFER, ADD_MY_OFFER } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_MY_OFFERS:
      return action.payload;

    case UPDATE_MY_OFFER:
      return state;

    case ADD_MY_OFFER:
      return [...state, action.payload];

    case REMOVE_MY_OFFER:
      let index;
      state.map((offer, i) => {
        if (action.payload.id === offer.id) index = i;
      });
      return [ ...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
}
