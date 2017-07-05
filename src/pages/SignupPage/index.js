import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './styles.css';
import { connect } from 'react-redux';
import * as ActionCreators from 'actions';
import { Redirect } from 'react-router';

function SignupForm({ onSubmit, onChange, errors, user }) {
  return (
    <Card className={styles.container}>
      <form action="/" onSubmit={onSubmit}>
        <h2 className={styles.subtitle}>Sign Up</h2>

        {errors &&
          <p className={styles.errorMsg}>
            {errors}
          </p>}

        <div className={styles.fieldLine}>
          <TextField
            floatingLabelText="Email"
            type="email"
            name="email"
            onChange={onChange}
            errorText={errors && ' '}
            value={user.email}
          />
        </div>

        <div className={styles.fieldLine}>
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors && ' '}
            value={user.password}
          />
        </div>

        <div className={styles.signupButton}>
          <input
            className={styles.choiceButton}
            type="radio"
            name="role"
            value="0"
            onChange={onChange}
            checked={user.role == 0}
          />
          <p>DJ</p>
          <input
            className={styles.choiceButton}
            type="radio"
            name="role"
            onChange={onChange}
            value="1"
            checked={user.role == 1}
          />
          <p>Organizer</p>
        </div>

        <div className={styles.signupButton}>
          <RaisedButton
            className={styles.innerSignup}
            type="submit"
            label="Sign Up"
            default
          />
        </div>
      </form>
    </Card>
  );
}

@connect(data => SignupPage.getData, ActionCreators)
export default class SignupPage extends Component {
  static getData = ({
    pages: { signupPage: { form, loading, success } },
    auth: { isAuth, isAuthenticating },
  }) => ({
    isAuth,
    isAuthenticating,
    form,
    loading,
    success,
  });

  _handleChange = ({ target: { name, value } }) => {
    this.props.signupPageFormChange({ [name]: value });
  };

  _handleSubmit = event => {
    const { email, password, role } = this.props.form;
    event.preventDefault();

    this.props.signUp({ email, password, role: Number(role) });
  };

  render() {
    const {
      loading,
      success,
      isAuth,
      isAuthenticating,
      form: { errors, ...user },
    } = this.props;

    if (success) {
      return <Redirect to="/login" />;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <SignupForm
        onSubmit={this._handleSubmit}
        onChange={this._handleChange}
        errors={errors}
        user={user}
      />
    );
  }
}
