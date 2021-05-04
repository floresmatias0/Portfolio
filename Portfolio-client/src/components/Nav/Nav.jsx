import React from 'react'
import {Link} from 'react-router-dom'
import {withTranslation} from 'react-i18next'
import styles from '../../styles/Navbar.module.css'

const Nav = ({t}) => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link to='/home'><h2>{t('inicio')}</h2></Link>
        <Link to='/home/aboutme'><h2>{t('aboutTitle')}</h2></Link>
        <Link to='/home/projects'><h2>{t('projects')}</h2></Link>
        <Link to='/home/skills'><h2>{t('skills')}</h2></Link>
        <Link to='/home/certificates'><h2>{t('certificates')}</h2></Link>
        <Link to='/home/contact'><h2>{t('contact')}</h2></Link>
      </div>

    </div>
  );
}

export default withTranslation()(Nav);