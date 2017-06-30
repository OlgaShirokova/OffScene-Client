import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Rating } from 'material-ui-rating';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


import styles from './Screens.css';

// function translateStatus(id) {
//   let res = 'Status not defined';
//   if (id === 0) res = 'DJ PENDING';
//   else if (id === 1) res = 'DJ REJECTED';
//   else if (id === 2) res = 'WAITING FOR ORG CONFIRMATION';
//   else if (id === 3) res = 'CONFIRMED';
//   else if (id === 4) res = 'CANCELED';
//   return res;
// }

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      events: [],
      selected: [1],
      newEvent: {
        date: '',
        price: '',
      },
    };
  }
  componentWillMount() {
    this.getEvents();
  }
  getEvents = async () => {
    await fetch('http://private-anon-d23f8e55e8-offstage.apiary-mock.com/events')
    .then((res) => res.json()).then((data) => this.setState({ events: data }));
  };
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
  isSelected = (index) => this.state.selected.indexOf(index) !== -1;
  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };
  ratings = (value) => {
    if (value === null) return '-';
    return (
      <Rating
        value={(value / 100)}
        max={5}
        className={styles.rating}
        disabled
      />
    );
  }
  renderTable = (k) => {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>DATE</TableHeaderColumn>
            <TableHeaderColumn>LOCATION</TableHeaderColumn>
            <TableHeaderColumn>PRICE</TableHeaderColumn>
            <TableHeaderColumn>DJ-RATING</TableHeaderColumn>
            <TableHeaderColumn>ORGANIZER-RATING</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.events.map((event, index) => {
            let s = event.status;
            // same category: will end up in tab past/canceled
            if (s === 4) s = 1;
            if (s === k) {
              if (s === 4 || 1) {
                return (
                  <TableRow key={event.id} selected={this.isSelected(index)}>
                    <TableRowColumn>{event.date.slice(0, 9)}</TableRowColumn>
                    <TableRowColumn>{event.location}</TableRowColumn>
                    <TableRowColumn>{event.price}</TableRowColumn>
                    <TableRowColumn>{this.ratings(event.djRating)}</TableRowColumn>
                    <TableRowColumn>{this.ratings(event.orgRating)}</TableRowColumn>
                  </TableRow>
                );
              }
              return (
                <TableRow key={event.id} selected={this.isSelected(index)}>
                  <TableRowColumn>{event.date.slice(0, 9)}</TableRowColumn>
                  <TableRowColumn>{event.location}</TableRowColumn>
                  <TableRowColumn>{event.price}</TableRowColumn>
                </TableRow>
              );
            }
            return null;
          })}
        </TableBody>
      </Table>
    );
  }
  renderYourEvents = (k) => {
    return (
      <div>
        <h4 className={styles.subtitle}>YOUR EVENTS</h4>
        {this.renderTable(k)}
      </div>
    );
  }
  renderTabs = () => {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
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
            <h2 className={styles.subtitle}>Events awaiting for DJs confirmation.</h2>
            {this.renderYourEvents(0)}
          </div>
          <div className={styles.slide}>
            <h2 className={styles.subtitle}>Events awaiting for Organizers confirmation.</h2>
            {this.renderYourEvents(2)}
          </div>
          <div className={styles.slide}>
            <h2 className={styles.subtitle}>Upcoming and accepted events.</h2>
            {this.renderYourEvents(3)}
          </div>
          <div className={styles.slide}>
            <h2 className={styles.subtitle}>Previous events and the onces canceled/rejected.</h2>
            {this.renderYourEvents(1)}
          </div>
        </SwipeableViews>
      </div>
    );
  };
  render() {
    return (
      <div className={styles.yourEvents}>
        {this.renderTabs()}
      </div>
    );
  }
}

export default Events;
