import { normalize, schema as Schema } from 'normalizr';

const genre = new Schema.Entity('genres');
const dj = new Schema.Entity('djs', {
  genres: [genre],
});
export const schemas = {
  genre,
  dj,
  djArray: new Schema.Array(dj),
};


export const APICall = Symbol('APICall');
export default (store) => (next) => (action) => {
  const callApi = action[APICall];
  if (!callApi) return next(action);

  const { url, schema } = callApi;

  fetch(url)
  .then((data) => data.json())
  .then((data) => {
    let finalData;
    if (schema) {
      finalData = normalize(data, schema);
    }
    return store.dispatch({
      type: `${action.type}_SUCCESS`,
      data: finalData,
    });
  })
  .catch((error) => store.dispatch({ type: `${action.type}_FAIL`, error }),
    // dispatch error action
  );

  return next(action);
};
