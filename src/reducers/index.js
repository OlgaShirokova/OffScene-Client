import { combineReducers } from 'redux';
import types from 'actions/types';
import { reducer as formReducer } from 'redux-form';
import entities from './entitiesReducer';
import pages from './pagesReducer';
import { deleteToken } from 'utils/localStorage';
import auth from './authReducer';

const reducers = combineReducers({
  auth,
  entities,
  form: formReducer,
  pages,
});

function rootReducer(state, action) {
  if (action.type === types.SIGN_OUT) {
    state = {};
    deleteToken();
  }
  return reducers(state, action);
}

export default rootReducer;
