export const searchReducer = (state = { djs: [] }, action) => {
  if (action.type === 'DEFAULT_SEARCH_SUCCESS') {
    return Object.assign({}, state, { djs: action.data });
  }
  return state;
};

export default searchReducer;
