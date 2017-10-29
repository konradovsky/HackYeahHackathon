import axios from 'axios';
import { getTokenHeader } from '../utils/utils';
import { GET_MY_OFFERS, UPDATE_MY_OFFERS, REMOVE_MY_OFFER, ADD_MY_OFFER } from './types';

export function getMyOffers() {
  const url = `${__ROOT_URL__}api/modules`;
  const headers = getTokenHeader();
  const request = axios.post(url, module, { headers });

  return (dispatch) => {
    request.then((data) => {
      console.log(data);
      dispatch({
        type: GET_MY_OFFERS,
        payload: data.data.data,
      });
    });
  };
}

export function updateMyOffers(values, id = '') {
  const url = `${__ROOT_URL__}api/event`;
  const headers = getTokenHeader();
  const request = axios.post(url, values, { headers });

  return (dispatch) => {
    request.then((data) => {
      console.log(data);
      if (id) {
        dispatch({
          type: UPDATE_MY_OFFERS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: ADD_MY_OFFER,
          payload: data.data.data,
        });
      }
    });
  };
}

export function removeMyOffer() {
  const url = `${__ROOT_URL__}api/modules`;
  const headers = getTokenHeader();
  const request = axios.post(url, module, { headers });

  return (dispatch) => {
    request.then((data) => {
      console.log(data);
      dispatch({
        type: REMOVE_MY_OFFER,
        payload: data.data.data,
      });
    });
  };
}
