import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object, array, number, string } from 'prop-types';
import Paper from 'material-ui/Paper';
import { defaultSearch, removeSelectedGenre, filterSearch } from '../actions';
import DJCard from '../components/DJCard';
import FiltersForm from '../containers/FiltersForm';

import styles from './Artists.css';

class Artists extends Component {
  componentWillMount() {
    this.props.defaultSearchProp();
  }

  selectedGenresStrings = () => this.props.selectedGenres.map((key) => {
    return this.props.genres[key].name;
  })

  removeSelectedGenre = (name) => {
    const genre = Object.keys(this.props.genres)
    .map((el) => this.props.genres[el])
    .filter((el) => el.name === name);

    this.props.removeSelectedGenre(genre[0].name);
  }

  handleFilterChange = () => {
    let priceMin = 0;
    let priceMax = 10000;
    let date = 0;
    let musicGenre = '';
    if (this.props.selectedPrice) {
      // transform '0$ - 500$' to ['0$', '500$'] or ['+5000$']
      // if there is no
      [priceMin, priceMax] = this.props.selectedPrice.split(' - ');
      if (priceMax !== undefined) {
        // the selected range of price is X$ - Y$
        priceMin = priceMin.slice(0, priceMin.length - 1);
        priceMax = priceMax.slice(0, priceMax.length - 1);
      } else {
        // the selected range of price is +Z$
        // priceMax will be undefined
        priceMin = priceMin.slice(1, priceMin.length - 1);
      }
    }
    if (this.props.selectedDate) date = this.props.selectedDate;
    if (this.props.selectedGenres) {
      musicGenre = this.props.selectedGenres.map((el) => this.props.genres[el].name);
    }

    const params = `priceMin=${priceMin}&priceMax=${priceMax}&date=${date}&musicGenre=${btoa(musicGenre)}&city='Barcelona'&distance=2000`;

    this.props.filterSearchProp(params);
  }

  renderDJs() {
    if (this.props.results.length) {
      // if there are search results
      return this.props.results
      .map((id) => this.props.djs[id])
      .map((element) => <DJCard dj={element} key={element.id} className={styles.djContainer} />);
    }
    // showing artists from entities
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
            onChange={this.handleFilterChange}
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
  filterSearchProp: func.isRequired,
  removeSelectedGenre: func.isRequired,
  djs: object.isRequired,
  genres: object.isRequired,
  selectedGenres: array.isRequired,
  selectedPrice: string.isRequired,
  selectedDate: number.isRequired,
  results: array.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
  genres: state.entities.genres,
  selectedGenres: state.pages.artistsPage.selectedGenres,
  selectedPrice: state.pages.artistsPage.selectedPrice,
  selectedDate: state.pages.artistsPage.selectedDate,
  results: state.pages.artistsPage.results,
});

const mapDispatchToProps = (dispatch) => ({
  defaultSearchProp: () => dispatch(defaultSearch()),
  filterSearchProp: (params) => dispatch(filterSearch(params)),
  removeSelectedGenre: (name) => dispatch(removeSelectedGenre(name)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
