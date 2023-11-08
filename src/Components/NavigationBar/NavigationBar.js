import React from 'react';
import MobileNavigationBar from './MobileNavigationBar';
import styles from './styles.module.css';
import icons from './icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 670px)');
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        const route = e.target.getAttribute('data-route');
        navigate(route);
    }

    return mobile ? <MobileNavigationBar/> :
        <nav className={styles.nav}>
            <ul className={styles.nav_links}>
                <li>
                   <img src={icons['logo']} onClick={handleNavigate} data-route='/'/>   
                </li>
                <li>
                    <a onClick={handleNavigate} data-route='/about'>
                        About
                    </a>
                </li>    
                <li>
                    <a onClick={handleNavigate} data-route='/location'>
                        Location
                    </a>
                </li>  
                <li>
                    <a onClick={handleNavigate} data-route='/careers'>
                        Careers
                    </a>
                </li>          
            </ul>
            <button className={styles.nav_button}>
                Get Scootin
            </button>

        </nav>
    
}

export default NavigationBar;