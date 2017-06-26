import React, { Component } from 'react';
import DJCard from '../components/DJCard';

class Artists extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '100%', display: 'flex', flowDirection: 'row', justifyContent: 'space-around' }}>
          <DJCard width='300px' />
          <DJCard width='300px' />
          <DJCard width='300px' />
          <DJCard width='300px' />
        </div>
      </div>
    );
  }
}

export default Artists;
