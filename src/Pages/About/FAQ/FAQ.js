import React from 'react';
import Accordian from './Accordian';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {itemVariants} from './variants';

function FAQ() {

    const itemProps = {
        initial: 'hidden',
        whileInView: 'show',
        viewport: {once: true, amount: 0.8},
        variants: itemVariants
    }

    return(
        <section className={styles.faq}>
            <motion.h1 className={styles.faq_title} {...itemProps}>
                FAQs
            </motion.h1>
            <motion.h2 className={styles.faq_desc} {...itemProps}>
                How it works
            </motion.h2>
            <div className={styles.faq_accordians}>
                <Accordian 
                    title='How do I download the app?' 
                    content={`To download the Scoot app, 
                        you can search “Scoot” in both 
                        the App and Google Play stores. 
                        An even simpler way to do it 
                        would be to click the relevant 
                        link at the bottom of this page 
                        and you’ll be re-directed to 
                        the correct page.`}
                    {...itemProps}/>
                <Accordian 
                    title='Can I find a nearby Scoots?'
                    content={`Definitely! Simply open up 
                        the app and allow us to find your 
                        location while using it. 
                        We'll show you all of the 
                        closest Scoots and some 
                        extra useful information`}
                    {...itemProps}/>
                <Accordian
                    title='Do I need a license to ride?'
                    content={`Yup! We provide information 
                        inside the app regarding local 
                        laws and the license you need to 
                        be able to ride our Scoots. Safe 
                        driving Should I wear a helmet? 
                        Yes, please do! All cities have 
                        different laws. But we strongly 
                        strongly strongly recommend always 
                        wearing a helmet regardless of the 
                        local laws. We like you and we want 
                        you to be as safe as possible while 
                        Scooting.`}
                    {...itemProps}/>
            </div>
            <motion.h2 className={styles.faq_desc} {...itemProps}>
                Safe Driving
            </motion.h2>
            <div className={styles.faq_accordians}>
                <Accordian
                    title='Should I wear a helmet?'
                    content={`Yes, please do! All cities 
                        have different laws. But we strongly 
                        strongly strongly recommend always 
                        wearing a helmet regardless of the 
                        local laws. We like you and we want 
                        you to be as safe as possible while 
                        Scooting.`}
                    {...itemProps}/>
                <Accordian
                    title='How about the rules & regulations?'
                    content={`Now is not the time to be a rule breaker. 
                        Be sure you're complying with all local laws and regulations. 
                        Also, just be a good human being. Be sure not to 
                        park your Scoot where it can block access to buildings 
                        or get in people's way.`}
                    {...itemProps}/>
                <Accordian
                    title='What if I damage my Scoot?'
                    content={`Be sure to read our terms 
                        and conditions carefully. Not 
                        the most fun job we know but 
                        we make it as clear as possible. 
                        There's an option to add insurance 
                        for each trip, or you can sign up 
                        for annual insurance if you're a 
                        regular Scooter. Sign up and Scoot 
                        off today About Location Careers`}
                    {...itemProps}/>
            </div>
            
        </section>
    )
}

export default FAQ;