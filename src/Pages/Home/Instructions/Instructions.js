import React from 'react';
import icons from './icons';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {itemVariants, lineVariants} from './variants';


function Instructions() {

    const itemProps = {
        initial: 'hidden', 
        whileInView:'show', 
        viewport: {once: true}, 
        variants: itemVariants,
    }

    const lineProps = {
        initial: 'hidden', 
        whileInView:'show', 
        viewport: {once: true}, 
        variants: lineVariants,
    }

    return(
        <section className={styles.instructions}>
            <motion.img className={styles.instructions_icon} src={icons['locate']} {...itemProps}/>                
            <motion.h1 className={styles.instructions_title} {...itemProps}>Locate with app</motion.h1>
            <motion.p className={styles.instructions_desc} {...itemProps}>
                Use the app to find the nearest scooter to you. 
                We are continuously placing scooters in the areas 
                with most demand, so one should never be too far away. 
            </motion.p>
            <motion.img className={styles.instructions_icon} src={icons['scooter']} {...itemProps}/>                
            <motion.h1 className={styles.instructions_title} {...itemProps}>Pick Your scooter</motion.h1>
            <motion.p className={styles.instructions_desc} {...itemProps}>
                We show the most important info for 
                the scooters closest to you. So you know 
                how much charge they have left and can see 
                roughly how much it will cost.
            </motion.p>
            <div className={styles.icon_and_line}>
                <motion.hr className={styles.grey_line} {...lineProps}/>
               <motion.img className={styles.instructions_icon} src={icons['ride']} {...itemProps}/>    
            </div>        
            <motion.h1 className={styles.instructions_title} {...itemProps}>Enjoy the ride</motion.h1>
            <motion.p className={styles.instructions_desc} {...itemProps}>
                Scan the QR code and the bike will unlock. 
                Retract the cable lock, put on a helmet, and you’re off! 
                Always lock bikes away from walkways and accessibility ramps.
            </motion.p>
        </section>
    )
}

export default Instructions;