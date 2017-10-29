import axios from 'axios';
import { START_SEARCH, GET_DETAILS, UPDATE_QUERY, REMOVE_DETAILS } from './types';

export function search(query) {
  // const url = `${__ROOT_URL__}api//user/getInfo`;
  // const request = axios.post(url, null, { headers });
  //
  // return (dispatch) => {
  //   request.then(({ data }) => {
  //     dispatch({
  //       type: START_SEARCH,
  //       payload: data.user,
  //     });
  //   }, () => { errorCallback(); });
  // };
  console.log(query);
  return (dispatch) => {
    dispatch({
      type: START_SEARCH,
      payload: [
        {
          id: 'asfweafqwfv435498fdu3eg43t',
          name: 'Need for a babysitter',
          capacity: 3,
          when: new Date('December 13, 2017 18:30:00'),
          hours: 4,
          city: 'Poznań',
          street: 'Krucza 16/38',
          organization: 'Baby Care',
          type: 'Babysitting',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        },
        {
          id: 'asfweafqwfv43543eg4cxviu3t',
          name: 'Great dog for great people',
          capacity: 8,
          when: new Date('January 07, 2018 11:15:00'),
          hours: 9,
          city: 'Kraków',
          street: 'Krucza 16/38',
          organization: 'Pets Share',
          type: 'Pet care',
          description: 'We know that people love thier dogs, they are our best friends. But sometimes our plans and live goals changes and we can\'t take our friend with us. Sadly that happens really often. We know that you love your dog and you will only leave him to the best hand possible.',
        },
        {
          id: 'asfweafqwfv4ewrlk3543eg43t',
          name: 'They serve for us, we can serve for them',
          capacity: 23,
          when: new Date('December 24, 2017 17:30:00'),
          hours: 3,
          city: 'New York',
          street: '7th Avenue 56 16/38',
          organization: 'American Army Weterans',
          type: 'Care for the elderls',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        },
        {
          id: 'asfweafqwfv43543eg43t',
          name: 'Collect food for humans best friends',
          capacity: 12,
          when: new Date('June 6, 2018 10:10:00'),
          hours: 6,
          city: 'Warszawa',
          street: 'Jana Pawła II 16',
          organization: 'FoodChar',
          type: 'Charity events',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        },
      ],
    });
    dispatch({
      type: UPDATE_QUERY,
      payload: query,
    });
  };
}

export function getDetails(id) {
  return (dispatch) => {
    dispatch({
      type: GET_DETAILS,
      payload: {
        id: 'asfweafqwfv43543eg4cxviu3t',
        name: 'Great dog for great people',
        capacity: 8,
        when: new Date('January 07, 2018 11:15:00'),
        hours: 9,
        city: 'Kraków',
        street: 'Krucza 16/38',
        organization: 'Pets Share',
        type: 'Pet care',
        description: 'We know that people love thier dogs, they are our best friends. But sometimes our plans and live goals changes and we can\'t take our friend with us. Sadly that happens really often. We know that you love your dog and you will only leave him to the best hand possible.',
      },
    });
  };
}

export function removeDetails() {
  return (dispatch) => {
    dispatch({
      type: REMOVE_DETAILS,
    });
  };
}
