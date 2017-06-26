import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.App}>
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
