import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from 'actions';
import styles from './styles.css';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function LoginForm({ onSubmit, onChange, errors, user }) {
  return (
    <Card className={styles.container}>
      <form action="/" onSubmit={onSubmit}>
        <h2 className={styles.subtitle}>Login</h2>
        {errors &&
          <p className={styles.errorMsg}>
            {errors}
          </p>}

        <div className={styles.fieldLine}>
          <TextField
            floatingLabelText="Email"
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

        <div className={styles.loginButton}>
          <RaisedButton type="submit" label="Log in" default />
        </div>

        <CardText>
          <p>Dont have an account ?</p>
          <Link to={'/signup'}>Create one</Link>
        </CardText>
      </form>
    </Card>
  );
}

@connect(data => LoginPage.getData, ActionCreators)
export default class LoginPage extends Component {
  static getData = ({
    pages: { loginPage: { form } },
    auth: { isAuth, isAuthenticating },
  }) => ({
    isAuth,
    isAuthenticating,
    form,
  });

  _handleChange = ({ target: { name, value } }) => {
    this.props.loginPageFormChange({ [name]: value });
  };

  _handleSubmit = event => {
    const { email, password } = this.props.form;
    event.preventDefault();
    this.props.signIn({ email, password });
  };

  render() {
    const { isAuth, isAuthenticating, form: { errors, ...user } } = this.props;

    if (isAuth) {
      return <Redirect to="/" />;
    }

    if (isAuthenticating) {
      return <div>Loading...</div>;
    }

    return (
      <LoginForm
        onSubmit={this._handleSubmit}
        onChange={this._handleChange}
        errors={errors}
        user={user}
      />
    );
  }
}
