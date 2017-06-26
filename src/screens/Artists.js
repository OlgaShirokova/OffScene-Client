import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import DJCard from '../components/DJCard';
import { search } from '../actions';

class Artists extends Component {

  componentDidMount() {
    this.props.getDJs();
  }

  render() {
    return (
      <div>
        <div style={{ width: '100%', display: 'flex', flowDirection: 'row', justifyContent: 'space-around' }}>
          <DJCard dj={{
            id: 1,
            name: 'string',
            picture: 'string',
            priceWe: 10,
            priceWd: 20,
            city: 'string',
            avgRating: 5,
            genres: [],
          }}
          />
        </div>
      </div>
    );
  }
}

Artists.propTypes = {
  getDJs: func.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.djs,
});

const mapDispatchToProps = (dispatch) => ({
  getDJs: () => dispatch(search()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
