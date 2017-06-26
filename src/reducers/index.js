export const testReducer = (state = {}, action) => {
  console.log(action, 'action-----');
  if (action.type.type === 'TEST') {
    console.log('in reducers');
    return Object.assign({}, state, { test: 'test passed' });
  }
  return state;
};

export default testReducer;
