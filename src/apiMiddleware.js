export const APICall = Symbol('APICall');
export default (store) => (next) => (action) => {
  const callApi = action[APICall];
  if (!callApi) return next(action);

  return fetch(callApi.url)
  .then((data) => data.json(),
    // parse data
  )
  .then((data) => store.dispatch({ type: `${action.type}_SUCCESS`, data }),
    // dispatch success action
  )
  .catch((error) => store.dispatch({ type: `${action.type}_FAIL`, error }),
    // dispatch error action
  );
};
