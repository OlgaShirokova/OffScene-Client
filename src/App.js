import React, { Component } from 'react';
// import styles from './App.css';
import { MuiThemeProvider } from 'material-ui';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
