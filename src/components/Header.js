import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import styles from '../App.css';
import { Home, Events, Artists, LogIn, SignUp } from '../screens/index';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className={styles.navContainer}>
          <ul className={styles.header}>
            <li className={styles.headerElement}><Link to="/">Logo</Link></li>
            <li className={styles.headerElement}><Link to="/events">Events</Link></li>
            <li className={styles.headerElement}><Link to="/artists">Artists</Link></li>
            <li className={styles.headerElement}><Link to="/signup">Sign Up</Link></li>
            <li className={styles.headerElement}><Link to="/login">Log In</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </div>
      </Router>
    );
  }
}

export default Header;
