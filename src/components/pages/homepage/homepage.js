import React from 'react';
import CityPage from '../cittyPage/cityPage';
import Footer from '../footer/footer';
import Join from '../join/join';
import MainPage from '../mainPage/mainPage';
import Opporttunity from '../opporttunity/opporttunity';
import Header from '../../header/header';
import './homepage.css';


function HomePage() {
    return (
        <div>
            <Header/>
            <MainPage/>
            <CityPage/>
            <Opporttunity/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default HomePage;
