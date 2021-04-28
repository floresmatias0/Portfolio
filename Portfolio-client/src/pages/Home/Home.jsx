import React from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Home.module.css';

const Home = ({STORE_VISIT}) => {
  return (
    <div className={styles.container}>
        <h1> Hi thanks for you visit </h1>
        <div className={styles.about}>
          <h2>About Me</h2>
          <p>Lorem ipsum dalai lama Lorem ipsum dalai lama Lorem ipsum dalai lama</p>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    STORE_VISIT: state
  }
}

export default connect(mapStateToProps)(Home);