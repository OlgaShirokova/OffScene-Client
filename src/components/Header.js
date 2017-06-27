import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from '../App.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.navContainer}>
        <ul className={styles.header}>
          <li className={styles.headerElement}><Link to="/">Logo</Link></li>
          <li className={styles.headerElement}><Link to="/events">Events</Link></li>
          <li className={styles.headerElement}><Link to="/artists">Artists</Link></li>
          <li className={styles.headerElement}><Link to="/signup">Sign Up</Link></li>
          <li className={styles.headerElement}><Link to="/login">Log In</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
