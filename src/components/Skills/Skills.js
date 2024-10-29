import React from 'react';
import styles from './Skills.module.css'
import Health from '../../assets/Health.svg'
import Risk from '../../assets/Risk.svg'
import Government from '../../assets/Government.svg'
import Monitoring from '../../assets/Monitoring.svg'
import Human from '../../assets/Human.svg'
import Crisis from '../../assets/Crisis.svg'
import Policy from '../../assets/Policy.svg'

const data = [
    {
        key: 1,
        name: 'Health system strategy & analytics',
        image: Health
    },
    {
        key: 2,
        name: 'Risk assessment and mitigation strategies',
        image: Risk
    },
    {
        key: 3,
        name: 'Government reforms implementation and problem solving',
        image: Government
    },
    {
        key: 4,
        name: 'Continuous monitoring and feedback assessment',
        image: Monitoring
    },
    {
        key: 5,
        name: 'Human Capital',
        image: Human
    },
    {
        key: 6,
        name: 'Crisis Management',
        image: Crisis
    },
    {
        key: 7,
        name: 'Policy Making',
        image: Policy
    },
]

function Skills() {
  return (
    <div className={styles.skills}>
        <div className={styles.text}>
            <h1>Our Skills</h1>
            <p>Team experienced professionals Reforming for Sustainable Impact. We are proficient in:</p>
        </div>
        <div className={styles.skillsContainer}>
            {data.map((item) => {
                return (
                    <div key={item.key} className={styles.skill}>
                        <img src={item.image} />
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Skills;
