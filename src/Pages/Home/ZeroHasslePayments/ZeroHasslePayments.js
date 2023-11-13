import React from 'react';
import styles from './styles.module.css';
import common from '~/Components/Common/images';
import images from './images';
import {motion} from 'framer-motion';
import { imageVariants, photoVariants, textVariants } from './variants';

function ZeroHasslePayments() {

    const textProps = {
        initial: 'hidden', 
        whileInView: 'show', 
        viewport: {once: true, amount: 0.8}, 
        transition: {staggerChildren: 0.4}
    }

    const imageProps = {
        initial:'hidden', 
        whileInView: 'show', 
        viewport: {once: true, amount: 0.8},
        transition: {staggerChildren: 0.4}
    }
    
    const photoProps = {
        initial:'hidden', 
        whileInView: 'show', 
        viewport: {once: true, amount: 0.8},
        transition: {staggerChildren: 0.4},
        variants: photoVariants
    }

    return(
        <section className={styles.container}>
            <motion.div className={styles.text} {...textProps}>
                <motion.h1 variants={textVariants}>
                    Zero hassle payments
                </motion.h1>
                <motion.p variants={textVariants}>
                    Our payment is as easy as one two three. 
                    We accept most credit cards and debit cards. 
                    You can also link your PayPal account inside the app.
                    Need to pay later? No worries! 
                    You can defer payment for up to a month.
                </motion.p>
                <motion.button variants={textVariants}>
                    Learn More
                </motion.button>
            </motion.div>
            <motion.div className={styles.images} {...imageProps}>
                <motion.img className={styles.images_photo} src={images['payments']} {...photoProps}/>
                <motion.img className={styles.images_greyCircle} src={common['circle']} variants={imageVariants}/>
                <motion.img className={styles.images_arrow} src={common['leftDownwardArrow']} variants={imageVariants}/>
            </motion.div>
        </section>
    )
}

export default ZeroHasslePayments;