import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Header.css';

const Link = options => (<NavLink activeClassName={styles.active} {...options}>
  {options.title.toUpperCase()}</NavLink>);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.authentication = this.authentication.bind(this);
    this.eventsArtists = this.eventsArtists.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  eventsArtists() {
    return (
      <div>
        <MenuItem onTouchTap={this.handleClose}><Link to="/events" title="Events" /></MenuItem>
        <MenuItem onTouchTap={this.handleClose}><Link to="/artists" title="Artists" /></MenuItem>
      </div>
    );
  }

  authentication() {
    return (
      <div>
        <MenuItem onTouchTap={this.handleClose}><Link to="/signup" title="Sign Up" /></MenuItem>
        <MenuItem onTouchTap={this.handleClose}><Link to="/login" title="Log In" /></MenuItem>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar
            title={<NavLink to="/home" activeClassName={styles.title}>OFFSTAGE</NavLink>}
            style={{ backgroundColor: 'white' }}
            iconElementLeft={<IconButton><IconMenu onTouchTap={this.handleToggle} /></IconButton>}
          />
          <Drawer
            docked={false}
            width={100}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
          >
            <MenuItem onTouchTap={this.handleClose}><Link to="/home" title="Home" /></MenuItem>
            {this.eventsArtists()}
            {this.authentication()}
          </Drawer>

        </div>
      </Router>
    );
  }
}

export default Header;
