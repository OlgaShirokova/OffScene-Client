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
import { ActorCard, Dialog } from 'components';

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

class NewPerformancePage extends Component {
  static getData = state => ({
    actors: state.entities.actors,
  });
  componentWillMount() {
    this.props.getActors();
  }

  render() {
    if (this.props.actors[this.props.match.params.id] === undefined) {
      return (
        <div>
          <Link to={`/actors/${this.props.match.params.id}`}>
            <RaisedButton label="REFER TO ARTISTS PAGE" primary fullWidth />
          </Link>
        </div>
      );
    }
    return (
      <div className={styles.bookNowContainer}>
        <div>
          <Paper style={{ padding: '20px' }}>
            <form>
              <div>
                <Subheader inset={false} className={styles.subheader}>
                  <BookmarkBorder />
                  <span>Select a date</span>
                </Subheader>
                <Field
                  name="date"
                  component={DatePicker}
                  floatingLabelText="What is the day of the event?"
                />
              </div>
              <div>
                <Subheader inset={false} className={styles.subheader}>
                  <LocationOn />
                  <span>Location</span>
                </Subheader>
                <Field
                  id={'city'}
                  name="city"
                  component={renderTextField}
                  type="text"
                  placeholder="City"
                />
              </div>
              <div>
                <Subheader inset={false} className={styles.subheader}>
                  <Payment />
                  <span>Payment</span>
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
          <ActorCard actor={this.props.actors[this.props.match.params.id]} />
        </div>
      </div>
    );
  }
}

NewPerformancePage.propTypes = {
  actors: object.isRequired,
  match: object.isRequired,
  getActors: func.isRequired,
};

export default reduxForm({
  form: 'bookNowForm',
  validate,
})(
  connect(data => NewPerformancePage.getData, ActionCreators)(
    NewPerformancePage
  )
);
