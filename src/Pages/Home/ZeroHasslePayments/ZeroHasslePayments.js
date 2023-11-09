import React from 'react';
import styles from './styles.module.css';
import common from '~/Components/Common/images';
import images from './images';

function ZeroHasslePayments() {
    return(
        <section className={styles.container}>
            <div className={styles.text}>
                <h1>
                    Zero hassle payments
                </h1>
                <p>
                    Our payment is as easy as one two three. 
                    We accept most credit cards and debit cards. 
                    You can also link your PayPal account inside the app.
                    Need to pay later? No worries! 
                    You can defer payment for up to a month.
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <div className={styles.images}>
                <img className={styles.images_photo} src={images['payments']}/>
                <img className={styles.images_greyCircle} src={common['circle']}/>
                <img className={styles.images_arrow} src={common['leftDownwardArrow']}/>
            </div>
        </section>
    )
}

export default ZeroHasslePayments;