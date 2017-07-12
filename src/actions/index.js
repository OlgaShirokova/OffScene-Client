import { API_CALL, schemas } from 'middlewares/apiMiddleware';
import types from './types';
const {
  REMOVE_SELECTED_GENRE,
  SIGN_IN,
  SIGN_UP,
  GET_MY_PERFORMANCES,
  GET_ARTISTS,
  SIGN_OUT,
  SIGNUP_PAGE_FORM_CHANGE,
  LOGIN_PAGE_FORM_CHANGE,
  RESET_NOTIFICATION,
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

export const getActors = payload => ({
  type: GET_ARTISTS,
  [API_CALL]: {
    // url: 'http://private-272859-offstage.apiary-mock.com/search',
    path: '/search',
    data: payload,
    schema: schemas.actorArray,
  },
});

export const getMyPerformances = () => ({
  type: GET_MY_PERFORMANCES,
  [API_CALL]: {
    // url: 'http://private-anon-d23f8e55e8-offstage.apiary-mock.com/events',
    schema: schemas.performanceArray,
    path: '/performances',
  },
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const loginPageFormChange = payload => ({
  type: LOGIN_PAGE_FORM_CHANGE,
  payload,
});

export const signupPageFormChange = payload => ({
  type: SIGNUP_PAGE_FORM_CHANGE,
  payload,
});

export const resetNotification = () => ({
  type: RESET_NOTIFICATION,
});

export const postOffer = payload => ({
  type: POST_OFFER,
  [API_CALL]: {
    method: 'post',
    path: '/offers',
    data: payload,
  },
});
