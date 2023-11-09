import React from 'react';
import Header from './Header';
import MobilityDigitalEra from './MobilityDigitalEra';
import BetterUrbanLiving from './BetterUrbanLiving';
import OurValues from '~/Components/OurValues';
import FAQ from './FAQ';
import styles from './styles.module.css';

function About() {
    return(
        <>
            <Header/>
            <MobilityDigitalEra/>
            <BetterUrbanLiving/>
            <h1 className={styles.title}>
                Our Values
            </h1>
            <OurValues/>
            <FAQ/>
        </>
    )
}

export default About;