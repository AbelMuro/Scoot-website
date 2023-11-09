import React from 'react';
import styles from './styles.module.css';
import common from '~/Components/Common/images';
import images from './images'

function CityNearYou() {
    return(        
        <section className={styles.container}>
            <div className={styles.images}>
                <img className={styles.images_photo} src={images['nearYou']}/>
                <img className={styles.images_greyCircle} src={common['circle']}/>
                <img className={styles.images_arrow} src={common['rightArrow']}/>
            </div>            
            <div className={styles.text}>
                <h1>
                    Coming to a city near you
                </h1>
                <p>
                    Scoot is available in 4 major cities so far. 
                    We’re expanding rapidly, so be sure to let us 
                    know if you want to see us in your hometown. 
                    We’re aiming to let our scooters loose 
                    on 23 cities over the coming year.
                </p>
                <button>
                    Learn More
                </button>
            </div>

        </section>
    )
}

export default CityNearYou;