import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Header.css';

const Link = (options) => (<NavLink activeClassName={styles.active} {...options}>
  {options.title}</NavLink>);

class Header extends Component {
  render() {
    return (
      <Router>
        <ul className={styles.header}>
          <li><Link to="/home" title="Logo" /></li>
          <li><Link to="/events" title="Events" /></li>
          <li><Link to="/artists" title="Artists" /></li>
          <li><Link to="/signup" title="Sign Up" /></li>
          <li><Link to="/login" title="Log In" /></li>
        </ul>
      </Router>
    );
  }
}

export default Header;
