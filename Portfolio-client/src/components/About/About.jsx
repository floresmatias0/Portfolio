import React, {useEffect} from 'react'
import Nav from '../Nav/Nav'
import { withTranslation } from 'react-i18next';
import styles from '../../styles/About.module.css'
import {useHistory} from 'react-router'

const About = ({t}) => {

    const history = useHistory()
    
    useEffect(()=>{
      var storage = localStorage.getItem('name')
      if(!storage){
        return history.push('/')
      } 
    },[history])

    return (
        <div className={styles.container}>
            <Nav/>
            <h1>{t('aboutTitle')}</h1>
            <div className={styles.contentAbout}>
                <p>{t('aboutme')}</p>  
            </div>
            
        </div>
    )
}

export default withTranslation()(About);