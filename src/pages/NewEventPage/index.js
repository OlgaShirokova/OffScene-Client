import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { object, func } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { SelectField } from 'redux-form-material-ui';
import { Payment, LocationOn } from 'material-ui-icons';
import * as ActionCreators from 'actions';
import styles from './styles.css';
import { ArtistCard, Dialog } from 'components';

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
            <RaisedButton
              label="REFER TO ARTISTS PAGE"
              primary={!0}
              fullWidth={!0}
            />
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
                <Field
                  name="city"
                  component={SelectField}
                  floatingLabelText="Select a city"
                >
                  <MenuItem value="Barcelona" primaryText="Barcelona" />
                  <MenuItem value="Madrid" primaryText="Madrid" />
                  <MenuItem value="Valencia" primaryText="Valencia" />
                  <MenuItem value="Los Angeles" primaryText="Los Angeles" />
                </Field>
                <RaisedButton label="Book now" primary={!0} />
                <Dialog />
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
})(connect(data => NewEventPage.getData, ActionCreators)(NewEventPage));
