import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, arrayOf, object } from 'prop-types';
import { defaultSearch } from '../actions';
import DJCard from '../components/DJCard';
import Header from '../components/Header';
import artists from './Artists.css';

class Artists extends Component {
  componentWillMount() {
    this.props.getDJs();
  }

  renderDJs() {
    return this.props.djs.map((element) => <DJCard dj={element} key={element.id} />);
  }

  render() {
    return (
      <div>
        <Header />
        <div className={artists.djListContainer}>
          {this.renderDJs()}
        </div>
      </div>
    );
  }
}

Artists.propTypes = {
  getDJs: func.isRequired,
  djs: arrayOf(object).isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.djs,
});

const mapDispatchToProps = (dispatch) => ({
  getDJs: () => dispatch(defaultSearch()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
