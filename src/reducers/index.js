import { combineReducers } from 'redux';

const searchReducer = (state = { djs: [] }, action) => {
  console.log(action);
  if (action.type === 'DEFAULT_SEARCH_SUCCESS') {
    console.log('1234');
    return Object.assign({}, state, { djs: action.data });
  }
  console.log('678');
  return state;
};

const DJReducer = (state = { dj: {} }, action) => {
  if (action.type === 'GET_DJ_SUCCESS') {
    return Object.assign({}, state, { dj: action.data });
  }
  return state;
};

const reducers = combineReducers({
  searchReducer,
  DJReducer,
});

export default reducers;
