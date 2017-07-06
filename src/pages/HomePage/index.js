import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import imageTable from 'assets/table.jpeg';
import imageDj from 'assets/solodj.jpeg';
import styles from './styles.css';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import * as ActionCreators from 'actions';

import Carousel from 'nuka-carousel';

@connect(data => HomePage.getData, ActionCreators)
export default class HomePage extends Component {
  static getData = state => ({
    djs: state.entities.djs,
  });

  componentDidMount() {
    this.props.getArtists();
  }
  // mixins: [Carousel.ControllerMixin];

  render() {
    console.log(this.props);
    return (
      <div>
        <div className={styles.containerSlider}>
          <Carousel autoplay wrapAround={true} width={'80%'}>
            <img className={styles.imgHome} src={imageTable} alt="" />
            <img className={styles.imgHome} src={imageDj} alt="" />
          </Carousel>
        </div>
        <div className={options.root}>
          <h4 className={styles.subtitle}>NEAREST DJS AROUND YOU</h4>
          <GridList style={options.gridList} padding={0} cols={2.2}>
            {Object.values(this.props.djs).map(dj =>
              <GridTile
                key={dj.id}
                title={dj.name}
                actionIcon={
                  <IconButton>
                    <StarBorder color="rgb(0, 188, 212)" />
                  </IconButton>
                }
                titleStyle={options.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={dj.picture} alt="" />
              </GridTile>
            )}
          </GridList>
        </div>
      </div>
    );
  }
}

const options = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};
