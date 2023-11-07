import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function AppDetails({title, desc, flexDirection, arrow, arrowPosition, mobileArrowPosition, image}) {
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const containerRef = useRef();
    const arrowRef = useRef();
    const circleRef = useRef();
    const imageGroupRef = useRef();

    useEffect(() => {
        containerRef.current.classList.add(styles[`details_${flexDirection}`]);
        imageGroupRef.current.classList.add(styles[`details_imageGroup_${flexDirection}`]);
    }, [])


    useEffect(() => {
        if(mobile){
            Object.keys(mobileArrowPosition).forEach((prop) => {
                arrowRef.current.style[prop] = mobileArrowPosition[prop];
            })
        }
        else {
            Object.keys(arrowPosition).forEach((prop) => {
                arrowRef.current.style[prop] = arrowPosition[prop];
            })
        }
    }, [mobile])

    return(
        <section className={styles.details} ref={containerRef}>

            <div className={styles.details_text}>
                <h1>
                    {title}
                </h1>
                <p>
                    {desc}
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <div className={styles.details_imageGroup} ref={imageGroupRef}>
                <img className={styles.image} src={images[image]}/>            
                <img className={styles.arrow} src={images[arrow]} ref={arrowRef}/>
                <img className={styles.circle} src={images['circle']} ref={circleRef}/>
            </div>
            
        </section>
    )
}

export default AppDetails;