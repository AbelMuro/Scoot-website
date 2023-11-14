import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';
import { imageVariants, textVariants, photoVariants } from './variants';

function MobilityDigitalEra() {

    const textProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.8}
    }

    const photoProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.6},
        variants: photoVariants
    }

    return(
        <section className={styles.container}>
            <motion.div 
                className={styles.text}
                {...textProps}
                transition={{staggerChildren: 0.4}}>
                <motion.h1 variants={textVariants}>
                    Mobility for the digital era
                </motion.h1>
                <motion.p variants={textVariants}>
                    Getting around should be simple 
                    (and even fun!) for everyone. 
                    We embrace technology to provide 
                    low cost, smart access to scooters 
                    at your fingertips.
                </motion.p>
            </motion.div>
            <motion.div 
                className={styles.images} 
                {...textProps}
                transition={{staggerChildren: 0.6}}>
                    <motion.img className={styles.images_photo} src={images['digitalEra']} {...photoProps} />
                    <motion.img className={styles.images_greyCircle} src={images['circle']} variants={imageVariants}/>
                    <motion.img className={styles.images_arrow} src={images['leftUpwardArrow']} variants={imageVariants}/>
            </motion.div>
        </section>
    )
}

export default MobilityDigitalEra;