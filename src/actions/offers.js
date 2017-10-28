import axios from 'axios';
import { START_SEARCH, EXTEND_SEARCH, UPDATE_QUERY } from './types';

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
          name: 'Lorem ipsum doij erhk;hdsa ;joefiewfn',
          capacity: 3,
          when: new Date('December 13, 2017 11:13:00'),
          applyTime: new Date('November 30, 2017 11:13:00'),
          city: 'Wrocław',
          street: 'Krucza 16/38',
          organization: 'UNICEF',
          type: 'PET_CARE',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          requirements: [
            'Bring to the table win-win survival strategies to ensure proactive domination.',
            'At the end of the day, going forward, a new normal that has evolved from generation X',
            'User generated content in real-time will have multiple touchpoints for offshoring.',
          ],
        },
        {
          name: 'Lorem ipsum',
          capacity: 3,
          when: new Date('December 13, 2017 11:13:00'),
          applyTime: new Date('November 30, 2017 11:13:00'),
          city: 'Wrocław',
          street: 'Krucza 16/38',
          organization: 'UNICEF',
          type: 'PET_CARE',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          requirements: [
            'Bring to the table win-win survival strategies to ensure proactive domination.',
            'At the end of the day, going forward, a new normal that has evolved from generation X',
            'User generated content in real-time will have multiple touchpoints for offshoring.',
          ],
        },
        {
          name: 'Lorem ipsum',
          capacity: 3,
          when: new Date('December 13, 2017 11:13:00'),
          applyTime: new Date('November 30, 2017 11:13:00'),
          city: 'Wrocław',
          street: 'Krucza 16/38',
          organization: 'UNICEF',
          type: 'PET_CARE',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          requirements: [
            'Bring to the table win-win survival strategies to ensure proactive domination.',
            'At the end of the day, going forward, a new normal that has evolved from generation X',
            'User generated content in real-time will have multiple touchpoints for offshoring.',
          ],
        },
        {
          name: 'Lorem ipsum',
          capacity: 3,
          when: new Date('December 13, 2017 11:13:00'),
          applyTime: new Date('November 30, 2017 11:13:00'),
          city: 'Wrocław',
          street: 'Krucza 16/38',
          organization: 'UNICEF',
          type: 'PET_CARE',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          requirements: [
            'Bring to the table win-win survival strategies to ensure proactive domination.',
            'At the end of the day, going forward, a new normal that has evolved from generation X',
            'User generated content in real-time will have multiple touchpoints for offshoring.',
          ],
        },
      ],
    });
    dispatch({
      type: UPDATE_QUERY,
      payload: query,
    });
  };
}

export function extendSearch() {
  // const url = `${__ROOT_URL__}api//user/getInfo`;
  // const request = axios.post(url, null, { headers });
  //
  // return (dispatch) => {
  //   request.then(({ data }) => {
  //     dispatch({
  //       type: EXTEND_SEARCH,
  //       payload: data.user,
  //     });
  //   }, () => { errorCallback(); });
  // };
  return (dispatch) => {
    dispatch({
      type: EXTEND_SEARCH,
      payload: {
        name: 'Lorem ipsum dolor',
        capacity: 5,
        when: new Date('December 13, 2017 11:13:00'),
        applyTime: new Date('November 30, 2017 11:13:00'),
        city: 'Wrocław',
        street: 'Krucza 16/38',
        organization: 'UNICEF',
        type: 'PET_CARE',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        requirements: [
          'Bring to the table win-win survival strategies to ensure proactive domination.',
          'At the end of the day, going forward, a new normal that has evolved from generation X',
          'User generated content in real-time will have multiple touchpoints for offshoring.',
        ],
      },
    });
  };
}
