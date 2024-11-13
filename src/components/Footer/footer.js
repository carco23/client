import React from 'react';
import styles from './footer.module.css'
import Email from '../../assets/email.svg'
import Phone from '../../assets/phone.svg'
import Location from '../../assets/location.svg'

function Footer() {
  return (
    <div className={styles.footer}>
        <h1>Contact</h1>
        <div className={styles.footerItems}>
            <div className={styles.item}>
                <img src={Email} />
                <p style={{textDecoration: 'underline'}}>info@performators.com</p>
            </div>
            <div className={styles.item}>
                <img src={Phone} />
                <p>+995500101870</p>
            </div>
            <div className={styles.item}>
                <img src={Location} />
                <p>Tbilisi, Georgia</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
