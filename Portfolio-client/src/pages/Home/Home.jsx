import React, {useEffect}from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Home.module.css';
import Nav from '../../components/Nav/Nav'
import i18n from '../../i18n';
import {withTranslation} from 'react-i18next'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

const Home = ({t,STORE_VISIT}) => {

  const history = useHistory()
  
  useEffect(()=>{
    var storage = localStorage.getItem('name')
    if(!storage){
      return history.push('/')
    } 
  },[history])
  

  const changeLanguage = (Ing) =>{
    i18n.changeLanguage(Ing)
    Swal.fire({
        buttonsStyling: false,
        customClass: {
            popup: styles.customPopup,
            confirmButton: styles.customButton,
            content: styles.customTitle
          },
        text: t('buttonText'),
        confirmButtonText: 'Cool',
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