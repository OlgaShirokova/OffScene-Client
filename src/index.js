import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logger from 'redux-logger';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import { Home, Events, Artists, LogIn, SignUp } from './screens/index';
import DJDetail from './components/DJDetail';
import Header from './components/Header';
import apiMiddleware from './apiMiddleware';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(apiMiddleware, logger, thunk),
));

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/events" component={Events} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/artists/:id" component={DJDetail} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
