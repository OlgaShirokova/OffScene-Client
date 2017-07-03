import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import imageTable from 'assets/table.jpeg'
import styles from './styles.css';

const tilesData = [
  {
    img: 'http://img.jakpost.net/c/2017/03/20/2017_03_20_23771_1489997603._large.jpg',
    title: 'Bob Niga',
    author: 'jill111',
  },
  {
    img: 'http://hipkingdom.com/cache/300x200/images/scoop/78/16/87/e2/fd38-ce04-2989-9bdf1413b53a.jpg',
    title: 'Olga Olenka',
    author: 'jill111',
  },
  {
    img: 'http://2stk05c3kp8xiap4f9fxntqk.wpengine.netdna-cdn.com/wp-content/uploads/2017/02/dj-jazzy-jeff-boiler-room-philly-video-715x400.jpg',
    title: 'Jackson Noob',
    author: 'jill111',
  },
  {
    img: 'https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/08/dj1bigstock-Club-disco-DJ-playing-and-mix-87654182.jpg',
    title: 'Angular',
    author: 'jill111',
  },
  {
    img: 'http://www.digitaldjtips.com/wp-content/uploads/2016/04/Denon-DJ-MCX8000-Mixer.jpg',
    title: 'React',
    author: 'jill111',
  },
  {
    img: 'https://www.musiluz.com/wp-content/uploads/2014/05/slide1-master.jpg',
    title: 'Meteor',
    author: 'jill111',
  },
  {
    img: 'http://worldwest.media.clients.ellingtoncms.com/img/photos/2013/01/25/012613_MARTYPARTY_t640.jpg?a6ea3ebd4438a44b86d2e9c39ecf7613005fe067',
    title: 'Facebook',
    author: 'jill111',
  },

];

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

class HomePage extends Component {
  render() {
    return (
      <div>
        <img src={imageTable} style={{ maxWidth: '100%' }} alt='' />
        <div className={options.root}>
          <h4 className={styles.subtitle}>NEAREST DJS AROUND YOU</h4>
          <GridList style={options.gridList} padding={0} cols={2.2}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                titleStyle={options.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} alt='' />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default HomePage;
