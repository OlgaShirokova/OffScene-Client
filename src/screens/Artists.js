import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object } from 'prop-types';
import { defaultSearch } from '../actions';
import artists from './Artists.css';

class Artists extends Component {
  componentWillMount() {
    this.props.getDJs();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.djs);
  }

  renderDJs() {
    //eslint-disable-next-line
    return Object.keys(this.props.djs)
    .map((key) => this.props.djs[key])
    .map((element) => <span key={element.id}>DJ: {element.name}</span>);
  }

  render() {
    return (
      <div>
        <div className={artists.djListContainer}>
          {this.renderDJs()}
        </div>
      </div>
    );
  }
}

Artists.propTypes = {
  getDJs: func.isRequired,
  djs: object.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
});

const mapDispatchToProps = (dispatch) => ({
  getDJs: () => dispatch(defaultSearch()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
