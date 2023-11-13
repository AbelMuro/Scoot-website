import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';
import {variants} from './variants'

function Header() {

    return(
        <motion.header className={styles.header} initial='hidden' whileInView={'show'} viewport={{once: true}}transition={{staggerChildren: 0.3}}>
            <section className={styles.header_content}>
                <motion.h1 className={styles.header_title} variants={variants}>
                    Scooter sharing made simple
                </motion.h1>
                <motion.img className={styles.header_line} src={images['line']} variants={variants}/>
                <motion.p className={styles.header_desc} variants={variants}>
                    Scoot takes the hassle out of urban mobility. 
                    Our bikes are placed in convenient locations 
                    in each of our cities. Use our app to locate 
                    the nearest bike, unlock it with a tap, 
                    and you’re away!
                </motion.p>
                <motion.button className={styles.header_button} variants={variants}>
                    Get Scootin
                </motion.button>
                <motion.img className={styles.header_rightArrow} src={images['rightArrow']} variants={variants}/>                
            </section>

            <motion.img className={styles.header_whiteCircles} src={images['whiteCircles']} variants={variants}/>
        </motion.header>
    )
}

export default Header