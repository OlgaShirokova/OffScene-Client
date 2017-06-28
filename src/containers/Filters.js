import React, { Component } from 'react';
import Filter from '../components/Filter';

const styles = {
  filtersContainer: {
    height: 300,
  },
  filtersRow: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  chipsRow: {
    backgroundColor: 'yellow',
  },
};

class Filters extends Component {

  render() {
    return (
      <div style={styles.filtersContainer}>
        <div style={styles.filtersRow}>
          <Filter type='date' />
          <Filter type='genre' />
          <Filter type='price' />
        </div>
        <div style={styles.chipsRow}>
          Chips
        </div>
      </div>
    );
  }
}

export default Filters;
