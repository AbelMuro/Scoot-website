import React from 'react';
import styles from './styles.module.css';
import images from './images';
import common from '~/Components/Common/images';

function OurMission () {
    return(
        <section className={styles.container}>
            <div className={styles.text}>
                <h1>
                Easy to use riding telemetry
                </h1>
                <p>
                    The Scoot app is available with riding telemetry. 
                    This means it can show you your average speed, 
                    how long you've been using the scooter, 
                    your traveling distance, and many more 
                    things all in an easy to use app.
                </p>
                <button>
                    Say Hello
                </button>
            </div>
            <div className={styles.images}>
                <img className={styles.images_photo} src={images['joinUs']}/>
                <img className={styles.images_greyCircle} src={common['circle']}/>
                <img className={styles.images_arrow} src={common['leftDownwardArrow']}/>
            </div>
        </section>
    )
}

export default OurMission;