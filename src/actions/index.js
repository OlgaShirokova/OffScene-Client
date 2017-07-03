import { APICall, schemas, SERVER_URL } from 'middlewares/apiMiddleware';
import { API_CALL } from 'middlewares'
import types from './types'
const { GET_DJ, DEFAULT_SEARCH, REMOVE_SELECTED_GENRE, GET_EVENTS, SIGN_IN, SIGN_UP, MY_EVENTS } = types

export const getDJ = (payload) => ({
  type: GET_DJ,
  payload,
  [APICall]: {
    url: `http://private-272859-offstage.apiary-mock.com/users/${payload}`,
    method: 'GET',
  },
});

export const defaultSearch = () => ({
  type: DEFAULT_SEARCH,
  [APICall]: {
    url: 'http://private-272859-offstage.apiary-mock.com/search',
    method: 'GET',
    schema: schemas.djArray,
  },
});

export const removeSelectedGenre = (payload) => ({
  type: REMOVE_SELECTED_GENRE,
  payload,
});

export const getEvents = () => ({
  type: GET_EVENTS,
  [APICall]: {
    url: 'http://private-anon-d23f8e55e8-offstage.apiary-mock.com/events',
    method: 'GET',
    schema: schemas.eventArray,
  },
});

export const signIn = ({ email, password }) => ({
  type: SIGN_IN,
  [API_CALL]: {
    path: '/sign-in',
    header: {
      Authorization: `Basic ${btoa(email + ':' + password)}`
    }
  }
})

export const signUp = payload => ({
  type: SIGN_UP,
  [API_CALL]: {
    method: 'post',
    path: '/sign-up',
    data: payload,
  }
})

export const myEvents = payload => ({
  type: MY_EVENTS,
  [API_CALL]: {
    path: '/events'
  }
})