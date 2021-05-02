import React from 'react'
import Nav from '../Nav/Nav'
import styles from '../../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <Nav/>
            <h1>About me</h1>
            <div className={styles.contentAbout}>
                <p>
                    My name is Matias am FullStack developer graduated of Henry 
                    learn to much since start the carrer and this i was to to loved,
                    the world of code is very long but I feel more togheter him in this moment,
                    my confort place is the frontend but the relationship with the backend 
                    is very good also, I like work in teams when a proyect is really 
                    complete with data base,backend and frontend using an agile method 
                    how SCRUM if need contactme or you need my help go to the contact tab
                    i will be very happy to help you!
                </p>  
            </div>
            
        </div>
    )
}

export default About;