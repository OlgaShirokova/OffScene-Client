import { normalize, schema as Schema } from 'normalizr';
import { getToken, saveToken } from 'utils/localStorage';
const genre = new Schema.Entity('genres');
const dj = new Schema.Entity('djs', {
  genres: [genre],
});
const event = new Schema.Entity('events');

export const schemas = {
  genre,
  dj,
  event,
  djArray: new Schema.Array(dj),
  eventArray: new Schema.Array(event),
};

export const API_CALL = Symbol('API_CALL');

export default ({ basePath }) => ({ dispatch }) => next => async action => {
  if (!action[API_CALL]) return next(action);
  const { path, header = {}, data, method = 'GET', onSuccess, schema } = action[
    API_CALL
  ];
  dispatch({ type: action.type });
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
    ...header,
  });
  let body = '{}';

  try {
    body = JSON.stringify(data);
  } catch (e) {
    console.warn(e);
  }
  const init = { method, headers, body, mode: 'cors', cache: 'default' };
  const req = new Request(basePath + path, init);

  try {
    let payload = await fetch(req)
      .then(data => data.json())
      .catch(err => undefined);

    if (payload && payload.authToken) {
      saveToken(payload.authToken);
    }

    if (payload && payload.errors) {
      dispatch({ type: `${action.type}_FAIL`, errors: payload.errors });
    } else {
      if (schema) payload = normalize(payload, schema);
      dispatch({ type: `${action.type}_SUCCESS`, payload });
    }

    if (onSuccess !== undefined) dispatch(onSuccess);
  } catch (payload) {
    dispatch({ type: `${action.type}_FAIL`, payload });
  }
};
