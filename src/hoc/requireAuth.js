import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function requireAuth(Component) {
  class RequireAuth extends Component {
    static getData = ({ auth: { isAuth } }) => ({
      isAuth,
    });

    render() {
      return this.props.isAuth
        ? <Component {...this.props} />
        : <Redirect to="/login" />;
    }
  }

  return connect(data => RequireAuth.getData)(RequireAuth);
}
