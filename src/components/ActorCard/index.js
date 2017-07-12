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

export default class ActorCard extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <CardHeader
            title={this.props.actor.name}
            subtitle={`Rating: ${this.props.actor.avgRating}/5`}
            avatar={this.props.actor.picture}
            titleStyle={{ fontWeight: '600' }}
            subtitleStyle={{ fontWeight: '100' }}
          />
          <CardMedia>
            <img src={this.props.actor.picture} alt="" />
          </CardMedia>

          <CardActions>
            <Link to={`/actors/${this.props.actor.id}`}>
              <FlatButton label="CHECK PROFILE" />
            </Link>
            <Link to={`/book/${this.props.actor.id}`}>
              <FlatButton label="BOOK NOW!" />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ActorCard.propTypes = {
  actor: shape({}).isRequired,
};
