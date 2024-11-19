import React from 'react';
import styles from './Home.module.css'
import LandingImage1 from '../../assets/landingImage1.svg'
import LandingImage2 from '../../assets/landingImage6.svg'
import TypingEffect from './TypingEffect';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <img src={LandingImage1} />
        <TypingEffect text={'Performators: Creating Successful Legacy'} />
        <p>
          Since its establishment in 2024, Performators has consulted 30+ countries on three different continents globally
        </p>
      </div>
      <div className={styles.right}>
        <img src={LandingImage2} />
        <button>See more </button>
      </div>
    </div>
  );
}

export default Home;
