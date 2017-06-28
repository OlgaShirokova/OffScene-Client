import React, { Component } from 'react';
import Filter from '../components/Filter';

const styles = {
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 300,
    backgroundColor: 'red',
  },
};

class Filters extends Component {

  render() {
    return (
      <div style={styles.filters}>
        <Filter type='date' />
        <Filter type='genre' />
        <Filter type='price' />
      </div>
    );
  }
}

export default Filters;
