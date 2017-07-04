import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './styles.css';

const SignUpForm = ({ onSubmit, onChange, errors, user }) =>
  <Card className={styles.container}>
    <form action="/" onSubmit={onSubmit}>
      <h2 className={styles.subtitle}>Sign Up</h2>

      {errors.summary &&
        <p className="error-message">
          {errors.summary}
        </p>}

      <div className={styles.fieldLine}>
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className={styles.fieldLine}>
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className={styles.signupButton}>
        <input
          className={styles.choiceButton}
          type="radio"
          name="role"
          value="0"
          checked
        />
        <p>DJ</p>
        <input
          className={styles.choiceButton}
          type="radio"
          name="role"
          value="1"
        />
        <p>Organizer</p>
      </div>

      <div className={styles.signupButton}>
        <RaisedButton type="submit" label="Sign Up" default />
      </div>
    </form>
  </Card>;

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default class SignupPage extends Component {
  state = {
    errors: {},
    user: {
      email: '',
      password: '',
    },
  };

  processForm = event => {
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  };

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}
