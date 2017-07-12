import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { LocationOn } from 'material-ui-icons';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import styles from './styles.css';
import { SocialIcons } from 'components';
import * as ActionCreators from 'actions';

const {
  FacebookIcn,
  TwitterIcn,
  YoutubeIcn,
  InstagramIcn,
  SoundcloudIcn,
  SpotifyIcn,
} = SocialIcons;

@connect(data => ActorProfilePage.getData, ActionCreators)
export default class ActorProfilePage extends Component {
  static getData = state => ({
    actors: state.entities.actors,
  });

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getActors();
  }

  render() {
    if (this.props.actors[this.props.match.params.id] === undefined) {
      return (
        <div>
          <Link to={'/artists/'}>
            <RaisedButton label="REFER TO ARTISTS PAGE" primary fullWidth />
          </Link>
        </div>
      );
    }
    return (
      <div className={styles.actorDetailContainer}>
        <Card className={styles.card}>
          <CardHeader
            title={this.props.actors[this.props.match.params.id].name}
            subtitle={`Rating: ${this.props.actors[this.props.match.params.id]
              .avgRating}/5`}
            avatar={this.props.actors[this.props.match.params.id].picture}
            titleStyle={{ fontWeight: '600' }}
            subtitleStyle={{ fontWeight: '100' }}
          />
          <Divider />
          <Subheader>
            <div className={styles.city}>
              <LocationOn />
              <Subheader>
                {this.props.actors[this.props.match.params.id].city}
              </Subheader>
            </div>
          </Subheader>
          <Divider />
          <Subheader>Social Media</Subheader>
          <div className={styles.socialMedia}>
            <FacebookIcn />
            <TwitterIcn />
            <YoutubeIcn />
            <InstagramIcn />
            <SpotifyIcn />
            <SoundcloudIcn />
          </div>
          <Divider />
          <CardActions>
            <RaisedButton label="SEE CONTRACT" primary fullWidth />
            <Divider className={styles.divider} />
            <Link
              to={`/book/${this.props.match.params.id}`}
              className={styles.link}
            >
              <RaisedButton label="BOOK NOW!" primary fullWidth />
            </Link>
          </CardActions>
        </Card>
        <Paper className={styles.paper}>
          <div style={{ paddingLeft: 16, paddingBottom: 9 }}>
            <Subheader style={{ padding: 0, fontWeight: '100' }}>
              Pictures and Videos
            </Subheader>
            {'Put some images here'}
          </div>
          <Divider />
          <div style={{ paddingLeft: 16, paddingBottom: 9 }}>
            <Subheader style={{ padding: 0, fontWeight: '100' }}>
              performances
            </Subheader>
            {'Put some performances here'}
          </div>
          <Divider />
          <div style={{ paddingLeft: 16, paddingBottom: 9 }}>
            <Subheader style={{ padding: 0, fontWeight: '100' }}>
              Price Monday-Friday
            </Subheader>
            {'$ '}
            {this.props.actors[this.props.match.params.id].priceWe}
            <Subheader style={{ padding: 0, fontWeight: '100' }}>
              Price Saturday & Sunday
            </Subheader>
            {'$ '}
            {this.props.actors[this.props.match.params.id].priceWd}
          </div>
        </Paper>
      </div>
    );
  }
}

ActorProfilePage.propTypes = {
  match: object.isRequired,
  actors: object,
};
