import React from 'react';
import MobileNavigationBar from './MobileNavigationBar';
import styles from './styles.module.css';
import icons from './icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 670px)');

    return mobile ? <MobileNavigationBar/> :
        <nav className={styles.nav}>
            <ul className={styles.nav_links}>
                <li>
                   <img src={icons['logo']}/>   
                </li>
                <li>
                    <a>About</a>
                </li>    
                <li>
                    <a>Location</a>
                </li>  
                <li>
                    <a >Careers</a>
                </li>          
            </ul>
            <button className={styles.nav_button}>
                Get Scootin
            </button>

        </nav>
    
}

export default NavigationBar;