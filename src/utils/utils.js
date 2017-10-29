import { getCookie } from './cookies';

export const getTokenHeader = () => {
  return {
    Authorization: `bearel ${getCookie('token')}`,
  };
};
