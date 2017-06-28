import React, { Component } from 'react';
import Filter from '../components/Filter';
import styles from './Filters.css';

class Filters extends Component {

  render() {
    console.log(this.state);
    return (
      <div className={styles.filtersContainer}>
        <div className={styles.filtersRow}>
          <Filter type='date' />
          <Filter type='genre' />
          <Filter type='price' />
        </div>
        <div className={styles.chipsRow}>
          Chips
        </div>
      </div>
    );
  }
}

export default Filters;
