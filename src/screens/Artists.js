import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import DJCard from '../components/DJCard';
import { defaultSearch } from '../actions';
import artists from './Artists.css';

class Artists extends Component {

  componentDidMount() {
    this.props.getDJs();
  }

  renderDJs() {
    return this.props.djs.map((element) => <DJCard dj={element} key={element.id} />);
  }

  render() {
    return (
      <div className={artists.djListContainer}>
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
