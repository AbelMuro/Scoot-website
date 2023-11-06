import React from 'react';
import icons from './icons';
import styles from './styles.module.css';

function Instructions() {
    return(
        <section className={styles.instructions}>
            <img className={styles.instructions_icon} src={icons['locate']}/>                
            <h1 className={styles.instructions_title}>Locate with app</h1>
            <p className={styles.instructions_desc}>
                Use the app to find the nearest scooter to you. 
                We are continuously placing scooters in the areas 
                with most demand, so one should never be too far away. 
            </p>
            <img className={styles.instructions_icon} src={icons['scooter']}/>                
            <h1 className={styles.instructions_title}>Pick Your scooter</h1>
            <p className={styles.instructions_desc}>
                We show the most important info for 
                the scooters closest to you. So you know 
                how much charge they have left and can see 
                roughly how much it will cost.
            </p>
            <div className={styles.icon_and_line}>
                <hr className={styles.grey_line}/>
               <img className={styles.instructions_icon} src={icons['ride']}/>    
            </div>
                         
            <h1 className={styles.instructions_title}>Enjoy the ride</h1>
            <p className={styles.instructions_desc}>
                Scan the QR code and the bike will unlock. 
                Retract the cable lock, put on a helmet, and you’re off! 
                Always lock bikes away from walkways and accessibility ramps.
            </p>
        </section>
    )
}

export default Instructions;