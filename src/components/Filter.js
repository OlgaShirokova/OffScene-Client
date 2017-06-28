import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import Subheader from 'material-ui/Subheader';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginBottom: 16,
  },
  filterContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
};

const genres = [
  'Hip-Hop',
  'Rap',
];

class Filter extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    // this.state = {
    //   dataSource: [],
    // };
  }

  handleUpdateInput = (value) => {
    console.log(value);
  };

  renderFilterContent() {
    if (this.props.type === 'date') {
      return (
        <div>
          <DatePicker hintText="Pick a date for your event" mode="landscape" />
        </div>
      );
    } else if (this.props.type === 'genre') {
      return (
        <div>
          <AutoComplete
            floatingLabelText="Type any music genre"
            filter={AutoComplete.fuzzyFilter}
            dataSource={genres}
            maxSearchResults={5}
            onNewRequest={this.handleUpdateInput}
          />
        </div>
      );
    }

    return (
      <div>
        <RadioButtonGroup name="filterPrice" defaultSelected="input3">
          <RadioButton
            value="input1"
            label="0 - 500$"
            style={styles.radioButton}
          />
          <RadioButton
            value="input2"
            label="500$ - 2000$"
            style={styles.radioButton}
          />
          <RadioButton
            value="input3"
            label="2000$ - 5000$"
            style={styles.radioButton}
          />
          <RadioButton
            value="input4"
            label="+5000$"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.filterContainer}>
        <Subheader>
          {this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}
        </Subheader>
        {this.renderFilterContent()}
      </div>
    );
  }
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
};


export default Filter;
