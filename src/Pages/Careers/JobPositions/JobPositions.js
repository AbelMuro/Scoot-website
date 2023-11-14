import React from 'react';
import styles from './styles.module.css';
import data from './Data';
import {motion} from 'framer-motion';
import {boxVariants} from './variants';

function JobPositions() {
    return(
        <section className={styles.jobs}>
            {
                data.map((job) => {
                    return(
                        <motion.div 
                            className={styles.job} 
                            key={job.position}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: true}}
                            transition={{delay: 0.4}}
                            variants={boxVariants}
                            >
                            <motion.h1 className={styles.job_position}>
                                {job.position}
                            </motion.h1>
                            <motion.p className={styles.job_location}>
                                {job.location}
                            </motion.p>
                            <motion.button className={styles.job_apply}>
                                Apply
                            </motion.button>
                        </motion.div>
                    )
                })
            }
        </section>
    )
}

export default JobPositions;