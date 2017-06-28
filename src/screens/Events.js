import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import styles from './Screens.css';

const eventsData = [
  {
    'id': 123456,
    'date': '2017-07-15T00:00:00+00:00',
    'status': 0,
    'djRating': null,
    'orgRating': null,
    'price': 1000000,
  },
  {
    'id': 467384,
    'date': '2017-07-23T00:00:00+00:00',
    'status': 3,
    'djRating': 500,
    'orgRating': 400,
    'price': 800000,
  },
  {
    'id': 594786,
    'date': '2017-08-04T00:00:00+00:00',
    'status': 4,
    'djRating': null,
    'orgRating': null,
    'price': 1500000,
  },
];

function translateStatus(id) {
  let res = 'Status not defined';
  if (id === 0) res = 'DJ_PENDING';
  else if (id === 1) res = 'DJ_REJECTED';
  else if (id === 2) res = 'DJ_ACCEPTED';
  else if (id === 3) res = 'ORG_CONFIRMED';
  else if (id === 4) res = 'ORG_CANCELED';
  return res;
}

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [1],
    };
  }
  isSelected = (index) => this.state.selected.indexOf(index) !== -1;
  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };
  renderCreator = () => {
    return (
      <div className={styles.fieldContainer}>
        <DatePicker hintText="Date" /><br />
        <br />
        <TextField
          hintText="Price"
        />
        <FloatingActionButton disabled={1} className={styles.buttonAdd}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
  renderTable = () => {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventsData.map((events, index) => {
            return (
              <TableRow selected={this.isSelected(index)}>
                <TableRowColumn>{events.date.slice(0, 9)}</TableRowColumn>
                <TableRowColumn>{events.price}</TableRowColumn>
                <TableRowColumn>{translateStatus(events.status)}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.createEvent}>
          <h4 className={styles.subtitle}>CREATE AN EVENT</h4>
          {this.renderCreator()}
        </div>
        <div className={styles.yourEvents}>
          <h4 className={styles.subtitle}>YOUR EVENTS</h4>
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

export default Events;
