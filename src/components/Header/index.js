import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';
import * as ActionCreators from 'actions';

const Link = options =>
  <NavLink activeClassName={styles.active} {...options}>
    {options.title.toUpperCase()}
  </NavLink>;

@connect(data => Header.getData, ActionCreators)
export default class Header extends Component {
  static getData = ({ auth }) => ({
    isAuth: !!auth.id,
  });

  state = {
    open: false,
  };

  _handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  _handleClose = () => {
    this.setState({ open: false });
  };

  _renderMenuItemsAuth() {
    return [
      <MenuItem onTouchTap={this._handleClose}>
        <Link to="/events" title="Events" />
      </MenuItem>,
      <MenuItem onTouchTap={this._handleClose}>
        <a
          onClick={event => {
            event.preventDefault();
            this._handleLogout();
          }}
        >
          LOG OUT
        </a>
      </MenuItem>,
    ];
  }

  _renderMenuItemsNoAuth() {
    return [
      <MenuItem onTouchTap={this._handleClose}>
        <Link to="/signup" title="Sign Up" />
      </MenuItem>,
      <MenuItem onTouchTap={this._handleClose}>
        <Link to="/login" title="Log In" />
      </MenuItem>,
    ];
  }

  _handleLogout = () => {
    this.props.signOut();
  };

  _renderMenuItems() {
    return (
      <div>
        <MenuItem onTouchTap={this._handleClose}>
          <Link exact to="/" title="Home" />
        </MenuItem>
        <MenuItem onTouchTap={this._handleClose}>
          <Link to="/artists" title="Artists" />
        </MenuItem>
        {this.props.isAuth
          ? this._renderMenuItemsAuth()
          : this._renderMenuItemsNoAuth()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <AppBar
          title={
            <NavLink exact to="/" activeClassName={styles.title}>
              OFFSTAGE
            </NavLink>
          }
          style={{ backgroundColor: 'white' }}
          iconElementLeft={
            <IconButton>
              <IconMenu onTouchTap={this._handleToggle} />
            </IconButton>
          }
        />
        <Drawer
          docked={false}
          width={100}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          {this._renderMenuItems()}
        </Drawer>
      </div>
    );
  }
}
