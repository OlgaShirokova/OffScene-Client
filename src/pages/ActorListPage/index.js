import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, array } from 'prop-types';
import Paper from 'material-ui/Paper';
import * as ActionCreators from 'actions';
import { ActorCard, ActorFilterForm } from 'components';
import styles from './styles.css';

@connect(data => ActorListPage.getData, ActionCreators)
export default class ActorListPage extends Component {
  static getData = state => {
    return {
      actors: state.entities.actors,

      selectedGenres: state.pages.artistsPage.selectedGenres, // need
      selectedPrice: state.pages.artistsPage.selectedPrice, // need
      selectedDate: state.pages.artistsPage.selectedDate,
      results: state.pages.artistsPage.results,

      movieGenres: state.entities.movieGenres,
      values: state.form.filtersForm
        ? state.form.filtersForm.values
        : { date: new Date(), price: '0$ - 500$' },
    };
  };

  componentDidMount() {
    // this.props.defaultSearch();
    this.props.getActors();
  }

  _selectedGenresStrings = () =>
    this.props.selectedGenres.map(key => {
      return this.props.movieGenres[key].name;
    });

  _removeSelectedGenre = name => {
    const genre = Object.keys(this.props.movieGenres)
      .map(el => this.props.movieGenres[el])
      .filter(el => el.name === name);

    this.props.removeSelectedGenre(genre[0].id);
  };

  _renderactors() {
    if (this.props.results.length) {
      // if there are search results
      return this.props.results
        .map(id => this.props.actors[id])
        .map(element =>
          <ActorCard
            actor={element}
            key={element.id}
            className={styles.actorContainer}
          />
        );
    }
    // showing artists from entities
    return Object.keys(this.props.actors)
      .map(key => this.props.actors[key])
      .map(element =>
        <ActorCard
          actor={element}
          key={element.id}
          className={styles.actorContainer}
        />
      );
  }

  _handleFilterChange = () => {
    /*
    // }
    // if (this.props.selectedDate) date = this.props.selectedDate;
    // if (this.props.selectedGenres) {
    //   movieGenre = this.props.selectedGenres.map(
    //     el => this.props.movieGenres[el].name
    //   );
    // }

    // const params = `priceMin=${priceMin}&priceMax=${priceMax}&date=${date}&movieGenre=${btoa(
    //   movieGenre
    // )}&city='Barcelona'&distance=2000`;
    */
    // const { movieGenres, values } = this.props

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

    //   console.log('data to pass', priceMin, priceMax, date, movieGenres)

    // this.props.getActors();
    // };
    // console.log(555);

    const movieGenres = this.props.selectedGenres;
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
    console.log(date, movieGenres, priceMax, priceMin);

    this.props.getActors({ date, movieGenres, priceMin, priceMax });
  };

  render() {
    return (
      <div className={styles.artistsContainer}>
        <div>
          <Paper className={styles.paperContainer} zDepth={1} rounded={!0}>
            <ActorFilterForm
              genres={this.props.movieGenres}
              selectedGenres={this._selectedGenresStrings()}
              onRemove={this._removeSelectedGenre}
              onChange={this._handleFilterChange}
            />
          </Paper>
        </div>
        <div className={styles.actorListContainer}>
          {this._renderactors()}
        </div>
      </div>
    );
  }
}

ActorListPage.propTypes = {
  defaultSearch: func.isRequired,
  removeSelectedGenre: func.isRequired,
  actors: object.isRequired,
  genres: object.isRequired,
  selectedGenres: array.isRequired,
};
