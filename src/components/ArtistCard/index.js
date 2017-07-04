import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';
import styles from './styles.css';

export default class ArtistCard extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <CardHeader
            title={this.props.dj.name}
            subtitle={`Rating: ${this.props.dj.avgRating / 100}/5`}
            avatar={this.props.dj.picture}
            titleStyle={{ fontWeight: '600' }}
            subtitleStyle={{ fontWeight: '100' }}
          />
          <CardMedia>
            <img src={this.props.dj.picture} alt="" />
          </CardMedia>
          <CardTitle
            title={this.props.dj.name}
            subtitle="Available on the 1st of July"
            subtitleStyle={{ fontWeight: '100' }}
          />
          <CardText>
            Short description of the DJ. Short description of the DJ. Short
            description of the DJ. Short description of the DJ.
          </CardText>
          <CardActions>
            <Link to={`/artists/${this.props.dj.id}`}>
              <FlatButton label="CHECK PROFILE" />
            </Link>
            <Link to={`/book/${this.props.dj.id}`}>
              <FlatButton label="BOOK NOW!" />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ArtistCard.propTypes = {
  dj: shape({}).isRequired,
};
