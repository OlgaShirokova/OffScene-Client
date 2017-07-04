import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import {
  // BrowserRouter as Router,
  Link,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import styles from './DJCard.css';

class DJCard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.cardContainer}>
        <Card>
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
            Short description of the DJ. Short description of the DJ.
            Short description of the DJ. Short description of the DJ.
          </CardText>
          <CardActions>
            <Link to={`/artists/${this.props.dj.id}`} >
              <FlatButton label="CHECK PROFILE" />
            </Link>
            <Link to={`/booknow/${this.props.dj.id}`}>
              <FlatButton label="BOOK NOW!" />
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

DJCard.propTypes = {
  dj: shape({}).isRequired,
};

export default withRouter(connect()(DJCard));
