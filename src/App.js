import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styles from './App.css';
import Header from './components/Header';
import { submitTest } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.submitTest();
  }

  render() {
    return (
      <div className={styles.App}>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  testReducer: state.testReducer,
});

const mapDispatchToProps = (dispatch) => ({
  submitTest: () => dispatch(submitTest()),
});

App.propTypes = {
  submitTest: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
