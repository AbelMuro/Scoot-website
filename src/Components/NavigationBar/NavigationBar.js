import React from 'react';
import MobileNavigationBar from './MobileNavigationBar';
import styles from './styles.module.css';
import icons from './icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import {linkVariants} from './variants';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 670px)');
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        const route = e.target.getAttribute('data-route');
        navigate(route);
    }

    return mobile ? <MobileNavigationBar/> :
        <motion.nav className={styles.nav} initial='hidden' whileInView='show' viewport={{once: true}} transition={{staggerChildren: 0.3}}>
            <ul className={styles.nav_links}>
                <motion.li variants={linkVariants}>
                   <img src={icons['logo']} onClick={handleNavigate} data-route='/'/>   
                </motion.li>
                <motion.li variants={linkVariants}>
                    <a onClick={handleNavigate} data-route='/about'>
                        About
                    </a>
                </motion.li>    
                <motion.li variants={linkVariants}>
                    <a onClick={handleNavigate} data-route='/location'>
                        Location
                    </a>
                </motion.li>  
                <motion.li variants={linkVariants} >
                    <a onClick={handleNavigate} data-route='/careers'>
                        Careers
                    </a>
                </motion.li>          
            </ul>
            <motion.button className={styles.nav_button} variants={linkVariants}>
                Get Scootin
            </motion.button>
        </motion.nav>
}

export default NavigationBar;