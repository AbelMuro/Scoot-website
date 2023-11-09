import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import RidingTelemetry from './RidingTelemetry';
import CityNearYou from './CityNearYou';
import ZeroHasslePayments from './ZeroHasslePayments';

function Home() {
    return(
        <>
            <Header/>
            <Instructions/>
            <RidingTelemetry/>
            <CityNearYou/>
            <ZeroHasslePayments/>
        </>
    )
}

export default Home;