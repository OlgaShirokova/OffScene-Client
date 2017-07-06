import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { object, func } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { SelectField, DatePicker } from 'redux-form-material-ui';
import { Payment, LocationOn, BookmarkBorder } from 'material-ui-icons';
import * as ActionCreators from 'actions';
import styles from './styles.css';
import { ArtistCard, Dialog } from 'components';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />;

const validate = values => {
  const errors = {};
  const requiredFields = ['date', 'city', 'price'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

class NewEventPage extends Component {
  static getData = state => ({
    djs: state.entities.djs,
  });
  componentWillMount() {
    this.props.getArtists();
  }

  render() {
    if (this.props.djs[this.props.match.params.id] === undefined) {
      return (
        <div>
          <Link to={`/artists/${this.props.match.params.id}`}>
            <RaisedButton label="REFER TO ARTISTS PAGE" primary fullWidth />
          </Link>
        </div>
      );
    }
    return (
      <div className={styles.bookNowContainer}>
        <div>
          <Paper className={styles.bookNow}>
            <form className={styles.formContainer}>
              <div className={styles.form}>
                <Subheader inset={false} className={styles.subheader}>
                  <BookmarkBorder className={styles.icon} />
                  Select a date
                </Subheader>
                <Field
                  name="date"
                  component={DatePicker}
                  format={null}
                  floatingLabelText="What is the day of the event?"
                />
                <Subheader inset={false} className={styles.subheader}>
                  <LocationOn className={styles.icon} />
                  Location
                </Subheader>
                <Field
                  id={'city'}
                  name="city"
                  component={renderTextField}
                  type="text"
                  placeholder="City"
                />
                <Subheader inset={false} className={styles.subheader}>
                  <Payment className={styles.icon} />
                  Payment
                </Subheader>
                <Field
                  id={'price'}
                  name="price"
                  component={renderTextField}
                  type="text"
                  placeholder="Place your offer ($)"
                />
                <Dialog id={this.props.match.params.id} />
              </div>
            </form>
          </Paper>
        </div>
        <div>
          <ArtistCard dj={this.props.djs[this.props.match.params.id]} />
        </div>
      </div>
    );
  }
}

NewEventPage.propTypes = {
  djs: object.isRequired,
  match: object.isRequired,
  getArtists: func.isRequired,
};

export default reduxForm({
  validate,
  form: 'bookNowForm',
})(connect(data => NewEventPage.getData, ActionCreators)(NewEventPage));
