import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class DJCard extends Component {

  render() {
    return (
      <Card style={{ width: this.props.width }}>
        <CardHeader
          title="David Guetta"
          subtitle="5 star rating"
          avatar="https://i2.wp.com/orgullodeser.com/wp-content/uploads/2014/06/david-guetta-lovers-on-the-sun.jpg?fit=600%2C600"
          titleStyle={{ fontWeight: '600' }}
          subtitleStyle={{ fontWeight: '100' }}
        />
        <CardMedia>
          <img src="http://masricos.com/wp-content/uploads/2016/10/David-Guetta-2.jpg" alt="" />
        </CardMedia>
        <CardTitle
          title="David Guetta"
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
export default DJCard;
