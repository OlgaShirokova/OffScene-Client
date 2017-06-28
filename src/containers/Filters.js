import React, { Component } from 'react';
import Filter from '../components/Filter';

class Filters extends Component {
  render() {
    return (
      <div>
        <div>Filters</div>
        <Filter />
        <Filter />
        <Filter />
      </div>
    );
  }
}

export default Filters;
