import React from 'react';
import styles from './styles.module.css';
import images from './images'

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.header_content}>
                <h1 className={styles.header_title}>
                    Scooter sharing made simple!
                </h1>
                <img className={styles.header_line} src={images['line']}/>
                <p className={styles.header_desc}>
                    Scoot takes the hassle out of urban mobility. 
                    Our bikes are placed in convenient locations 
                    in each of our cities. Use our app to locate 
                    the nearest bike, unlock it with a tap, 
                    and you’re away!
                </p>
                <button className={styles.header_button}>
                    Get Scootin
                </button>
                <img className={styles.header_rightArrow} src={images['rightArrow']}/>                
            </section>

            <img className={styles.header_whiteCircles} src={images['whiteCircles']}/>
        </header>
    )
}

export default Header