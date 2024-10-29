import React from 'react';
import styles from './About.module.css'
import Zurab from '../../assets/zurab.svg'
import Ilia from '../../assets/ilia.svg'

const text = ''

function About() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.text}>
        <h1>About Us</h1>
        <p>Your approach towards health for peace is inspirational – with valuable lessons for health for peace programming elsewhere in the Region. 
        <br/>
        <br/>
        The progress Georgia has achieved in implementing the DRG funding model, in regulating medicines prices and in improving access to oncology medicines illustrates the power of policies aimed at UHC.
        <br/>
        <br/>
        These are effective policies that are having immediate, tangible impact on financial protection for Georgian population and this generates optimism for us in WHO as we seek to support other Member States in these areas.</p>
        </div>
        <div className={styles.personCards}>
          <div className={styles.personCard}>
            <img src={Zurab} />
            <div className={styles.name}>
              <h1>Zurab Azarashvili</h1>
              <p>Managing Partner</p>
            </div>
            <p className={styles.bio}>Zurab Azarashvili is a Georgian public figure who served as Minister of the Ministry of the Internally Displaced Persons from the Occupied Territories, Labor, Health, and Social Affairs of Georgia and as the Deputy Minister of the Ministry of Defense of Georgia - 2021-2024 He has 20+ years of banking experience in various leading banks in Georgia at Top Management positions.</p>
          </div>
          <div className={styles.personCard}>
            <img src={Ilia} />
            <div className={styles.name}>
              <h1>Ilia Gudushauri</h1>
              <p>Partner- Advisory Services</p>
            </div>
            <p className={styles.bio}>Ilia Gudushauri is a consulting advisory professional who served as Deputy Minister of the Ministry of the Internally Displaced Persons from the Occupied Territories, Labor, Health, and Social Affairs of Georgia 2022-2024 He has 10+ years of financial experience in Deloitte in Georgia at Top Management position.</p>
          </div>
        </div>
        <button>Learn More</button>
    </div>
  );
}

export default About;
