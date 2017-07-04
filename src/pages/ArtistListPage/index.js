import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, array } from 'prop-types';
import Paper from 'material-ui/Paper';
import * as ActionCreators from 'actions';
import { ArtistCard, ArtistFilterForm } from 'components';
import styles from './styles.css';

@connect(data => ArtistListPage.getData, ActionCreators)
export default class ArtistListPage extends Component {
  static getData = state => ({
    djs: state.entities.djs,
    genres: state.entities.genres,
    selectedGenres: state.pages.artistsPage.selectedGenres,
    selectedPrice: state.pages.artistsPage.selectedPrice,
    selectedDate: state.pages.artistsPage.selectedDate,
    results: state.pages.artistsPage.results,
  });

  componentDidMount() {
    // this.props.defaultSearch();
    this.props.getArtists();
  }

  _selectedGenresStrings = () =>
    this.props.selectedGenres.map(key => {
      return this.props.genres[key].name;
    });

  _removeSelectedGenre = name => {
    const genre = Object.keys(this.props.genres)
      .map(el => this.props.genres[el])
      .filter(el => el.name === name);

    this.props.removeSelectedGenre(genre[0].id);
  };

  _renderDJs() {
    if (this.props.results.length) {
      // if there are search results
      return this.props.results
        .map(id => this.props.djs[id])
        .map(element =>
          <ArtistCard
            dj={element}
            key={element.id}
            className={styles.djContainer}
          />
        );
    }
    // showing artists from entities
    return Object.keys(this.props.djs)
      .map(key => this.props.djs[key])
      .map(element =>
        <ArtistCard
          dj={element}
          key={element.id}
          className={styles.djContainer}
        />
      );
  }

  _handleFilterChange = () => {
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
      musicGenre = this.props.selectedGenres.map(
        el => this.props.genres[el].name
      );
    }

    const params = `priceMin=${priceMin}&priceMax=${priceMax}&date=${date}&musicGenre=${btoa(
      musicGenre
    )}&city='Barcelona'&distance=2000`;

    this.props.filterSearchProp(params);
  };

  render() {
    return (
      <div className={styles.artistsContainer}>
        <Paper className={styles.paperContainer} zDepth={1} rounded={!0}>
          <ArtistFilterForm
            genres={this.props.genres}
            selectedGenres={this._selectedGenresStrings()}
            onRemove={this._removeSelectedGenre}
            onChange={this._handleFilterChange}
          />
        </Paper>
        <div className={styles.djListContainer}>
          {this._renderDJs()}
        </div>
      </div>
    );
  }
}

ArtistListPage.propTypes = {
  defaultSearch: func.isRequired,
  removeSelectedGenre: func.isRequired,
  djs: object.isRequired,
  genres: object.isRequired,
  selectedGenres: array.isRequired,
};
