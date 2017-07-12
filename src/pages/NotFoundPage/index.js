import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import notFound from 'assets/notFound.jpg';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.notFoundImg} src={notFound} />
        <h1>404 NOT FOUND</h1>
        <h4>
          The page you are looking for doesnt exist or an other error occured.
        </h4>
        <h4>
          Head over to <Link to="/">OffScene</Link> to choose a new direction.
        </h4>
      </div>
    );
  }
}
