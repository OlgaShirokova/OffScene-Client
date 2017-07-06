import React, { Component } from 'react';
import * as ActionCreators from 'actions';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { EventList } from 'components';
import styles from './styles.css';

class MyEventsPage extends Component {
  state = {
    slideIndex: 0,
  };

  componentWillMount() {
    this.props.getMyEvents();
  }

  _handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  _textView = i => {
    const text = [
      'Events awaiting for DJs confirmation.',
      'Previous events and the onces canceled/rejected.',
      'Events awaiting for Organizers confirmation.',
      'Upcoming and accepted events.',
    ];
    return text[i];
  };

  _View = () => {
    let views = [];
    for (let i = 0; i < 4; i++) {
      views.push(
        <div key={i}>
          <h2 className={styles.subtitle}>
            {this._textView(i)}
          </h2>
          {this._renderYourEvents(i)}
        </div>
      );
    }
    return views;
  };

  _renderYourEvents = k => {
    return (
      <div>
        <h4 className={styles.subtitle}>YOUR EVENTS</h4>
        <EventList listOfEvents={this.props.listOfEvents[k]} />
      </div>
    );
  };

  _renderTabs = () => {
    return (
      <div>
        <Tabs onChange={this._handleChange} value={this.state.slideIndex}>
          <Tab label="WAITING FOR DJ" value={0} />
          <Tab label="WAITING FOR ORG" value={2} />
          <Tab label="ACCEPTED/UPCOMING" value={3} />
          <Tab label="PAST/CANCELED" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          {this._View()}
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

function mapStateToProps(state) {
  const events = [[], [], [], []];
  Object.values(state.entities.events).map(ev => {
    if (ev.status === 4) events[1].push(ev);
    else events[ev.status].push(ev);
  });
  return { listOfEvents: events };
}

export default connect(mapStateToProps, ActionCreators)(MyEventsPage);
