import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';

class Filter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  renderFilterContent() {
    if (this.props.type === 'date') {
      return (
        <div>
          <DatePicker hintText="Portrait Dialog" mode="landscape" />
          <DatePicker hintText="Landscape Dialog" mode="landscape" />
        </div>
      );
    } else if (this.props.type === 'genre') {
      return (
        <div>
          <AutoComplete
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
        </div>
      );
    }

    return (
      <div>
        This is a price filter
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}
        {this.renderFilterContent()}
      </div>
    );
  }
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
};


export default Filter;
