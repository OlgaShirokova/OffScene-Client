import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { EventList } from 'components';
import styles from './styles.css';

export default class MyEventsPage extends Component {
  state = {
    slideIndex: 0,
  };

  _handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  _renderYourEvents = k => {
    return (
      <div>
        <h4 className={styles.subtitle}>YOUR EVENTS</h4>
        <EventList num={k} />
      </div>
    );
  };

  _renderTabs = () => {
    return (
      <div>
        <Tabs onChange={this._handleChange} value={this.state.slideIndex}>
          <Tab label="WAITING FOR DJ" value={0} />
          <Tab label="WAITING FOR ORG" value={1} />
          <Tab label="ACCEPTED/UPCOMING" value={2} />
          <Tab label="PAST/CANCELED" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 className={styles.subtitle}>
              Events awaiting for DJs confirmation.
            </h2>
            {this._renderYourEvents(0)}
          </div>
          <div className={styles.slide}>
            <h2 className={styles.subtitle}>
              Events awaiting for Organizers confirmation.
            </h2>
            {this._renderYourEvents(2)}
          </div>
          <div className={styles.slide}>
            <h2 className={styles.subtitle}>Upcoming and accepted events.</h2>
            {this._renderYourEvents(3)}
          </div>
          <div className={styles.slide}>
            <h2 className={styles.subtitle}>
              Previous events and the onces canceled/rejected.
            </h2>
            {this._renderYourEvents(1)}
          </div>
        </SwipeableViews>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.yourEvents}>
        {this._renderTabs()}
      </div>
    );
  }
}
