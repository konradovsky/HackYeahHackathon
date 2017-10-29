import { GET_DETAILS, REMOVE_DETAILS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;

    case REMOVE_DETAILS:
      return {};

    default:
      return state;
  }
}
