import React from 'react';
import Banner from './Banner/Banner';
import Works from '../Works/Works';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import LiveParcel from '../LiveParcel/LiveParcel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
            <LiveParcel></LiveParcel>
        </div>
    );
};

export default Home;