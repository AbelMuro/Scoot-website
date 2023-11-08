import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './styles.module.css';
import icons from '../icons';

function MobileNavigationBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    const handleNavigate = (e) => {
        const route = e.target.getAttribute('data-route')
        setOpen(false);
        navigate(route);
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgb(0, 0, 0, 0.7473)';
                dialogRef.current.style.clipPath = 'circle(100vh at 30px 35px)'
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.clipPath = '';
            setTimeout(() => {
                if(!dialogRef.current) return;
                overlayRef.current.style.display = '';
            }, 500)
        }
    }, [open])

    useEffect(() => {
        if(open)
            window.addEventListener('scroll', handleScroll);
        else
            window.removeEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [open])

    return(
        <>
            <nav className={styles.nav}>
                {open ? <div className={styles.nav_close_menu} onClick={handleOpen}/> : <div className={styles.nav_menu_open} onClick={handleOpen}/>}
                <img className={styles.nav_logo} src={icons['logo']} onClick={handleNavigate} data-route='/'/>
            </nav>      
            <div className={styles.overlay} ref={overlayRef}>
                <dialog className={styles.dialog} ref={dialogRef}>
                    <ul className={styles.dialog_links}>
                        <li>
                            <a onClick={handleNavigate} data-route='/about'>About</a>
                        </li>
                        <li>
                            <a onClick={handleNavigate} data-route='/location'>Location</a>
                        </li>
                        <li>
                            <a onClick={handleNavigate} data-route='/careers'>Careers</a>
                        </li>
                    </ul>
                    <button className={styles.dialog_button}>
                        Get Scootin
                    </button>
                </dialog>    
            </div>  
        </>

    )
}

export default MobileNavigationBar;