import React, { Component } from 'react';
import DJCard from '../components/DJCard';

class Artists extends Component {

  componentDidMount() {
    const djs = [];
    fetch('http://private-272859-offstage.apiary-mock.com/search')
    .then((data) => data.json().forEach((val) => djs.push(val)));
    console.log(djs[0]);
  }

  render() {
    return (
      <div>
        <div style={{ width: '100%', display: 'flex', flowDirection: 'row', justifyContent: 'space-around' }}>
          <DJCard dj={this.djs[0]} />
        </div>
      </div>
    );
  }
}

export default Artists;
