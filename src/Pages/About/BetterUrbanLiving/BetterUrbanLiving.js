import React from 'react';
import styles from './styles.module.css';
import images from './images';
import common from '~/Components/Common/images'

function BetterUrbanLiving() {
    return(
        <section className={styles.container}>
            <div className={styles.images}>
                <img className={styles.images_greyCircle} src={common['circle']}/>                
                <img className={styles.images_photo} src={images['betterLiving']}/>
                <img className={styles.images_arrow} src={common['rightArrow']}/>
            </div>            
            <div className={styles.text}>
                <h1>
                    Better urban living
                </h1>
                <p>
                    We’re helping connect cities and bring people closer together. 
                    Our scooters are also fully-electric and we offset the minimal 
                    carbon footprint for each ride.
                </p>
            </div>
        </section>
    )
}

export default BetterUrbanLiving;