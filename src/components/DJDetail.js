import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { object } from 'prop-types';
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
import styles from './DJDetail.css';
import { Facebook, Twitter, Youtube, Instagram, Soundcloud, Spotify } from '../icons/Icons';

class DJDetail extends Component {

  render() {
    if (this.props.djs[this.props.match.params.id] === undefined) {
      return (
        <div>
          <RaisedButton
            label="REFER TO ARTISTS PAGE"
            primary={!0}
            fullWidth={!0}
          />
        </div>
      );
    }
    return (
      <Router>
        <div className={styles.djDetailContainer}>
          <Card className={styles.card}>
            <CardHeader
              title={this.props.djs[this.props.match.params.id].name}
              subtitle={`Rating: ${this.props.djs[this.props.match.params.id].avgRating / 100}/5`}
              avatar={this.props.djs[this.props.match.params.id].picture}
              titleStyle={{ fontWeight: '600' }}
              subtitleStyle={{ fontWeight: '100' }}
            />
            <Divider />
            <Subheader>
              <div className={styles.city}>
                <LocationOn />
                <Subheader>{this.props.djs[this.props.match.params.id].city}</Subheader>
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
              <RaisedButton
                label="SEE CONTRACT"
                primary={!0}
                fullWidth={!0}
              />
              <Divider className={styles.divider} />
              <RaisedButton
                label="BOOK NOW!"
                primary={!0}
                fullWidth={!0}
              />
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
  match: object.isRequired,
  djs: object.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
});

export default withRouter(connect(mapStateToProps)(DJDetail));
