import merge from 'lodash.merge';

const INITIAL_STATE = {
  djs: {},
  genres: {},
  events: {},
};

export default function entitiesReducer(state = INITIAL_STATE, action) {
  if (action.data && action.data.entities) {
    return merge({}, state, action.data.entities);
  }
  return state;
};