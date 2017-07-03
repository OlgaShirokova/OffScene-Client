import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object, array, number } from 'prop-types';
import Paper from 'material-ui/Paper';
import { defaultSearch, removeSelectedGenre, filterSearch } from '../actions';
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
    console.log('---remove---', name);
    const genre = Object.keys(this.props.genres)
    .map((el) => this.props.genres[el])
    .filter((el) => el.name === name);

    console.log('---genre---', genre[0]);

    this.props.removeSelectedGenre(genre[0].id);
  }

  handleFilterChange = (filter) => {
    const priceMin = this.props.selectedPrice;
    const priceMax = this.props.selectedPrice;
    const date = this.props.selectedDate;
    const musicGenre = this.props.selectedGenres;
    const paramsAux = 'priceMin=3000&priceMax=8000&date=1498842156987&musicGenre=cmFwLGRhbmNl&city=Madrid&distance=2000';
    const params = `priceMin=${priceMin}&priceMax=${priceMax}&date=${date}&musicGenre=${musicGenre}&city='Barcelona'&distance=2000`;
    // priceMin=3000 &
    // priceMax=8000 &
    // date=1498842156987 &
    // musicGenre=cmFwLGRhbmNl &
    // city=Madrid &
    // maxDistiance=2000
    console.log('URL Params: ', params);
    console.log('filter changed ', filter);
    console.log('selectedGenres: ', this.props.selectedGenres);
    console.log('selectedPrice: ', this.props.selectedPrice);
    console.log('selectedDate: ', this.props.selectedDate);
    this.props.filterSearchProp(paramsAux);
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
            selectedDate
            selectedPrice
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
  selectedPrice: number.isRequired,
  selectedDate: number.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
  genres: state.entities.genres,
  selectedGenres: state.pages.artistsPage.selectedGenres,
  selectedPrice: state.pages.artistsPage.selectedPrice,
  selectedDate: state.pages.artistsPage.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
  defaultSearchProp: () => dispatch(defaultSearch()),
  filterSearchProp: (params) => dispatch(filterSearch(params)),
  removeSelectedGenre: (name) => dispatch(removeSelectedGenre(name)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
