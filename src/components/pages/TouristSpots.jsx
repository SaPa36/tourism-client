<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TouristSpot from './touristSpot';


const TouristSpots = () => {
    const loadedTouristSpots = useLoaderData();
    // Provide an empty array fallback to prevent .map() errors
    const [touristSpots, setTouristSpots] = useState(loadedTouristSpots || []);

    return (
        <div className="min-h-screen bg-[#0B0F19]  px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
                        Explore <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Tourist Spots</span>
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

                </div>
            </div>

            {/* Container to center the button */}
            <div className="flex justify-center mt-12 w-full">
                <Link to="/all-tourist-spots">
                    <button className='bg-gradient-to-r from-orange-400 to-purple-600
                        hover:scale-105 text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl
                         shadow-lg 
                        transition-transform text-sm lg:text-base w-max'>
                        View All Spots
                    </button>
                </Link>
            </div>
        </div>
    );
};

=======
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TouristSpot from './touristSpot';


const TouristSpots = () => {
    const loadedTouristSpots = useLoaderData();
    // Provide an empty array fallback to prevent .map() errors
    const [touristSpots, setTouristSpots] = useState(loadedTouristSpots || []);

    return (
        <div className="min-h-screen bg-[#0B0F19]  px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
                        Explore <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Tourist Spots</span>
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

                </div>
            </div>

            {/* Container to center the button */}
            <div className="flex justify-center mt-12 w-full">
                <Link to="/all-tourist-spots">
                    <button className='bg-gradient-to-r from-orange-400 to-purple-600
                        hover:scale-105 text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl
                         shadow-lg 
                        transition-transform text-sm lg:text-base w-max'>
                        View All Spots
                    </button>
                </Link>
            </div>
        </div>
    );
};

>>>>>>> 25d506a525cdfdc85479c7f7b3345d9b8274bac4
export default TouristSpots;