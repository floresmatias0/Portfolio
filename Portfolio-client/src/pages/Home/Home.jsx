import React from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Home.module.css';
import Nav from '../../components/Nav/Nav'
import i18n from '../../i18n';
import {withTranslation} from 'react-i18next'
import Swal from 'sweetalert2'

const Home = ({t,STORE_VISIT}) => {
    
  const changeLanguage = (Ing) =>{
    i18n.changeLanguage(Ing)
    Swal.fire({
      text: t('buttonText')
    })
  }

  var name = localStorage.getItem('name')

  return (
      <div className={styles.container}>
        <Nav/>
        <div className={styles.contentHome}>
          <h1>{t('title')} {name}</h1>
          <h2>{t('titleTwo')}</h2>
          <h3>{t('subtitle')}</h3>
          <div className={styles.contentButton}>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>  
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    STORE_VISIT: state
  }
}

export default connect(mapStateToProps)(withTranslation()(Home));