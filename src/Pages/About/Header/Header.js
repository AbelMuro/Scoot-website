import React from 'react';
import styles from './styles.module.css';
import images from './images';


function Header() {


    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}>
               About
            </h1>
            <img className={styles.header_circles} src={images['whiteCircles']}/>
        </header>
    )
}

export default Header;