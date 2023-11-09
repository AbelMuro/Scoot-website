import React from 'react';
import styles from './styles.module.css';
import images from './images';

function OurValues() {
    return(
        <section className={styles.values}>
            <div className={styles.values_image}>
                <img src={images['tech']}/>
                <div>01</div>                
            </div>
            <h1 className={styles.values_title}>
                Our Tech
            </h1>
            <p className={styles.values_desc}>
                We’re using cutting edge technology 
                to drive accessible urban transportation 
                forward. Our fully electric scooters 
                are a joy to ride!
            </p>
            <div className={styles.values_image}>
                <img src={images['integrity']}/>
                <div>02</div>                
            </div>
            <h1 className={styles.values_title}>
                Our Integrity
            </h1>
            <p className={styles.values_desc}>
                We are fully committed to deliver a great yet safe, 
                sustainable micro-mobility experience in 
                every city we serve.
            </p>
            <div className={styles.values_image}>
                <img src={images['community']}/>
                <div>03</div>                
            </div>
            <h1 className={styles.values_title}>
                Our Community
            </h1>
            <p className={styles.values_desc}>
                We support every community we serve. 
                All workers are paid a living wage based 
                on their location and are Scoot employees.
            </p>
            

        </section>
    )
}

export default OurValues;