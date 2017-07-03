import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, array } from 'prop-types';
import Paper from 'material-ui/Paper';
import * as ActionCreators from 'actions'
import { ArtistCard, ArtistFilterForm } from 'components';
import styles from './styles.css';


@connect(data => ArtistListPage.getData, ActionCreators)
export default class ArtistListPage extends Component {
  static getData = (state) => ({
    djs: state.entities.djs,
    genres: state.entities.genres,
    selectedGenres: state.pages.artistsPage.selectedGenres,
  })

  componentDidMount() {
    this.props.defaultSearch();
  }

  _selectedGenresStrings = () => this.props.selectedGenres.map((key) => {
    return this.props.genres[key].name;
  })

  _removeSelectedGenre = (name) => {
    const genre = Object.keys(this.props.genres)
      .map((el) => this.props.genres[el])
      .filter((el) => el.name === name);

    this.props.removeSelectedGenre(genre[0].id);
  }

  _renderDJs() {
    return Object.keys(this.props.djs)
      .map((key) => this.props.djs[key])
      .map((element) => <ArtistCard dj={element} key={element.id} className={styles.djContainer} />);
  }

  render() {
    return (
      <div className={styles.artistsContainer}>
        <Paper className={styles.paperContainer} zDepth={1} rounded={!0} >
          <ArtistFilterForm
            genres={this.props.genres}
            selectedGenres={this._selectedGenresStrings()}
            onRemove={this._removeSelectedGenre}
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

