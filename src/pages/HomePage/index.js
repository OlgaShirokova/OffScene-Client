import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import imageTable from 'assets/table.jpeg';
import imageActor from 'assets/soloActor.jpeg';
import img1 from 'assets/carrousel/1.jpg';
import img2 from 'assets/carrousel/2.jpg';
import img3 from 'assets/carrousel/3.jpg';
import img4 from 'assets/carrousel/4.jpg';
import img5 from 'assets/carrousel/5.jpg';
import img6 from 'assets/carrousel/6.jpg';
import img7 from 'assets/carrousel/7.jpg';

import styles from './styles.css';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import * as ActionCreators from 'actions';

import Carousel from 'nuka-carousel';

@connect(data => HomePage.getData, ActionCreators)
export default class HomePage extends Component {
  static getData = state => ({
    actors: state.entities.actors,
  });

  componentDidMount() {
    this.props.getActors();
  }

  render() {
    return (
      <div>
        <div className={styles.containerSlider}>
          <Carousel autoplay wrapAround={true} width={'80%'}>
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img1} alt="" />
          </Carousel>
        </div>
        <div className={options.root}>
          <h4 className={styles.subtitle}>NEAREST ACTORS AROUND YOU</h4>
          <GridList style={options.gridList} padding={0} cols={2.2}>
            {Object.values(this.props.actors).map(actor =>
              <GridTile
                key={actor.id}
                title={actor.name}
                titleStyle={options.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={actor.picture} alt="" />
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
