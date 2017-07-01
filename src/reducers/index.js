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
            selectedGenres: state.artistsPage.selectedGenres
            .filter((el) => el !== action.payload.toString())
            .concat(action.payload),
          }),
        });

      default:
        return state;
    }
  }

  if (action.type === 'REMOVE_SELECTED_GENRE') {
    return Object.assign({}, state, {
      artistsPage: Object.assign({}, state.artistsPage, {
        selectedGenres: state.artistsPage.selectedGenres
        .filter((el) => el !== action.payload.toString()),
      }),
    });
  }

  return state;
};

const reducers = combineReducers({
  // auth: authReducer,
  entities,
  form: formReducer,
  pages,
});

export default reducers;
