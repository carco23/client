import React from 'react';
import styles from './Highlights.module.css'
import SeeForYourself from '../../assets/seeForYourself.svg'
import CardImage from '../../assets/cardImage.svg'
import { Link } from 'react-router-dom';

function Highlights() {
  return (
    <div className={styles.highlights} id='highlights'>
        <div className={styles.text}>
            <h1>Our Success Stories</h1>
        </div>
        <img src={SeeForYourself} className={styles.highlightsImg}/>
        <div className={styles.stories}>
            <div className={styles.story}>
                <img src={CardImage} />
                <h1>Diagnose Related Groups Implementation</h1>
                <li>Complex health reforms implementation with over 20 years of advice to the government to start their implementation.</li>
                <li>Diagnosis-Related Group (DRG) payment model for hospitals – adopted on November 1, 2022.</li>
                <li>Analysis and Design Phase – 6 months.</li>
                <li>Results after 1 year of implementation: significantly improved value for money with the same public expenditure on inpatient services. Compared to the previous year, out-of-pocket (OOP) expenses on inpatient services decreased from 27% to 10%.</li>
            </div>
            <div className={styles.story}>
                <img src={CardImage} />
                <h1>Pharmaceuticals Reference Pricing</h1>
                <li>External reference pricing introduced by Law on Medicines and Pharmaceutical products on December 1, 2022.</li>
                <li>Phased introduction of ERP by different categories of medicines and their consumption volume Shortly after its introduction inflation rate on medicines showed a remarkable decrease:</li>
                <li>Aoverall inflation on medicines (-9%)</li>
                <li>Prices on antibiotics decreased most by (-41.7%)</li>
            </div>
            <div className={styles.story} >
                <img src={CardImage} />
                <h1>Pharma Sector Reform</h1>
                <li>Reforms implemented in the field of pharmaceuticals including reference pricing and managed entry agreements (MEA) enabled the system.</li>
                <li>To remove annual ceilings on chronic diseases management and cancer care drugs.</li>
                <li>Substantially reduce financial barriers to chronic disease management and cancer drugs.</li>
            </div>
            <div className={styles.story}>
                <img src={CardImage} />
                <h1>Health Service Quality</h1>
                <li>International Accreditation requirement for medical facilities as a prerequisite to participate in state funded health coverage program from 2025</li>
            </div>
            <div className={styles.story}  >
                <img src={CardImage} />
                <h1>Legislative Work</h1>
                <li>Law on medically assisted Reproduction / Surrogacy</li>
                <li>Law on medical devices</li>
                <li>Legal framework for cosmetics regulation</li>
                <li>Labor Code - Labor Inspection Office</li>
            </div>
        </div>
        <button className={styles.learnMore}><Link to='/highlights'>Learn More</Link></button>
    </div>
  );
}

export default Highlights;
