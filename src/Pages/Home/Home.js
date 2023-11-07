import React from 'react';
import Header from './Header';
import Instructions from './Instructions';
import AppDetails from './AppDetails'

function Home() {
    return(
        <>
            <Header/>
            <Instructions/>
            <AppDetails 
                title='Easy to use riding telemetry'
                desc={`The Scoot app is available with riding telemetry. 
                    This means it can show you your average speed, 
                    how long you've been using the scooter, your traveling distance, 
                    and many more things all in an easy to use app.`}
                flexDirection='row'
                arrow='leftDownwardArrow' 
                arrowPosition={{top: 'initial', bottom: '0px', left: 'initial', right: '-160px', width: '734px' }} 
                mobileArrowPosition={{top: 'initial', bottom: '0px', left: '-12px', right: 'initial'}}
                image='telemetry'
                />
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