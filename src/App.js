import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;