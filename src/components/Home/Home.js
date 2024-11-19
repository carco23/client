import React from 'react';
import styles from './Home.module.css'
import LandingImage1 from '../../assets/landingImage1.svg'
import LandingImage2 from '../../assets/landingImage6.svg'
import TypingEffect from './TypingEffect';

function Home() {
  return (
    <div className={styles.home} id='home'>
      <div className={styles.left}>
        <img src={LandingImage1} />
        <TypingEffect text={'Performators: pathways to successful government reforms'} />
        <p>
          The goal of its establishment is to consult the Governments to Plan, Implement and monitor needed reforms.
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
