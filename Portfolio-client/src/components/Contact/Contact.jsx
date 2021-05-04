import React from 'react'
import Nav from '../Nav/Nav'
import github from '../../assets/img/github.png'
import twitter from '../../assets/img/gorjeo.png'
import whatsapp from '../../assets/img/whatsapp.png'
import linkedin from '../../assets/img/linkedin.png'
import styles from '../../styles/Contact.module.css'
import emailjs from 'emailjs-com';
import {withTranslation} from 'react-i18next'

const Contact = ({t}) => {
    const goPage = () => window.open('https://github.com/floresmatias0')  
    const goPageTwo = () => window.open('https://www.linkedin.com/in/matias-flores-2860ba124/')
    const goPageThree = () => window.open('https://wa.me/541169047409')  
    const goPageFour = () => window.open('https://twitter.com/Matiasleandro_')
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hk87b54', 'template_tclqxon', e.target, 'user_9MGJiCZfpKKFo3efcWxeX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    
    return (
        <div className={styles.container}>
            <Nav/>
            <h1>Contact</h1>
            <div className={styles.contentForm}>
                <div>
                    <form className={styles.form} onSubmit={sendEmail}>

                        <label className={styles.label}>{t('nameForm')}</label>
                        <input className={styles.input} autoComplete="off" type="text" placeholder={t('nameForm')} name="name"/>

                        <label className={styles.label}>{t('emailForm')}</label>
                        <input className={styles.input} autoComplete="off" type="email" placeholder={t('emailForm')} name="email"/>

                        <label className={styles.label}>{t('subjectForm')}</label>
                        <input className={styles.input} autoComplete="off" type="text" placeholder={t('subjectForm')} name="subject"/>

                        <label className={styles.label}>{t('messageForm')}</label>
                        <textarea className={styles.textarea} name="message"/>
                        
                        <input className={styles.submit} type="submit" value="Send"/>
                    </form>
                </div>
                <div className={styles.contentImg}>
                    <img onClick={goPage} src={github} alt='github'/>
                    <img onClick={goPageTwo} src={linkedin} alt='linkedin'/>
                    <img onClick={goPageFour} src={twitter} alt='twitter'/>
                    <img onClick={goPageThree} src={whatsapp} alt='whatsapp'/>
                </div>  
            </div>
            
        </div>
    )
}

export default withTranslation()(Contact);