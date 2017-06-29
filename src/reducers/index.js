import { combineReducers } from 'redux';
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
});

export default reducers;
