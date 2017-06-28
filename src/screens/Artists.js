import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object } from 'prop-types';
import Paper from 'material-ui/Paper';
import { defaultSearch } from '../actions';
import artists from './Artists.css';
import DJCard from '../components/DJCard';
import Filters from '../containers/Filters';

const styles = {
  paperContainer: {
    margin: 20,
    display: 'inline-block',
  },
};

class Artists extends Component {
  componentWillMount() {
    this.props.getDJs();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.djs);
  }

  renderDJs() {
    return Object.keys(this.props.djs)
    .map((key) => this.props.djs[key])
    .map((element) => <DJCard dj={element} key={element.id} />);
  }

  render() {
    return (
      <div>
        <Paper style={styles.paperContainer} zDepth={1} rounded={1} >
          <Filters />
        </Paper>
        <div className={artists.djListContainer}>
          {this.renderDJs()}
        </div>
      </div>
    );
  }
}

Artists.propTypes = {
  getDJs: func.isRequired,
  djs: object.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
});

const mapDispatchToProps = (dispatch) => ({
  getDJs: () => dispatch(defaultSearch()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
