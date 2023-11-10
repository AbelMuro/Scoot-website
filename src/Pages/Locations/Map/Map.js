import React from 'react';
import styles from './styles.module.css';

function Map() {
    return(
        <section className={styles.map}>
            <div className={styles.map_container}>
                <img className={styles.map_image}/>
            </div>
            <h1 className={styles.map_title}>
                Your City Not Listed?
            </h1>
            <p className={styles.map_desc}>
                If you’d like to see Scoot in your hometown, 
                be sure to let us know. We track requests and 
                plan launches based on demand. Feel free to 
                message us by clicking the link or messaging 
                us on social.
            </p>
            <button className={styles.map_button}>
                Message Us
            </button>
        </section>
    )
}

export default Map;