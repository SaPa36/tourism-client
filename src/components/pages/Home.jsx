import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import TouristSpots from './TouristSpots';
import CountrySection from './CountrySection';


const Home = () => {

   
    const spots = useLoaderData();

    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <TouristSpots spots={spots}></TouristSpots>
            <CountrySection></CountrySection>
        </div>
    );
};

export default Home;