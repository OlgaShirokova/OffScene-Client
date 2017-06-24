import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navContainer">
        <ul className="header">
          <li>Logo</li>
          <li>Events</li>
          <li>Artists</li>
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </div>
    );
  }
}

export default Header;
