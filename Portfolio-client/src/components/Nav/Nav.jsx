import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../styles/Navbar.module.css'

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link exact to='/home/aboutme'><h2>About me</h2></Link>
        <Link exact to='/home/projects'><h2>Projects</h2></Link>
        <Link exact to='/home/skills'><h2>Skills</h2></Link> 
      </div>

    </div>
  );
}

export default Nav;