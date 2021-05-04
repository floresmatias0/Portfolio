import React from 'react'
import styles from '../../styles/Certificates.module.css'
import Nav from '../Nav/Nav'
import henry from '../../assets/img/henry-certificate.png'
import efset from '../../assets/img/efset-certificate.png'
import utn from '../../assets/img/utn-certicate.png'
import {withTranslation} from 'react-i18next'

const Certificates = ({t}) => {
    
    const goCertificateEfset = () => {
        window.open('https://www.efset.org/cert/vCMdaz')
    }

    const goCertificateUtn = () => {
        window.open('https://res.cloudinary.com/djnhaprmj/image/upload/v1619947730/utn-certicate_hdzya1.png')
    }

    const goCertificateHenry = () => {
        window.open('https://certificates.soyhenry.com/cert?id=797fa144-b34c-4383-b58c-05b1a4db28ea')
    }

    return (
        <div className={styles.container}>
            <Nav/>
            <div className={styles.div}>
                <div className={styles.contentCertificates}>
                    <img src={henry} alt='henry-certificate' />
                    <button onClick={goCertificateHenry}>{t('buttonCertificate')}</button>
                </div>
                <div className={styles.contentCertificates}>
                    <img src={utn} alt='utn-certificate' />
                    <button onClick={goCertificateUtn}>{t('buttonCertificate')}</button>
                </div>
                <div className={styles.contentCertificates}>
                    <img src={efset} alt='efset-certificate' />
                    <button onClick={goCertificateEfset}>{t('buttonCertificate')}</button>
                </div> 
            </div>

        </div>
    )
}

export default withTranslation()(Certificates);