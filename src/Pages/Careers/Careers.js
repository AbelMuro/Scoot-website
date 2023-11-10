import React from 'react';
import Header from './Header';
import OurMission from './OurMission';
import OurValues from '~/Components/OurValues';
import JobPositions from './JobPositions';
import styles from './styles.module.css';

function Careers() {
    return(
        <>
            <Header/>
            <OurMission/>
            <h1 className={styles.title}>
                Why join us?
            </h1>
            <OurValues/>
            <JobPositions/>
        </>
    )
}

export default Careers;