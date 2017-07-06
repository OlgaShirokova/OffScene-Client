import React, { Component } from 'react';
import MaterialSnackBar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import * as ActionCreators from 'actions';

@connect(data => SnackBar.getData, ActionCreators)
export default class SnackBar extends Component {
  static getData = ({ notification }) => ({ notification });

  render() {
    return (
      <MaterialSnackBar
        open={!!this.props.notification}
        message={this.props.notification}
        autoHideDuration={4000}
        onRequestClose={this.props.resetNotification}
      />
    );
  }
}
