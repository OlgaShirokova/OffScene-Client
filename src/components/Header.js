import React, { Component } from 'react';
import styles from '../App.css';


class Header extends Component {
  render() {
    return (
      <div className={styles.navContainer}>
        <ul className={styles.header}>
          <li className={styles.headerElement}>Logo</li>
          <li className={styles.headerElement}>Events</li>
          <li className={styles.headerElement}>Artists</li>
          <li className={styles.headerElement}>Sign Up</li>
          <li className={styles.headerElement}>Log In</li>
        </ul>
      </div>
    );
  }
}

export default Header;
