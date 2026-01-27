import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './touristSpot';


const TouristSpots = () => {
    const loadedTouristSpots = useLoaderData();
    // Provide an empty array fallback to prevent .map() errors
    const [touristSpots, setTouristSpots] = useState(loadedTouristSpots || []);

    return (
        <div className="min-h-screen bg-[#0B0F19] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
                        Explore <span className="text-cyan-400">Tourist</span> <span className="text-fuchsia-500">Spots</span>
                    </h2>
                    <p className="text-gray-400">Discover breathtaking destinations curated just for you.</p>
                </div>

                {/* Grid Layout for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        touristSpots.slice(0, 6).map(spot => 
                            <TouristSpot
                                key={spot?._id || Math.random()} 
                                spot={spot}
                                touristSpots={touristSpots}
                                setTouristSpots={setTouristSpots}
                            ></TouristSpot>
                        )
                    }
                    <button className='mt-4 px-2  bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95'>View All Spots</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;