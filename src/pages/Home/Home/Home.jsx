import React from 'react';
import Banner from './Banner/Banner';
import Works from '../Works/Works';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import LiveParcel from '../LiveParcel/LiveParcel';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch("/reviews.json").then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
            <LiveParcel></LiveParcel>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;