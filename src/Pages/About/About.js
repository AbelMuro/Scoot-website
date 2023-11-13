import React from 'react';
import Header from './Header';
import MobilityDigitalEra from './MobilityDigitalEra';
import BetterUrbanLiving from './BetterUrbanLiving';
import OurValues from '~/Components/OurValues';
import FAQ from './FAQ';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function About() {
    return(
        <>
            <Header/>
            <MobilityDigitalEra/>
            <BetterUrbanLiving/>
            <motion.h1 
                className={styles.title} 
                initial={{opacity: 0, x: -100}} 
                whileInView={{opacity: 1, x: 0}} 
                viewport={{once: true}} 
                transition={{delay: 0.6, duration: 0.4}}>
                Our Values
            </motion.h1>
            <OurValues/>
            <FAQ/>
        </>
    )
}

export default About;