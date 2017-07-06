// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import TextField from 'material-ui/TextField'
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
// import Checkbox from 'material-ui/Checkbox'
// import DatePicker from 'material-ui/DatePicker'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
//
// const validate = values => {
//   const errors = {}
//   const requiredFields = [
//     'date',
//     'price',
//     'location',
//   ]
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required'
//     }
//   })
//   return errors
// }
//
// const renderTextField = ({
//   input,
//   label,
//   meta: { touched, error },
//   ...custom
// }) => (
//   <TextField
//     hintText={label}
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     {...custom}
//   />
// )
//
// const renderCheckbox = ({ input, label }) => (
//   <Checkbox
//     label={label}
//     checked={input.value ? true : false}
//     onCheck={input.onChange}
//   />
// )
//
// const renderRadioGroup = ({ input, ...rest }) => (
//   <RadioButtonGroup
//     {...input}
//     {...rest}
//     valueSelected={input.value}
//     onChange={(event, value) => input.onChange(value)}
//   />
// )
//
// const renderSelectField = ({
//   input,
//   label,
//   meta: { touched, error },
//   children,
//   ...custom
// }) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     {...custom}
//   />
// )
//
// const NewEventPage = props => {
//   const { pristine, reset, submitting } = props
//
//   const handleSubmit = () => {
//     console.log('submitted bishes');
//   }
//
//   return (
//     <form>
//       <div>
//         <Field
//           name="date"
//           component={DatePicker}
//           format={null}
//           floatingLabelText="What is the day of the event?"
//         />
//       </div>
//       <div>
//         <Field name="price" component={renderTextField} label="Make an offer $" />
//       </div>
//       <div>
//         <Field name="location" component={renderTextField} label="What's the event location?" />
//       </div>
//       <div style={{ marginTop: '15px' }}>
//         <button type="button" disabled={pristine || submitting} onClick={() => console.log('submitted')}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   )
// }
//
// export default reduxForm({
//   form: 'formBookNow', // a unique identifier for this form
//   validate,
// })(NewEventPage)

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
  form: 'bookNowForm',
  validate,
})(connect(data => NewEventPage.getData, ActionCreators)(NewEventPage));
