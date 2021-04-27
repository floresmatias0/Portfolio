import React from 'react'
import Code from '../../components/code/Code'
import styles from '../../styles/Welcome.module.css'
import '../../styles/Animations/animations.css'

const Welcome = () => {
  return (
    <div className={styles.container}>
        <h1 className='slideDown'>WELCOME TO MY PORTFOLIO</h1>
        <Code/>
    </div>
  );
}

export default Welcome;
