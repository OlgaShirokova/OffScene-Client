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
  // priceMin=3000 &
  // priceMax=8000 &
  // date=1498842156987 &
  // musicGenre=cmFwLGRhbmNl &
  // city=Madrid &
  // maxDistiance=2000
  type: 'FILTER_SEARCH',
  [APICall]: {
    url: `http://private-272859-offstage.apiary-mock.com/search?${payload}`,
    // https://private-272859-offstage.apiary-mock.com/search?
    method: 'GET',
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
