import { APICall, schemas } from '../apiMiddleware';

export const getDJ = (payload) => ({
  type: 'GET_DJ',
  payload,
  [APICall]: {
    url: `http://private-272859-offstage.apiary-mock.com/users/${payload}`,
    method: 'GET',
  },
});

export const filterSearch = (payload) => ({
  type: 'FILTER_SEARCH',
  [APICall]: {
    url: `http://private-272859-offstage.apiary-mock.com/search?${payload}`,
    method: 'GET',
    schema: schemas.djArray,
  },
});


export const defaultSearch = () => ({
  type: 'DEFAULT_SEARCH',
  [APICall]: {
    url: 'http://private-272859-offstage.apiary-mock.com/search',
    method: 'GET',
    schema: schemas.djArray,
  },
});

export const removeSelectedGenre = (payload) => ({
  type: 'REMOVE_SELECTED_GENRE',
  payload,
});
