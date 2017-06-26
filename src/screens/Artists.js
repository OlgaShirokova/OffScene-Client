import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import DJCard from '../components/DJCard';
import { defaultSearch } from '../actions';

class Artists extends Component {

  componentDidMount() {
    this.props.getDJs();
  }

  renderDJs() {
    return this.props.djs.map((element) => <DJCard dj={element} />);
  }

  render() {
    // if (this.props.djs.length) {
    //   this.props.djs.forEach((dj) => console.log('deejay: ', dj));
    //   return (<DJCard dj={{ dj }} />);
    // }
    // return null;
    return (
      <div className="movie-list-container">
        {this.renderDJs()}
      </div>
    );
  }
}

Artists.propTypes = {
  getDJs: func.isRequired,
  djs: func.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.djs,
});

const mapDispatchToProps = (dispatch) => ({
  getDJs: () => dispatch(defaultSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
