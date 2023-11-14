import React from 'react';
import styles from './styles.module.css';
import images from './images';
import common from '~/Components/Common/images';
import {motion} from 'framer-motion'
import {imageVariants, textVariants, photoVariants} from './variants';

function OurMission () {

    const textProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.6},
        transition: {staggerChildren: 0.4},
    }

    const imageProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.6},
        transition: {staggerChildren: 0.6},
    }

    return(
        <section className={styles.container}>
            <motion.div className={styles.text} {...textProps}>
                <motion.h1 variants={textVariants}>
                    Care to join our mission?
                </motion.h1>
                <motion.p variants={textVariants}>
                    We’re always looking for ambitious 
                    individuals to help us on our journey. 
                    If you’re passionate about our mission 
                    to provide clean, accessible transport 
                    to improve urban living we want to 
                    hear from you!
                </motion.p>
                <motion.button variants={textVariants}>
                    Say Hello
                </motion.button>
            </motion.div>
            <motion.div className={styles.images} {...imageProps}>
                <motion.img className={styles.images_photo} src={images['joinUs']} variants={photoVariants}/>
                <motion.img className={styles.images_greyCircle} src={common['circle']} variants={imageVariants}/>
                <motion.img className={styles.images_arrow} src={common['leftDownwardArrow']} variants={imageVariants}/>
            </motion.div>
        </section>
    )
}

export default OurMission;