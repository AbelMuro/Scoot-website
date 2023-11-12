import React from 'react';
import styles from './styles.module.css';
import icons from './icons'
import { useNavigate } from 'react-router-dom';

function FooterBar() {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.target.getAttribute('data-route');
        window.scrollTo(0,0);
        navigate(route)
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <ul className={styles.footer_links}>
                    <li>
                        <img className={styles.footer_logo} src={icons['logo']} onClick={handleNavigation} data-route='/'/>
                    </li>
                    <li onClick={handleNavigation} data-route='/about'>
                        About
                    </li>
                    <li onClick={handleNavigation} data-route='/location'>
                        Location
                    </li>
                    <li onClick={handleNavigation} data-route='/careers'>
                        Careers
                    </li>
                </ul>
                <ul className={styles.footer_social}>
                    <li className={styles.footer_social_link}></li>
                    <li className={styles.footer_social_link}></li>
                    <li className={styles.footer_social_link}></li>
                </ul>

            </div>

        </footer>
    )
}

export default FooterBar;