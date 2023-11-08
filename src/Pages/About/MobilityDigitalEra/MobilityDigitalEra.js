import React from 'react';
import styles from './styles.module.css';
import images from './images';

function MobilityDigitalEra() {
    return(
        <section className={styles.container}>
            <div className={styles.text}>
                <h1>
                    Mobility for the digital era
                </h1>
                <p>
                    Getting around should be simple 
                    (and even fun!) for everyone. 
                    We embrace technology to provide 
                    low cost, smart access to scooters 
                    at your fingertips.
                </p>
            </div>
            <div className={styles.images}>
                <img className={styles.images_photo} src={images['digitalEra']}/>
                <img className={styles.images_greyCircle} src={images['circle']}/>
                <img className={styles.images_arrow} src={images['leftUpwardArrow']}/>
            </div>
        </section>
    )
}

export default MobilityDigitalEra;