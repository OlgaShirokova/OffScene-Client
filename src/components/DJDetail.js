import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDJ } from '../actions';
// import { withRouter } from 'react-router-dom';

class DJDetail extends Component {
  componentDidMount() {
    console.log(this.props.match);
    console.log(this.props.match.params.id);
    console.log(this.props, '----');

    // this.props.getDJDetail();
  }
  render() {
    return (
      <div>
        <div>hello</div>
        <div>You are now at {location.pathname}</div>
      </div>
    );
  }
}

DJDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  // getDJDetail: PropTypes.func,
};

const mapStateToProps = (state) => ({
  dj: state.djs.id,
});

const mapDispatchToProps = (dispatch) => ({
  getDJDetail: () => dispatch(getDJ(this.props.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DJDetail);
