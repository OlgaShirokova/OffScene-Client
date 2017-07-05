import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as ActionCreators from 'actions';

@connect(data => DialogSimple.getData, ActionCreators)
export default class DialogSimple extends React.Component {
  static getData = state => ({});
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.postOffer();
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Accept"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
          label="BOOK NOW"
          primary={true}
          fullWidth
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title="Your offer has been placed!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          You have placed an order to: <br />
          - DJ name: <br />
          - Location: <br />
          - Date: <br />
          - Amount:
        </Dialog>
      </div>
    );
  }
}

// export default connect(ActionCreators)(DialogSimple)
// export default DialogSimple
