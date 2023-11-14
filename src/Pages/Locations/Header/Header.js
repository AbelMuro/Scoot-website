import React from 'react';
import styles from './styles.module.css';
import common from '~/Components/Common/images';
import {motion} from 'framer-motion';
import {textVariants, imageVariants} from './variants';

function Header() {
    return(
        <motion.header 
            className={styles.header}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.8}}
            transition={{staggerChildren: 0.4}}>
                <motion.h1 className={styles.header_title} variants={textVariants}>
                    Locations
                </motion.h1>
                <motion.img className={styles.header_circles} src={common['whiteCircles']} variants={imageVariants}/>
        </motion.header>
    )
}

export default Header;