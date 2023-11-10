import React from 'react';
import styles from './styles.module.css';
import common from '~/Components/Common/images';

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}>
               Locations
            </h1>
            <img className={styles.header_circles} src={common['whiteCircles']}/>
        </header>
    )
}

export default Header;