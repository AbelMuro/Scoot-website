import React from 'react';
import styles from './styles.module.css';
import images from './images'
import common from '~/Components/Common/images';
import {motion} from 'framer-motion';
import {imageVariants, textVariants, photoVariants} from './variants'

function RidingTelemetry() {


    const textProps = {
        initial: 'hidden', 
        whileInView: 'show', 
        viewport: {once: true, amount: 0.8}, 
        transition: {staggerChildren: 0.3},
    }

    const imageProps = {
        initial: 'hidden',
        whileInView: 'show', 
        viewport: {once: true, amount: 0.6},
        transition: {staggerChildren: 0.6}
    }

    const photoProps = {
        initial: 'hidden',
        whileInView: 'show', 
        viewport: {once: true, amount: 0.6},
        variants: photoVariants,
    }

    return(
        <section className={styles.container}>
            <motion.div 
                className={styles.text} {...textProps}>
                    <motion.h1 variants={textVariants}>
                        Easy to use riding telemetry
                    </motion.h1>
                    <motion.p variants={textVariants}>
                        The Scoot app is available with riding telemetry. 
                        This means it can show you your average speed, 
                        how long you've been using the scooter, 
                        your traveling distance, and many more 
                        things all in an easy to use app.
                    </motion.p>
                    <motion.button variants={textVariants}>
                        Learn More
                    </motion.button>
            </motion.div>
            <motion.div className={styles.images} {...imageProps}>
                    <motion.img className={styles.images_photo} src={images['telemetry']} {...photoProps}/>
                    <motion.img className={styles.images_greyCircle} src={common['circle']} variants={imageVariants}/>
                    <motion.img className={styles.images_arrow} src={common['leftDownwardArrow']} variants={imageVariants}/>
            </motion.div>
        </section>
    )
}

export default RidingTelemetry;