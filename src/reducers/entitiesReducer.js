import merge from 'lodash.merge';

const INITIAL_STATE = {
  actors: {},
  movieGenres: {},
  performances: {},
};

export default function entitiesReducer(state = INITIAL_STATE, action) {
  if (action.data && action.data.entities) {
    return merge({}, state, action.data.entities);
  }
  return state;
}
