import React from 'react';
import Header from './Header';
import OurMission from './OurMission';
import OurValues from '~/Components/OurValues';
import JobPositions from './JobPositions';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function Careers() {
    return(
        <>
            <Header/>
            <OurMission/>
            <motion.h1 
                className={styles.title}
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.4, duration: 0.4}}>
                    Why join us?
            </motion.h1>
            <OurValues/>
            <JobPositions/>
        </>
    )
}

export default Careers;