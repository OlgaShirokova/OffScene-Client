import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import entities from './entitiesReducer';
import pages from './pagesReducer';

export default combineReducers({
  entities,
  form: formReducer,
  pages,
});
