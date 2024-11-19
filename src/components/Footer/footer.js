import React from 'react';
import styles from './footer.module.css'
import Email from '../../assets/email.svg'
import Phone from '../../assets/phone.svg'
import Location from '../../assets/location.svg'

function Footer() {
  return (
    <div className={styles.footer} id='contact'>
        <h1>Contact</h1>
        <div className={styles.footerItems}>
            <div className={styles.item}>
                <img src={Email} />
                <a href={`mailto:info@performators.com`}>info@performators.com</a>
            </div>
            <div className={styles.item}>
                <img src={Phone} />
                <a href={`tel:995500101870`}>+995500101870</a>
            </div>
            <div className={styles.item}>
                <img src={Location} />
                <p>Tbilisi, Georgia</p>
            </div>
        </div>
        <div className={styles.rights}>
            <h2>Copyright © 2024 - All Rights Reserved</h2>
        </div>
    </div>
  );
}

export default Footer;
