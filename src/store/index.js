import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from 'reducers';
const defaultConfig = {
  basePath: 'http://localhost:8000',
};
import apiMiddleware from 'middlewares/apiMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(apiMiddleware(defaultConfig), logger))
);
