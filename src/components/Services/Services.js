import React from 'react';
import styles from './Services.module.css'
import Health from '../../assets/health-financing.svg'
import Risk from '../../assets/legislative.svg'
import Government from '../../assets/Heart.svg'
import Monitoring from '../../assets/pharmaceutical.svg'
import Human from '../../assets/social-care.svg'
import { Carousel, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './slides.css'

function Services() {

    const carouselRef = React.useRef(null);

  const slides = [
    [
        {
            key: 1,
            name: 'Health financing & policy reforms',
            image: Health,
            description: 'We lead health financing reforms, including the Diagnosis-Related Group (DRG) payment model, which has successfully reduced out-of-pocket payments. Our expertise spans health financing models and essential services like mental health, tuberculosis treatment, and dialysis, ensuring these critical services remain accessible and affordable. Additionally, we have implemented minimum wage policies for healthcare professionals, providing fair compensation to doctors, nurses, and support staff, which strengthens workforce retention and motivation.'
        },
        {
            key: 2,
            name: 'Legislative and Regulatory Framework Development',
            image: Risk,
            description: 'We support a strong legal framework for health and social care, including laws on assisted reproduction, medical devices, and regulations that empower national healthcare agencies. We advocate for minimum wage standards in healthcare, ensuring fair labor practices and underscoring the value of healthcare workers in regulatory policies. Our initiatives also include labor code amendments for inspection services and enhanced regulatory authority for health and pharmaceutical sectors.'
        },
    ],
    [
        {
            key: 3,
            name: 'Health Service Provision and Quality Improvement',
            image: Government,
            description: 'We focus on enhancing care quality and access, implementing policies for affordable cancer treatments and specialized pediatric cancer care programs. To ensure high standards, we require hospitals to meet international accreditation, with most now achieving these benchmarks. Additionally, we’ve improved access to continuous glucose monitoring (CGM) for diabetes care, helping patients better manage their health. Other initiatives include direct contracts with pharmaceutical manufacturers for discounted innovations and advanced medical residency programs.'
        },
        {
            key: 4,
            name: 'Pharmaceutical reform & Quality assurance',
            image: Monitoring,
            description: 'We drive pharmaceutical reforms to improve access to high-quality, affordable medicines, including a reference pricing policy that has significantly lowered drug prices in Georgia. We’ve introduced Good Manufacturing Practice (GMP) and Good Distribution Practice (GDP) standards to ensure rigorous quality for all market medicines. Other initiatives include managed entry agreements (MEAs) for innovative drugs at discounted prices, establishing a national drug laboratory, and updating clinical trial regulations to enhance drug safety and accessibility.'
        },
    ],
    [
    {
        key: 5,
        name: ' ⁠Social Care Transformation',
        image: Human,
        description: 'We are dedicated to building a compassionate social care system by supporting the transition of individuals from large institutions to family-style housing that offers a more supportive environment. To promote inclusion, we implement active labor market policies that help socially vulnerable groups gain employment and achieve financial independence. Additionally, we address the housing needs of internally displaced persons (IDPs), ensuring they have access to safe, stable accommodations that foster a sense of community and security.'
    },
]
  ];

  const nextSlide = () => carouselRef.current.next();
  const prevSlide = () => carouselRef.current.prev();

  return (
    <div className={styles.skills} id='skills'>
        <div className={styles.text}>
            <h1>Our Services</h1>
            <p>We bring a combination of deep expertise, a track record of impactful reforms, and a collaborative approach to every project. By working closely with partners and clients, we create solutions that are efficient, scalable, and designed for lasting impact in health and social care systems.</p>
        </div>
        <div className="antd-slider">
      <Button className="arrow-button" onClick={prevSlide} icon={<LeftOutlined />} />

      <Carousel ref={carouselRef} dots={{ className: 'custom-dots' }}>
        {slides.map((slidePair, index) => (
          <div key={index} className="slides">
            {slidePair.map((slide, idx) => (
              <div key={idx} className="card-slide">
                <div className='left-slider'>
                    <img src={slide.image} />
                </div>
                <div className='right-slider'>
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

export default Services;
