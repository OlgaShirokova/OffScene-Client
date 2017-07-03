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
    selectedPrice: undefined,
    selectedDate: undefined,
  },
};

const pages = (state = pageDefaultState, action) => {
  if (action.type === '@@redux-form/CHANGE') {
    switch (action.meta.field) {
      case 'genre':
        return Object.assign({}, state, {
          artistsPage: Object.assign({}, state.artistsPage, {
            selectedGenres: state.artistsPage.selectedGenres
            .filter((el) => el !== action.payload.toString())
            .concat(action.payload),
          }),
        });

      case 'date':
        return Object.assign({}, state, {
          artistsPage: Object.assign({}, state.artistsPage, {
            selectedDate: action.payload.getTime(),
          }),
        });

      case 'price':
        return Object.assign({}, state, {
          artistsPage: Object.assign({}, state.artistsPage, {
            selectedPrice: action.payload,
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

  if (action.type === 'GET_DJ') {
    return Object.assign({}, state, {
      artistID: action.payload,
    });
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
