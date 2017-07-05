import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './styles.css';
import * as ActionCreators from 'actions';

const LoginForm = ({ onSubmit, onChange, errors, user: { email, password } }) =>
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
          errorText={errors && ' '}
          onChange={onChange}
          value={email}
        />
      </div>

      <div className={styles.fieldLine}>
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors && ' '}
          value={password}
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
  </Card>;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

@connect(data => LoginPage.getData, ActionCreators)
export default class LoginPage extends Component {
  static getData = ({ auth: { isAuth, isAuthenticating, errors } }) => ({
    isAuth,
    isAuthenticating,
    errors,
  });

  state = {
    errors: {
      email: ' ',
      password: ' ',
      summary: 'Invalid Credentials',
    },
    user: {
      email: '',
      password: '',
    },
  };

  _processForm = event => {
    event.preventDefault();
    const { email, password } = this.state.user;
    this.props.signIn({ email, password });
    // this.setState({ user: { email: '', password: '' } })
  };

  _changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  };

  render() {
    console.log('ccccccccccccccccc', this.props);
    if (this.props.isAuth) {
      return <Redirect to="/" />;
    }

    if (this.props.isAuthenticating) {
      return <div>Loading...</div>;
    }

    return (
      <LoginForm
        onSubmit={this._processForm}
        onChange={this._changeUser}
        errors={this.props.errors}
        user={this.state.user}
      />
    );
  }
}

LoginPage.propTypes = {
  signIn: PropTypes.func.isRequired,
};
