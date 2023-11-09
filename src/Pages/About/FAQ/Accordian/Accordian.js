import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function Accordian({title, content}){
    const [open, setOpen] = useState(false);
    const contentRef = useRef();
    const accordianRef = useRef();
    const arrowRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }
    
    useEffect(() => {
        if(open){
            arrowRef.current.style.transform = 'rotate(180deg)';
            accordianRef.current.style.rowGap = '24px';
            let height = contentRef.current.scrollHeight + 'px';
            contentRef.current.style.height = height;
 
        }
        else{
            arrowRef.current.style.transform = '';
            contentRef.current.style.height = '';
            setTimeout(() => {
                if(!accordianRef.current) return;
                accordianRef.current.style.rowGap = '';
            }, 100)
        }

    }, [open])

    return(
        <div className={styles.accordian} onClick={handleOpen} ref={accordianRef}>
            <h1 className={styles.accordian_title}>
                {title}
            </h1>
            <img className={styles.accordian_arrow} src={icons['arrow']} ref={arrowRef}/>
            <p className={styles.accordian_content} ref={contentRef}>
                {content}
            </p>
        </div>
    )
}

export default Accordian;