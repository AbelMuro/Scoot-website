import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';
import {itemVariants, imageVariants, numberBoxVariants} from './variants';

function OurValues() {

    const itemProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {
            once: true,
            amount: 0.8
        },
        variants: itemVariants
    }

    const imageProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {
            once: true,
            amount: 0.8
        },
        variants: imageVariants
    }

    const numberBoxProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {
            once: true,
            amount: 0.8
        },
        variants: numberBoxVariants
    }


    return(
        <section className={styles.values}>
            <motion.div className={styles.values_image} {...imageProps}>
                <img src={images['tech']}/>
                <motion.div {...numberBoxProps}>01</motion.div>                
            </motion.div>
            <motion.h1 className={styles.values_title} {...itemProps}>
                Our Tech
            </motion.h1>
            <motion.p className={styles.values_desc} {...itemProps}>
                We’re using cutting edge technology 
                to drive accessible urban transportation 
                forward. Our fully electric scooters 
                are a joy to ride!
            </motion.p>
            <motion.div className={styles.values_image} {...imageProps}>
                <img src={images['integrity']}/>
                <motion.div {...numberBoxProps}>02</motion.div>                
            </motion.div>
            <motion.h1 className={styles.values_title} {...itemProps}>
                Our Integrity
            </motion.h1>
            <motion.p className={styles.values_desc} {...itemProps}>
                We are fully committed to deliver a great yet safe, 
                sustainable micro-mobility experience in 
                every city we serve.
            </motion.p>
            <motion.div className={styles.values_image} {...imageProps}>
                <img src={images['community']}/>
                <motion.div {...numberBoxProps}>03</motion.div>                
            </motion.div>
            <motion.h1 className={styles.values_title} {...itemProps}>
                Our Community
            </motion.h1>
            <motion.p className={styles.values_desc} {...itemProps}>
                We support every community we serve. 
                All workers are paid a living wage based 
                on their location and are Scoot employees.
            </motion.p>
            

        </section>
    )
}

export default OurValues;