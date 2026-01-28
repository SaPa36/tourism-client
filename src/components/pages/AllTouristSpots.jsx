import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import AllTouristSpot from './AllTouristSpot';

const AllTouristSpots = () => {
    const loadedTouristSpots = useLoaderData();
    const [searchParams] = useSearchParams();
    
    // Using one state to handle what is currently being shown
    const [displaySpots, setDisplaySpots] = useState(loadedTouristSpots || []);

    const countryQuery = searchParams.get('country');

    // Filter Logic: Runs when countryQuery or data changes
    useEffect(() => {
        if (countryQuery) {
            const filtered = loadedTouristSpots.filter(spot => 
                spot.country.toLowerCase() === countryQuery.toLowerCase()
            );
            setDisplaySpots(filtered);
        } else {
            setDisplaySpots(loadedTouristSpots);
        }
    }, [countryQuery, loadedTouristSpots]);

    // Sorting Logic
    const handleSort = (sortType) => {
        const sorted = [...displaySpots];
        if (sortType === 'asc') {
            sorted.sort((a, b) => parseFloat(a.averageCost) - parseFloat(b.averageCost));
        } else if (sortType === 'desc') {
            sorted.sort((a, b) => parseFloat(b.averageCost) - parseFloat(a.averageCost));
        }
        setDisplaySpots(sorted);
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* --- FIX 1: Combined Header Row --- */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-white/5 pb-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl lg:text-5xl font-black text-white">
                            {/* Ternary logic to switch title based on URL parameter */}
                            {countryQuery ? (
                                <>Tourism Places in <span className="text-cyan-400">{countryQuery}</span></>
                            ) : (
                                <>All <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Tourist Spots</span></>
                            )}
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">
                            {countryQuery ? `Showing local gems in ${countryQuery}` : "Explore all hidden gems around the world"}
                        </p>
                    </div>

                    {/* Sorting Dropdown */}
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-white/5 border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 min-w-52 rounded-xl">
                            Sort by Average Cost 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-[#161B26] border border-white/10 rounded-xl w-52 mt-2">
                            <li><button onClick={() => handleSort('asc')} className="text-gray-300 hover:text-cyan-400 py-3">Low to High Cost</button></li>
                            <li><button onClick={() => handleSort('desc')} className="text-gray-300 hover:text-fuchsia-400 py-3">High to Low Cost</button></li>
                        </ul>
                    </div>
                </div>

                {/* --- FIX 2: Single Dynamic Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displaySpots.map(spot => (
                        <AllTouristSpot key={spot._id} spot={spot} />
                    ))}
                </div>

                {/* Empty State / No Results */}
                {displaySpots.length === 0 && (
                    <div className="text-center mt-20">
                        <p className="text-gray-400 text-xl">No spots found for this selection.</p>
                        {countryQuery && (
                           <button onClick={() => window.history.back()} className="mt-4 text-cyan-400 hover:underline">Go Back</button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTouristSpots;