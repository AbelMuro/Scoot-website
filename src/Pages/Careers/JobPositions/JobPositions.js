import React from 'react';
import styles from './styles.module.css';
import data from './Data';

function JobPositions() {
    return(
        <section className={styles.jobs}>
            {
                data.map((job) => {
                    return(
                        <div className={styles.job} key={job.position}>
                            <h1 className={styles.job_position}>
                                {job.position}
                            </h1>
                            <p className={styles.job_location}>
                                {job.location}
                            </p>
                            <button className={styles.job_apply}>
                                Apply
                            </button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default JobPositions;