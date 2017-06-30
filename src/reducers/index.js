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

// const defaultAuthState = {
//   user: {
//     "id": 132,
//     "email": "donkey@kong.com",
//     "name": "Donkey Kong",
//     "role": 0,
//     "authToken": "93jwidn2i9ekdlsfo0iweiorwijf0ijfk2e2o09",
//     "staff": false,
//     "picture": "https://avatars1.githubusercontent.com/u/1481696?v=3&s=400",
//     "calendar": {
//       "monday": 0,
//       "tuesday": 0,
//       "wednesday": 1,
//       "thursday": 0,
//       "friday": 1,
//       "saturday": 1,
//       "sunday": 1
//     },
//     "awayDays": [
//       "2017-06-30T00:00:00+00:00",
//       "2017-07-05T00:00:00+00:00",
//       "2017-07-13T00:00:00+00:00"
//     ],
//     "priceWe": 1000000,
//     "priceWd": 500000,
//     "city": "Barcelona",
//     "lat": 33.0684,
//     "long": 34.0567,
//     "avgRating": 400,
//     "musicGenres": [
//       "rap",
//       "techno"
//     ]
//   }
// }
//
// const authReducer = (state = defaultAuthState, action) => {
//   retun this.state;
// }

// if (action.type === 'GET_DJ_SUCCESS') {
//   return Object.assign({}, state, { dj: action.data });
// }

const reducers = combineReducers({
  // auth: authReducer,
  entities,
  form: formReducer,
  pages,
});

export default reducers;
