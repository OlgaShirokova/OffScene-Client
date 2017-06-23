import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.foo}>
          Parent
        </div>
        <div className={styles.bar}>
          Child
        </div>
      </div>
    );
  }
}

export default App;
