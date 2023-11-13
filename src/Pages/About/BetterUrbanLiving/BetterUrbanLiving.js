import React from 'react';
import styles from './styles.module.css';
import images from './images';
import common from '~/Components/Common/images'
import {motion} from 'framer-motion';
import {imageVariants, textVariants, photoVariants} from './variants';

function BetterUrbanLiving() {

    const imageProps = {
        initial:'hidden',
        whileInView:'show',
        viewport: {once: true, amount: 0.8},
        transition: {staggerChildren: 0.5, staggerDirection: -1}
    }

    const textProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.8},
        transition: {staggerChildren: 0.7}
    }

    const photoProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.8},
        transition: {staggerChildren: 0.7},
        variants: photoVariants
    }

    return(
        <section className={styles.container}>
            <motion.div className={styles.images} {...imageProps}>
                <motion.img className={styles.images_greyCircle} src={common['circle']} variants={imageVariants}/>                
                <motion.img className={styles.images_photo} src={images['betterLiving']} {...photoProps}/>
                <motion.img className={styles.images_arrow} src={common['rightArrow']} variants={imageVariants}/>
            </motion.div>            
            <motion.div className={styles.text} {...textProps}>
                    <motion.h1 variants={textVariants}>
                        Better urban living
                    </motion.h1>
                    <motion.p variants={textVariants}>
                        We’re helping connect cities and bring people closer together. 
                        Our scooters are also fully-electric and we offset the minimal 
                        carbon footprint for each ride.
                    </motion.p>
            </motion.div>
        </section>
    )
}

export default BetterUrbanLiving;