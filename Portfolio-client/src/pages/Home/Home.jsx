import React from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Home.module.css';
import Nav from '../../components/Nav/Nav'

const Home = ({STORE_VISIT}) => {


  return (
      <div className={styles.container}>
        <Nav/>
        <h1> Hi thanks for you visit </h1>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    STORE_VISIT: state
  }
}

export default connect(mapStateToProps)(Home);