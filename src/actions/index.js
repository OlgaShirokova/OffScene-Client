import { APICall, schemas } from '../apiMiddleware';

export const getDJ = (id) => ({
  type: 'GET_DJ',
  id,
  [APICall]: {
    url: `http://private-272859-offstage.apiary-mock.com/users/${id}`,
    method: 'GET',
  },
});

export const filterSearch = () => ({
  type: 'FILTER_SEARCH',
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
