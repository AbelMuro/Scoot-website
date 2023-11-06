import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';


//make this component reusable
function AppDetails({arrow, arrowPosition, circlePosition, image}) {
    const arrowRef = useRef();
    const circleRef = useRef();

    useEffect(() => {
        Object.keys(arrowPosition).forEach((prop) => {
            arrowRef.current.style[prop] = arrowPosition[prop];
        })
        Object.keys(circlePosition).forEach((prop) => {
            circleRef.current.style[prop] = circlePosition[prop];
        })
    }, [])

    return(
        <section className={styles.details}>
            <img className={styles.arrow} src={images[arrow]} ref={arrowRef}/>
            <img className={styles.circle} src={images['circle']} ref={circleRef}/>
            <div className={styles.details_text}>
                <h1>
                    Easy to use riding telemetry
                </h1>
                <p>
                    The Scoot app is available with riding telemetry. 
                    This means it can show you your average speed, 
                    how long you've been using the scooter, 
                    your traveling distance, and many more things 
                    all in an easy to use app.
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <img className={styles.details_image} src={images[image]}/>
        </section>
    )
}

export default AppDetails;