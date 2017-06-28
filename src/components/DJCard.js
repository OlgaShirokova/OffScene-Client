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
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { shape } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  cardContainer: {
    width: 250,
  },
};

class DJCard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div style={styles.cardContainer}>
          <Card>
            <CardHeader
              title={this.props.dj.name}
              subtitle={`Rating ${this.props.dj.avgRating}`}
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
              <Link to={`/artists/${this.props.dj.id}`} ><FlatButton label="CHECK PROFILE" /></Link>
              <FlatButton label="BOOK NOW!" />
            </CardActions>
          </Card>
        </div>
      </Router>
    );
  }
}

DJCard.propTypes = {
  dj: shape({}).isRequired,
};

export default DJCard;
