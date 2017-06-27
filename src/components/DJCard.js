import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { func } from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class DJCard extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.dj.name}
          subtitle={`Rating: ${this.props.dj.avgRating}`}
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
          <FlatButton label="CHECK PROFILE" />
          <FlatButton label="BOOK NOW!" />
        </CardActions>
      </Card>
    );
  }
}

DJCard.propTypes = {
  dj: func.isRequired,
};

export default DJCard;
