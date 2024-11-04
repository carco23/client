import React from 'react';
import styles from './Skills.module.css'
import Health from '../../assets/Heart.svg'
import Risk from '../../assets/Risks.svg'
import Government from '../../assets/mingcute_government-fill.svg'
import Monitoring from '../../assets/eos-icons_monitoring.svg'
import Human from '../../assets/mdi_human-queue.svg'
import Crisis from '../../assets/healthicons_crisis-response-center-person.svg'
import Policy from '../../assets/material-symbols_policy-alert-rounded.svg'
import { Carousel, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './slider.css'

function Skills() {

    const carouselRef = React.useRef(null);

  const slides = [
    [
        {
            key: 1,
            name: 'Health system strategy & analytics',
            image: Health,
            description: 'Health system strategy and analytics are crucial for improving patient outcomes, optimizing resources, and guiding data-driven decisions in healthcare.'
        },
        {
            key: 2,
            name: 'Risk assessment and mitigation strategies',
            image: Risk,
            description: 'Risk assessment and mitigation are essential in business to identify potential threats, reduce losses, ensure stability, and support sustainable growth.'
        },
    ],
    [
        {
            key: 3,
            name: 'Government reforms implementation and problem solving',
            image: Government,
            description: 'Implementing government reforms and effective problem-solving are vital for fostering economic growth, improving public services, and addressing societal challenges efficiently.'
        },
        {
            key: 4,
            name: 'Continuous monitoring and feedback assessment',
            image: Monitoring,
            description: 'Continuous monitoring and feedback assessment are critical in business for maintaining quality, improving processes, enhancing customer satisfaction, and driving long-term success.'
        },
    ],
    [
        {
            key: 5,
            name: 'Human Capital',
            image: Human,
            description: 'Human capital is essential in business as skilled, motivated employees drive innovation, productivity, customer satisfaction, and overall organizational growth and resilience.'
        },
        {
            key: 6,
            name: 'Crisis Management',
            image: Crisis,
            description: 'Crisis management is crucial in any business to effectively handle unexpected challenges, minimize disruptions, and protect the organization’s reputation. Proactive planning ensures swift responses.'
        },
    ],
    [
    {
        key: 7,
        name: 'Policy Making',
        image: Policy,
        description: 'Policy-making is vital in business as it establishes clear guidelines, supports regulatory compliance, enhances operational efficiency, and aligns daily actions with long-term strategic objectives for sustainable growth.'
    },
]
  ];

  const nextSlide = () => carouselRef.current.next();
  const prevSlide = () => carouselRef.current.prev();

  return (
    <div className={styles.skills} id='skills'>
        <div className={styles.text}>
            <h1>Our Team</h1>
            <p>Team experienced professionals Reforming for Sustainable Impact. We are proficient in:</p>
        </div>
        <div className="antd-slider">
      <Button className="arrow-button" onClick={prevSlide} icon={<LeftOutlined />} />

      <Carousel ref={carouselRef} dots={{ className: 'custom-dots' }}>
        {slides.map((slidePair, index) => (
          <div key={index} className="slide">
            {slidePair.map((slide, idx) => (
              <div key={idx} className="slide-card">
                <div className='slider-left'>
                    <img src={slide.image} />
                </div>
                <div className='slider-right'>
                    <h1>{slide.name}</h1>
                    <p>{slide.description}</p>
                    <a href="#">See More ...</a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>

      <Button className="arrow-button" onClick={nextSlide} icon={<RightOutlined />} />
    </div>
    </div>
  );
}

export default Skills;
