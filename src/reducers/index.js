import { combineReducers } from 'redux';
import types from 'actions/types';
import { reducer as formReducer } from 'redux-form';
import entities from './entitiesReducer';
import pages from './pagesReducer';
import notification from './notificationReducer';
import { deleteToken } from 'utils/localStorage';
import auth from './authReducer';
import {
  SIGNUP_PAGE_INITIAL_STATE,
  LOGIN_PAGE_INITIAL_STATE,
} from './pagesReducer';

const reducers = combineReducers({
  auth,
  entities,
  form: formReducer,
  pages,
  notification,
});

function rootReducer(state, action) {
  if (action.type === types.SIGN_OUT) {
    state = {
      ...state,
      auth: undefined,
      entities: { ...state.entities, performances: {} },
      pages: {
        ...state.pages,
        loginPage: LOGIN_PAGE_INITIAL_STATE,
        signupPage: SIGNUP_PAGE_INITIAL_STATE,
      },
    };
    deleteToken();
  }
  return reducers(state, action);
}

export default rootReducer;
