import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import AppDetails from './AppDetails'
import RidingTelemetry from './RidingTelemetry';

function Home() {
    return(
        <>
            <Header/>
            <Instructions/>
            <RidingTelemetry/>
            <AppDetails 
                title='Coming to a city near you'
                desc={`Scoot is available in 4 major cities so far. 
                    We’re expanding rapidly, so be sure to let us 
                    know if you want to see us in your hometown. 
                    We’re aiming to let our scooters loose on 23 
                    cities over the coming year.`}
                flexDirection='row-reverse'
                arrow='rightArrow' 
                arrowPosition={{top: '0px', bottom: 'initial', left: '-310px', right: 'initial', width: '500px'}} 
                mobileArrowPosition={{top: '0px', bottom: 'initial', left: 'initial', right: '81px'}}
                image='nearYou'
                />
            <AppDetails 
                title={'Zero hassle payments'}
                desc={`Our payment is as easy as one two three. 
                    We accept most credit cards and debit cards. 
                    You can also link your PayPal account inside the app. 
                    Need to pay later? No worries! 
                    You can defer payment for up to a month.`}
                flexDirection='row'
                arrow='leftDownwardArrow' 
                arrowPosition={{top: '85px', bottom: 'initial', left: 'initial', right: '-350px', width: '734px' }} 
                mobileArrowPosition={{top: '0px', bottom: 'initial', left: '100px', right: 'initial'}}
                image='payments'
                />
        </>
    )
}

export default Home;