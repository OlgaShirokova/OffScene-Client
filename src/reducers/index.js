import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import merge from 'lodash.merge';

const defaultState = {
  djs: {},
  genres: {},
};

const entities = (state = defaultState, action) => {
  if (action.data && action.data.entities) {
    //eslint-disable-next-line
    return merge({}, state, action.data.entities);
  }
  return state;
};


const pageDefaultState = {
  artistsPage: {
    selectedGenres: [],
  },
};

const pages = (state = pageDefaultState, action) => {
  if (action.type === '@@redux-form/CHANGE') {
    switch (action.meta.field) {
      case 'genre':
        // console.log(state, ': state');
        return Object.assign({}, state, {
          artistsPage: Object.assign({}, state.artistsPage, {
            selectedGenres: state.artistsPage.selectedGenres.concat(action.payload),
          }),
        });

      default:
        return state;
    }
  }
  return state;
};

// if (action.type === 'GET_DJ_SUCCESS') {
//   return Object.assign({}, state, { dj: action.data });
// }

const reducers = combineReducers({
  entities,
  form: formReducer,
  pages,
});

export default reducers;
