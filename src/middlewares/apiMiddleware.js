import { normalize, schema as Schema } from 'normalizr';
import { getToken, saveToken } from 'utils/localStorage';
import { signOut } from 'actions';
import queryString from 'query-string';
const movieGenre = new Schema.Entity('movieGenres');
const actor = new Schema.Entity('actors', {
  movieGenres: [movieGenre],
});
const performance = new Schema.Entity('performances');

export const schemas = {
  movieGenre,
  actor,
  performance,
  actorArray: new Schema.Array(actor),
  performanceArray: new Schema.Array(performance),
};

export const API_CALL = Symbol('API_CALL');

export default ({ basePath }) => ({ dispatch }) => next => async action => {
  if (!action[API_CALL]) return next(action);
  let {
    path,
    header = {},
    data,
    method = 'get',
    onSuccess,
    schema,
    url,
  } = action[API_CALL];
  dispatch({ type: action.type });
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
    ...header,
  });

  let fullUrl = url ? url : basePath + path;

  let body = undefined;

  if (method === 'get') {
    const queryParams = queryString.stringify(data);

    if (queryParams) {
      path = `${path}?${queryParams}`;
      fullUrl = url ? url : basePath + String(path);
    }
  }

  if (method === 'post') {
    try {
      body = JSON.stringify(data);
    } catch (e) {
      console.warn(e);
    }
  }

  const init = { method, headers, body, mode: 'cors', cache: 'default' };
  const req = new Request(fullUrl, init);

  try {
    let payload = await fetch(req)
      .then(data => data.json())
      .catch(err => undefined);

    if (payload && payload.authToken) {
      saveToken(payload.authToken);
    }

    if (payload && payload.errors) {
      if (payload.errors.join() === 'Not Authorized') {
        dispatch(signOut());
      } else {
        dispatch({ type: `${action.type}_FAIL`, errors: payload.errors });
      }
    } else {
      if (schema) payload = normalize(payload, schema);
      dispatch({ type: `${action.type}_SUCCESS`, data: payload });
    }

    if (onSuccess !== undefined) dispatch(onSuccess);
  } catch (payload) {
    dispatch({ type: `${action.type}_FAIL`, data: payload });
  }
};
