import React from 'react';
import styles from './About.module.css'
import Zurab from '../../assets/zurab.svg'
import Ilia from '../../assets/ilia.svg'
import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './slide.css'

function About() {

  const slides = [
    [
    {
      name: 'Zurab Azarashvili',
      position: 'Managing Partner',
      bio: 'Zurab Azarashvili is a Georgian public figure who served as Minister of the Ministry of the Internally Displaced Persons from the Occupied Territories, Labor, Health, and Social Affairs of Georgia and as the Deputy Minister of the Ministry of Defense of Georgia - 2021-2024 He has 20+ years of banking experience in various leading banks in Georgia at Top Management positions.',
      img: Zurab
    },
    {
      name: 'Ilia Gudushauri',
      position: 'Partner- Advisory Services',
      bio: 'Ilia Gudushauri is a consulting advisory professional who served as Deputy Minister of the Ministry of the Internally Displaced Persons from the Occupied Territories, Labor, Health, and Social Affairs of Georgia 2022-2024 He has 10+ years of financial experience in Deloitte in Georgia at Top Management position.',
      img: Ilia
    }
  ]
  ]

  const carouselRef = React.useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => carouselRef.current.next();
  const prevSlide = () => carouselRef.current.prev();

  return (
    <div className={styles.aboutUs} id='aboutUs'>
      <div className={styles.text}>
        <h1>Who We Are</h1>
        <p>Your approach towards health for peace is inspirational – with valuable lessons for health for peace programming elsewhere in the Region. 
        <br/>
        <br/>
        The progress Georgia has achieved in implementing the DRG funding model, in regulating medicines prices and in improving access to oncology medicines illustrates the power of policies aimed at UHC.
        <br/>
        <br/>
        These are effective policies that are having immediate, tangible impact on financial protection for Georgian population and this generates optimism for us in WHO as we seek to support other Member States in these areas.
        <br/>
        <br/>
        At Performators, we are PERformer ReFORMATORS with steadfast commitment to enhancing national welfare through the implementation of innovative Reforms. 
        Our competencies and experience have equipped us with a unique blend of strategic business insight and a profound sense of public duty.
        </p>
        </div>
        {isMobile ? (
          <div className="antd-slider">
          {/* <Button className="arrow-button" onClick={prevSlide} icon={<LeftOutlined />} /> */}
    
            <Carousel
            ref={carouselRef}
        dots={true}         // Show navigation dots
        infinite={true}     // Prevent infinite looping (optional)
        slidesToShow={1}     // Show one card at a time
        slidesToScroll={1}   // Scroll one card at a time
      >
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
          
        {/* Add more cards as needed */}
    </Carousel>
    
          {/* <Button className="arrow-button" onClick={nextSlide} icon={<RightOutlined />} /> */}
          </div>
        ) : (
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
        )}
    </div>
  );
}

export default About;
