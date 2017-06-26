import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from './App.css';
import Header from './components/Header';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
      </div>
    );
  }
}

export default App;
