import { APICall } from '../apiMiddleware';

export const filterSearch = () => ({
  type: 'FILTER_SEARCH',
});

export const defaultSearch = () => ({
  type: 'DEFAULT_SEARCH',
  [APICall]: {
    url: 'http://private-272859-offstage.apiary-mock.com/search',
    method: 'GET',
  },
});
