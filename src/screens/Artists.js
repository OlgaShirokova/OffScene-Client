import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object, array } from 'prop-types';
import Paper from 'material-ui/Paper';
import { defaultSearch, removeSelectedGenre } from '../actions';
import DJCard from '../components/DJCard';
import FiltersForm from '../containers/FiltersForm';

import styles from './Artists.css';

class Artists extends Component {
  componentWillMount() {
    this.props.defaultSearchProp();
  }

  submit = (values) => {
    // print the form values to the console
    console.log(values);
  }

  selectedGenresStrings = () => this.props.selectedGenres.map((key) => {
    return this.props.genres[key].name;
  })

  removeSelectedGenre = (name) => {
    const genre = Object.keys(this.props.genres)
    .map((el) => this.props.genres[el])
    .filter((el) => el.name === name);

    this.props.removeSelectedGenre(genre[0].id);
  }

  renderDJs() {
    return Object.keys(this.props.djs)
    .map((key) => this.props.djs[key])
    .map((element) => <DJCard dj={element} key={element.id} className={styles.djContainer} />);
  }

  render() {
    return (
      <div className={styles.artistsContainer}>
        <Paper className={styles.paperContainer} zDepth={1} rounded={!0} >
          <FiltersForm
            genres={this.props.genres}
            selectedGenres={this.selectedGenresStrings()}
            onRemove={this.removeSelectedGenre}
          />
        </Paper>
        <div className={styles.djListContainer}>
          {this.renderDJs()}
        </div>
      </div>
    );
  }
}

Artists.propTypes = {
  defaultSearchProp: func.isRequired,
  removeSelectedGenre: func.isRequired,
  djs: object.isRequired,
  genres: object.isRequired,
  selectedGenres: array.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
  genres: state.entities.genres,
  selectedGenres: state.pages.artistsPage.selectedGenres,
});

const mapDispatchToProps = (dispatch) => ({
  defaultSearchProp: () => dispatch(defaultSearch()),
  removeSelectedGenre: (name) => dispatch(removeSelectedGenre(name)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
