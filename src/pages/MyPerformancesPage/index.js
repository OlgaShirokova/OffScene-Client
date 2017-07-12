import React, { Component } from 'react';
import * as ActionCreators from 'actions';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { PerformanceList } from 'components';
import styles from './styles.css';

class MyPerformancesPage extends Component {
  state = {
    slideIndex: 0,
  };

  componentWillMount() {
    this.props.getMyPerformances();
  }

  _handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  _textView = i => {
    const text = [
      'Performances awaiting for Actors confirmation.',
      'Previous performances and the once canceled/rejected.',
      'Performances awaiting for Organizers confirmation.',
      'Upcoming and accepted performances.',
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
          {this._renderYourPerformances(i)}
        </div>
      );
    }
    return views;
  };

  _renderYourPerformances = k => {
    return (
      <div>
        <h4 className={styles.subtitle}>YOUR PERFORMANCES</h4>
        <PerformanceList
          listOfPerformances={this.props.listOfPerformances[k]}
        />
      </div>
    );
  };

  _renderTabs = () => {
    return (
      <div>
        <Tabs onChange={this._handleChange} value={this.state.slideIndex}>
          <Tab label="WAITING FOR ACTORS" value={0} />
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
      <div>
        {this._renderTabs()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const performances = [[], [], [], []];
  Object.values(state.entities.performances).map(ev => {
    if (ev.status === 4) performances[1].push(ev);
    else performances[ev.status].push(ev);
  });
  return { listOfPerformances: performances };
}

export default connect(mapStateToProps, ActionCreators)(MyPerformancesPage);
