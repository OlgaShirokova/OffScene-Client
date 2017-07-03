import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { object } from 'prop-types';
// import { AutoComplete as MUIAutoComplete } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {
  // AutoComplete,
  SelectField,
} from 'redux-form-material-ui';
import { Payment, LocationOn } from 'material-ui-icons';
import DJCard from '../components/DJCard';
import styles from './BookNow.css';

class BookNow extends Component {
  render() {
    return (
      <div className={styles.bookNowContainer}>
        <Paper className={styles.bookNow}>
          <div style={{ display: 'flex' }}>
            <form className={styles.formContainer}>
              <div className={styles.form}>
                <Subheader inset={false} className={styles.subheader}>
                  <Payment className={styles.icon} />
                  Payment
                </Subheader>
                <Field
                  name="price"
                  component={SelectField}
                  floatingLabelText="Select a plan"
                >
                  <MenuItem value="0 - 500$" primaryText="0 - 500$" />
                  <MenuItem value="500$ - 2000$" primaryText="500$ - 2000$" />
                  <MenuItem value="2000$ - 5000$" primaryText="2000$ - 5000$" />
                  <MenuItem value="+5000$" primaryText="+5000$" />
                </Field>
                <Subheader inset={false} className={styles.subheader}>
                  <LocationOn className={styles.icon} />
                  Location
                </Subheader>
                {/* <Field /> */}
                <RaisedButton label="Primary" primary={!0} />
              </div>
            </form>
          </div>
        </Paper>
        <DJCard dj={this.props.djs[24]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
});

BookNow.propTypes = {
  djs: object.isRequired,
};

BookNow = connect(
  mapStateToProps,
)(BookNow);

export default reduxForm({
  form: 'bookNowForm',
})(BookNow);
