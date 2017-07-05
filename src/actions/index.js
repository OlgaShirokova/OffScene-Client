import { API_CALL, schemas } from 'middlewares/apiMiddleware';
import types from './types';
const {
  GET_DJ,
  DEFAULT_SEARCH,
  REMOVE_SELECTED_GENRE,
  GET_EVENTS,
  SIGN_IN,
  SIGN_UP,
  GET_MY_EVENTS,
  GET_ARTISTS,
  POST_OFFER,
} = types;

export const removeSelectedGenre = payload => ({
  type: REMOVE_SELECTED_GENRE,
  payload,
});

export const signIn = ({ email, password }) => ({
  type: SIGN_IN,
  [API_CALL]: {
    path: '/sign-in',
    header: {
      Authorization: `Basic ${btoa(email + ':' + password)}`,
    },
  },
});

export const signUp = payload => ({
  type: SIGN_UP,
  [API_CALL]: {
    method: 'post',
    path: '/sign-up',
    data: payload,
  },
});

export const getArtists = payload => ({
  type: GET_ARTISTS,
  [API_CALL]: {
    url: 'http://private-272859-offstage.apiary-mock.com/search',
    // path: '/search',
    data: payload,
    schema: schemas.djArray,
  },
});

export const getMyEvents = () => ({
  type: GET_MY_EVENTS,
  [API_CALL]: {
    url: 'http://private-anon-d23f8e55e8-offstage.apiary-mock.com/events',
    schema: schemas.eventArray,
    // path: '/events',
  },
});

export const postOffer = () => ({
  type: POST_OFFER,
  [API_CALL]: {
    url: 'http://private-anon-d23f8e55e8-offstage.apiary-mock.com/offers',
    schema: schemas.eventArray,
    // path: '/events',
  },
});
