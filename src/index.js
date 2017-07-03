import 'setup/index.css';
import registerServiceWorker from 'setup/registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from 'router'
import store from 'store'

injectTapEventPlugin();
registerServiceWorker();

const App = () => (<Provider store={store}>
    <MuiThemeProvider>
        <Router />
    </MuiThemeProvider>
</Provider>)

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);


