import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './styles.css';
import * as ActionCreators from 'actions';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <Card className={styles.container}>
      <form action="/" onSubmit={onSubmit}>
        <h2 className={styles.subtitle}>Login</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

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

        <div className={styles.loginButton}>
          <RaisedButton type="submit" label="Log in" default />
        </div>

        <CardText ><p>Dont have an account ?</p><Link to={'/signup'}>Create one</Link></CardText>
      </form>
    </Card>
  );

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

@connect(null, ActionCreators)
export default class LoginPage extends Component {
  state = {
    errors: {},
    user: {
      email: '',
      password: '',
    },
  }

  _processForm = (event) => {
    event.preventDefault();
    const { email, password } = this.state.user;
    this.props.signIn({ email, password })

  }

  _changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }


  render() {
    return (
      <LoginForm
        onSubmit={this._processForm}
        onChange={this._changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />

    );
  }

}

LoginPage.propTypes = {
  signIn: PropTypes.func.isRequired,
};


