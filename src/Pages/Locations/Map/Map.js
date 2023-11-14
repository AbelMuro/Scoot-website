import React from 'react';
import styles from './styles.module.css';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {motion} from 'framer-motion';
import {textButtonVariants, mapVariants, citiesVariants} from './variants';

function Map() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    const props = {
        initial: 'hidden',
        whileInView: 'show',
    }

    return(
        <section className={styles.map}>
            <motion.img 
                className={styles.map_image} 
                {...props} 
                variants={mapVariants} 
                viewport={{once: true, amount: 0.6}}/>
            {mobile && 
                <motion.div 
                    className={styles.map_cities} 
                    {...props}
                    transition={{staggerChildren: 0.6}}>
                        <motion.div variants={citiesVariants}>
                            New York
                        </motion.div>
                        <motion.div variants={citiesVariants}>
                            London
                        </motion.div>
                        <motion.div variants={citiesVariants}>
                            Jakarta
                        </motion.div>
                        <motion.div variants={citiesVariants}>
                            Yokohama
                        </motion.div>
                </motion.div>
            }
            <motion.h1 
                className={styles.map_title} 
                {...props} 
                viewport={{once: true}}
                variants={textButtonVariants}>
                    Your City Not Listed?
            </motion.h1>
            <motion.p
                className={styles.map_desc} 
                {...props} 
                viewport={{once: true}}
                variants={textButtonVariants}>
                    If you’d like to see Scoot in your hometown, 
                    be sure to let us know. We track requests and 
                    plan launches based on demand. Feel free to 
                    message us by clicking the link or messaging 
                    us on social.
            </motion.p>
            <motion.button 
                className={styles.map_button} 
                {...props} 
                viewport={{once: true}}
                variants={textButtonVariants}>
                    Message Us
            </motion.button>
        </section>
    )
}

export default Map;