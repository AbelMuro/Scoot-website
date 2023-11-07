import React from 'react';
import icons from './icons';
import styles from './styles.module.css';

function SignUpMessage() {
    return(
        <section className={styles.signup}>
            <div className={styles.signup_content}>
                <h1 className={styles.signup_title}>
                    Sign up and Scoot off today
                </h1>
                <div className={styles.signup_buttons}>
                    <button>
                        <img className={styles.appStoreIcon} src={icons['appStoreIcon']}/>
                    </button>
                    <button>
                        <img className={styles.appStoreIcon} src={icons['googleStoreIcon']}/>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default SignUpMessage;