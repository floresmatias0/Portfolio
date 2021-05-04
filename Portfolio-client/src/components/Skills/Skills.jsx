import React, {useEffect} from 'react'
import Nav from '../Nav/Nav'
import styles from '../../styles/Skills.module.css'
import css from '../../assets/img/css.png'
import express from '../../assets/img/express.png'
import html from '../../assets/img/html.png'
import javascript from '../../assets/img/javascript.png'
import nodejs from '../../assets/img/nodejs.png'
import postgresql from '../../assets/img/postgresql.png'
import react from '../../assets/img/react.png'
import sequelize from '../../assets/img/sequelize.png'
import {withTranslation} from 'react-i18next'
import {useHistory} from 'react-router'

const Skills = ({t}) => {

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
            <h1>{t('skillTitle')}</h1>
            <div className={styles.skills}>
                <ul>
                    <img src={react} alt='react'/>
                    <img src={express} alt='express'/> 
                    <img src={nodejs} alt='nodejs'/>
                    <img src={sequelize} alt='sequelize'/>  
                </ul>
                <ul><img src={javascript} alt='javascript'/>
                    <img src={css} alt='css'/>
                    <img src={html} alt='html'/>
                    <img src={postgresql} alt='postgresql'/>
                      
                </ul>
            </div>
        </div>
    )
}

export default withTranslation()(Skills);