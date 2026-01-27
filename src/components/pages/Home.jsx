import React from 'react';
import Banner from './Banner';
import TouristSpot from './touristSpot';
import { useLoaderData } from 'react-router-dom';
import TouristSpots from './TouristSpots';


const Home = () => {

    const spots = useLoaderData();

    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <TouristSpots spots={spots}></TouristSpots>
        </div>
    );
};

export default Home;