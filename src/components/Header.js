import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styles from './Header.css';
import { Home, Events, Artists, LogIn, SignUp } from '../screens/index';

const Link = options => (<NavLink activeClassName={styles.active} {...options}>
  {options.title.toUpperCase()}</NavLink>);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  renderMenuItems() {
    return (
      <div>
        <MenuItem onTouchTap={this.handleClose}><Link to="/home" title="Home" /></MenuItem>
        <MenuItem onTouchTap={this.handleClose}><Link to="/events" title="Events" /></MenuItem>
        <MenuItem onTouchTap={this.handleClose}><Link to="/artists" title="Artists" /></MenuItem>
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
            {this.renderMenuItems()}
          </Drawer>

          <Route exact path="/home" component={Home} />
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
