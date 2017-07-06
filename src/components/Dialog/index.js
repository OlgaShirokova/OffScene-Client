import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { object, number } from 'prop-types';
import * as ActionCreators from 'actions';

@connect(data => DialogSimple.getData, ActionCreators)
export default class DialogSimple extends React.Component {
  static getData = state => ({
    djs: state.entities.djs,
    selectedDate: state.pages.artistsPage.results,
    values: state.form.bookNowForm.values || {
      date: new Date(),
      location: 'Barcelona',
      price: 8000,
    },
  });
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log(this.props.values);
    this.props.postOffer({
      date: this.props.values.date
        ? this.props.values.date.getTime()
        : Date.now(),
      djId: Number(this.props.id),
      location: this.props.values.city ? this.props.values.city : 'Barcelona',
      price: this.props.values.price ? this.props.values.price : 8000,
    });
    this.setState({ open: false });
  };

  render() {
    console.log('values', this.props.values);
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
          - DJ name: <b>{this.props.djs[this.props.id].name}</b>
          <br />
          - Location:{' '}
          <b>{JSON.stringify(this.props.values && this.props.values.city)}</b>
          <br />
          - Date:{' '}
          <b>{JSON.stringify(this.props.values && this.props.values.date)}</b>
          <br />
          - Amount:{' '}
          <b>{JSON.stringify(this.props.values && this.props.values.price)}</b>
        </Dialog>
      </div>
    );
  }
}

DialogSimple.propTypes = {
  id: object.isRequired,
  djs: object.isRequired,
  selectedDate: number,
};

// export default connect(ActionCreators)(DialogSimple)
// export default DialogSimple
