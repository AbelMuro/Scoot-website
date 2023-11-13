import React from 'react';
import icons from './icons';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import { textVariants, buttonVariants } from './variants';

function SignUpMessage() {
    return(
        <motion.section 
            className={styles.signup} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: true, amount: 0.8}} 
            transition={{staggerChildren: 0.4}}> 
            <div className={styles.signup_content}>
                <motion.h1 className={styles.signup_title} variants={textVariants}>
                    Sign up and Scoot off today
                </motion.h1>
                <div className={styles.signup_buttons}>
                    <motion.button variants={buttonVariants}>
                        <img className={styles.appStoreIcon} src={icons['appStoreIcon']}/>
                    </motion.button>
                    <motion.button variants={buttonVariants}>
                        <img className={styles.appStoreIcon} src={icons['googleStoreIcon']}/>
                    </motion.button>
                </div>
            </div>

        </motion.section>
    )
}

export default SignUpMessage;