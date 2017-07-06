import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, array } from 'prop-types';
import Paper from 'material-ui/Paper';
import * as ActionCreators from 'actions';
import { ArtistCard, ArtistFilterForm } from 'components';
import styles from './styles.css';

@connect(data => ArtistListPage.getData, ActionCreators)
export default class ArtistListPage extends Component {
  static getData = state => {
    return {
      djs: state.entities.djs,

      selectedGenres: state.pages.artistsPage.selectedGenres, // need
      selectedPrice: state.pages.artistsPage.selectedPrice, // need
      selectedDate: state.pages.artistsPage.selectedDate,
      results: state.pages.artistsPage.results,

      musicGenres: state.entities.musicGenres,
      values: state.form.filtersForm
        ? state.form.filtersForm.values
        : { date: new Date(), price: '0$ - 500$' },
    };
  };

  componentDidMount() {
    // this.props.defaultSearch();
    this.props.getArtists();
  }

  _selectedGenresStrings = () =>
    this.props.selectedGenres.map(key => {
      return this.props.musicGenres[key].name;
    });

  _removeSelectedGenre = name => {
    const genre = Object.keys(this.props.musicGenres)
      .map(el => this.props.musicGenres[el])
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
    /*
    // }
    // if (this.props.selectedDate) date = this.props.selectedDate;
    // if (this.props.selectedGenres) {
    //   musicGenre = this.props.selectedGenres.map(
    //     el => this.props.musicGenres[el].name
    //   );
    // }

    // const params = `priceMin=${priceMin}&priceMax=${priceMax}&date=${date}&musicGenre=${btoa(
    //   musicGenre
    // )}&city='Barcelona'&distance=2000`;
    */
    // const { musicGenres, values } = this.props

    // let priceMin;
    // let priceMax;

    // console.log('def', values)
    // // let date = values.date.getTime()

    // [priceMin, priceMax] = values.price.split(' - ');
    // if (priceMax !== undefined) {
    //   //   // the selected range of price is X$ - Y$
    //   priceMin = priceMin.slice(0, priceMin.length - 1);
    //   priceMax = priceMax.slice(0, priceMax.length - 1);
    // } else {
    //   //   // the selected range of price is +Z$
    //   //   // priceMax will be undefined
    //   priceMin = priceMin.slice(1, priceMin.length - 1);
    //   // }

    //   // console.log('aaa', priceMin, priceMax)
    //   // console.log('aaa', values)

    //   console.log('data to pass', priceMin, priceMax, date, musicGenres)

    // this.props.getArtists();
    // };
    // console.log(555);

    const musicGenres = this.props.selectedGenres;
    const date =
      this.props.values && this.props.values.date
        ? this.props.values.date.getTime()
        : Date.now();

    let priceMin = 0;
    let priceMax = 99999999;

    if (this.values && this.values.price) {
      [priceMin, priceMax] = this.props.values.price.split(' - ');
      if (priceMax !== undefined) {
        //   //   // the selected range of price is X$ - Y$
        priceMin = priceMin.slice(0, priceMin.length - 1);
        priceMax = priceMax.slice(0, priceMax.length - 1);
      } else {
        //   //   // the selected range of price is +Z$
        //   //   // priceMax will be undefined
        priceMin = priceMin.slice(1, priceMin.length - 1);
      }
    }
    console.log(date, musicGenres, priceMax, priceMin);

    this.props.getArtists({ date, musicGenres, priceMin, priceMax });
  };

  render() {
    return (
      <div className={styles.artistsContainer}>
        <div>
          <Paper className={styles.paperContainer} zDepth={1} rounded={!0}>
            <ArtistFilterForm
              genres={this.props.musicGenres}
              selectedGenres={this._selectedGenresStrings()}
              onRemove={this._removeSelectedGenre}
              onChange={this._handleFilterChange}
            />
          </Paper>
        </div>
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
