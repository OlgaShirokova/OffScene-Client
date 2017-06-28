import React, { Component } from 'react';
import Filter from '../components/Filter';

const styles = {
  filtersContainer: {
  },
  filtersRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  chipsRow: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
};

class Filters extends Component {

  render() {
    console.log(this.state);
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
