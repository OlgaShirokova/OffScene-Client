import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { getDJ } from '../actions';
import styles from './DJDetail.css';

const currentDJId = location.pathname.split('/')[2];

class DJDetail extends Component {
  componentWillMount() {
    this.props.getDJ(currentDJId);
  }

  render() {
    return (
      <div className={styles.djDetailContainer}>
        <div className={styles.topInfo}>
          <div className={styles.name}>
            <ListItem
              primaryText="Brendan Lim"
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              // rightIcon={<CommunicationChatBubble />}
            />
          </div>
        </div>
        <div>You are now at {location.pathname}</div>
      </div>
    );
  }
}

DJDetail.propTypes = {
  getDJ: func.isRequired,
};

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch) => ({
  getDJ: (currentDJId) => dispatch(getDJ(currentDJId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DJDetail));
