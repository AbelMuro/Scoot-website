import React from 'react';
import styles from './styles.module.css';
import icons from './icons'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import { linkVariants } from './variants';

function FooterBar() {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.target.getAttribute('data-route');
        window.scrollTo(0,0);
        navigate(route)
    }

    const linkProps = {
        initial:'hidden', 
        whileInView: 'show', 
        viewport: {once: true, amount: 0.8}, 
        transition: {staggerChildren: 0.4}
    }

    const socialProps = {
        initial:'hidden', 
        whileInView: 'show', 
        viewport: {once: false , amount: 0.8}, 
        transition: {staggerChildren: 0.4},
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <motion.ul className={styles.footer_links} {...linkProps}>
                    <motion.li variants={linkVariants}>
                        <img className={styles.footer_logo} src={icons['logo']} onClick={handleNavigation} data-route='/'/>
                    </motion.li>
                    <motion.li onClick={handleNavigation} data-route='/about' variants={linkVariants}>
                        About
                    </motion.li>
                    <motion.li onClick={handleNavigation} data-route='/location' variants={linkVariants}>
                        Location
                    </motion.li>
                    <motion.li onClick={handleNavigation} data-route='/careers' variants={linkVariants}>
                        Careers
                    </motion.li>
                </motion.ul>
                <motion.ul className={styles.footer_social} {...socialProps}>
                    <motion.li className={styles.footer_social_link} variants={linkVariants}></motion.li>
                    <motion.li className={styles.footer_social_link} variants={linkVariants}></motion.li>
                    <motion.li className={styles.footer_social_link} variants={linkVariants}></motion.li>
                </motion.ul>

            </div>

        </footer>
    )
}

export default FooterBar;