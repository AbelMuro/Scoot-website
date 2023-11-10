import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Locations from './Pages/Locations'
import SignUpMessage from './Components/SignUpMessage';
import FooterBar from './Components/FooterBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/careers' element={<Careers/>}/>
                <Route path='/location' element={<Locations/>}/>
            </Routes>
            <SignUpMessage/>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;