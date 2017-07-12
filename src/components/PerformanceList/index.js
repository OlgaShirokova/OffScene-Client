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

export default class PerformanceList extends Component {
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
            <TableHeaderColumn>ACTOR-RATING</TableHeaderColumn>
            <TableHeaderColumn>ORGANIZER-RATING</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.listOfPerformances.map(performance => {
            return (
              <TableRow key={performance.id}>
                <TableRowColumn>
                  {performance.date.slice(0, 9)}
                </TableRowColumn>
                <TableRowColumn>
                  {performance.location}
                </TableRowColumn>
                <TableRowColumn>
                  {performance.price}
                </TableRowColumn>
                <TableRowColumn>
                  {this.ratings(performance.actorRating)}
                </TableRowColumn>
                <TableRowColumn>
                  {this.ratings(performance.orgRating)}
                </TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
