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
import styles from 'pages/Screens.css';

export default class EventList extends Component {
  ratings = value => {
    if (value === null) return '-';
    return (
      <Rating value={value / 100} max={5} className={styles.rating} disabled />
    );
  };

  render() {
    return (
      <Table>
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
          {this.props.listOfEvents.map(event => {
            return (
              <TableRow key={event.id}>
                <TableRowColumn>
                  {event.date.slice(0, 9)}
                </TableRowColumn>
                <TableRowColumn>
                  {event.location}
                </TableRowColumn>
                <TableRowColumn>
                  {event.price}
                </TableRowColumn>
                <TableRowColumn>
                  {this.ratings(event.djRating)}
                </TableRowColumn>
                <TableRowColumn>
                  {this.ratings(event.orgRating)}
                </TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
