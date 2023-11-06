import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import AppDetails from './AppDetails'
import styles from './styles.module.css';

function Home() {
    return(
        <>
            <Header/>
            <Instructions/>
            <AppDetails 
                arrow='leftDownwardArrow' 
                arrowPosition={{top: 'initial', bottom: '0px', left: 'initial', right: '0px' }} 
                circlePosition={{right: '-330px'}}
                image='telemetry'
                />
        </>
    )
}

export default Home;