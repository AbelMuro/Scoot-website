import React from 'react';
import styles from './styles.module.css';
import common from '~/Components/Common/images';
import images from './images'
import {motion} from 'framer-motion';
import { imageVariants, textVariants, photoVariants } from './variants';

function CityNearYou() {


    const imageProps = {
        initial: 'hidden', 
        whileInView: 'show', 
        viewport: {once: true , amount: 0.6},
        transition: {staggerChildren: 0.4},
    }

    const textProps = {
        initial: 'hidden', 
        whileInView: 'show',
        viewport: {once: true, amount: 0.8},
        transition: {staggerChildren: 0.4}
    }

    const photoProps = {
        initial: 'hidden', 
        whileInView: 'show',
        viewport: {once: true, amount: 0.6},
        variants: photoVariants
    }

    return(        
        <section className={styles.container}>
            <motion.div className={styles.images} {...imageProps}> 
                    <motion.img className={styles.images_photo} src={images['nearYou']} variants={imageVariants} {...photoProps}/>
                    <motion.img className={styles.images_greyCircle} src={common['circle']} variants={imageVariants}/>
                    <motion.img className={styles.images_arrow} src={common['rightArrow']} variants={imageVariants}/>
            </motion.div>            
            <motion.div className={styles.text} {...textProps}>
                    <motion.h1 variants={textVariants}>
                        Coming to a city near you
                    </motion.h1>
                    <motion.p variants={textVariants}>
                        Scoot is available in 4 major cities so far. 
                        We’re expanding rapidly, so be sure to let us 
                        know if you want to see us in your hometown. 
                        We’re aiming to let our scooters loose 
                        on 23 cities over the coming year.
                    </motion.p>
                    <motion.button variants={textVariants}>
                        Learn More
                    </motion.button>
            </motion.div>

        </section>
    )
}

export default CityNearYou;