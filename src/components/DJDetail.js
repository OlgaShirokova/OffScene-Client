import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { LocationOn } from 'material-ui-icons';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {
  Card,
  CardActions,
  CardHeader,
} from 'material-ui/Card';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { getDJ } from '../actions';
import styles from './DJDetail.css';
import { Facebook, Twitter, Youtube, Instagram, Soundcloud, Spotify } from '../icons/Icons';

const currentDJId = location.pathname.split('/')[2];
const mockDJ = {
  id: 124,
  name: 'Donkey Kong',
  picture: 'https://avatars1.githubusercontent.com/u/1481696?v=3&s=400',
  calendar: {
    monday: 0,
    tuesday: 0,
    wednesday: 1,
    thursday: 0,
    friday: 1,
    saturday: 1,
    sunday: 1,
  },
  awayDays: [
    '2017-06-30T00:00:00+00:00',
    '2017-07-05T00:00:00+00:00',
    '2017-07-13T00:00:00+00:00',
  ],
  priceWe: 1000000,
  priceWd: 500000,
  city: 'Barcelona',
  lat: 33.0684,
  long: 34.0567,
  avgRating: 400,
  musicGenres: [
    'rap',
    'techno',
  ],
};

class DJDetail extends Component {

  componentWillMount() {
    this.props.getDJ(currentDJId);
  }

  render() {
    console.log('mockdj ', mockDJ);
    return (
      <Router>
        <div className={styles.djDetailContainer}>
          <Card className={styles.card}>
            <CardHeader
              title={mockDJ.name}
              subtitle={`Rating: ${mockDJ.avgRating / 100}/5`}
              avatar={mockDJ.picture}
              titleStyle={{ fontWeight: '600' }}
              subtitleStyle={{ fontWeight: '100' }}
            />
            <Divider />
            <Subheader>
              <div className={styles.city}>
                <LocationOn />
                <Subheader>{mockDJ.city}</Subheader>
              </div>
            </Subheader>
            <Divider />
            <Subheader>
              Social Media
            </Subheader>
            <div className={styles.socialMedia}>
              <Facebook />
              <Twitter />
              <Youtube />
              <Instagram />
              <Spotify />
              <Soundcloud />
            </div>
            <Divider />
            <CardActions>
              {/* <Link to={`/artists/${'this.props.dj.id'}`} > */}
              <RaisedButton
                label="SEE CONTRACT"
                primary={!0}
                fullWidth={!0}
              />
              <Divider className={styles.divider} />
              {/* </Link> */}
              <RaisedButton
                label="BOOK NOW!"
                primary={!0}
                fullWidth={!0}
              />
            </CardActions>
          </Card>
          {/* </div>
          <div className={styles.paperContainer}>
          <Paper className={styles.paper}> */}
          <Paper className={styles.paper}>
            <div style={{ paddingLeft: '16', paddingBottom: '9' }}>
              <Subheader style={{ padding: 0, fontWeight: '100' }}>
                Pictures and Videos
              </Subheader>
              {'Put some images here'}
            </div>
            <Divider />
            <div style={{ paddingLeft: '16', paddingBottom: '9' }}>
              <Subheader style={{ padding: 0, fontWeight: '100' }}>
                Events
              </Subheader>
              {'Put some events here'}
            </div>
            <Divider />
          </Paper>
        </div>
      </Router>
    );
  }
}

DJDetail.propTypes = {
  getDJ: func.isRequired,
};

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch) => ({
  getDJ: (currentDJId) => dispatch(getDJ(currentDJId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DJDetail));
