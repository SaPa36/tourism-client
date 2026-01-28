import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTouristSpot from './AllTouristSpot';

const AllTouristSpots = () => {

    const loadedTouristSpots = useLoaderData();

    const [touristSpots, setTouristSpots] = useState(loadedTouristSpots || []);

    // State to manage the list of spots (allows us to re-order them)
    const [displaySpots, setDisplaySpots] = useState(loadedTouristSpots);

    // Sorting Logic
    const handleSort = (sortType) => {
        const sorted = [...displaySpots]; // Create a copy to avoid mutating state directly
        
        if (sortType === 'asc') {
            // Low to High
            sorted.sort((a, b) => parseFloat(a.averageCost) - parseFloat(b.averageCost));
        } else if (sortType === 'desc') {
            // High to Low
            sorted.sort((a, b) => parseFloat(b.averageCost) - parseFloat(a.averageCost));
        }
        
        setDisplaySpots(sorted);
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header & Sort Dropdown Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl lg:text-5xl font-black text-white">
                            All <span className="text-cyan-400">Tourist</span> <span className="text-fuchsia-500">Spots</span>
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Explore all hidden gems</p>
                    </div>

                    {/* Sorting Dropdown Menu */}
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-white/5 border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 min-w-52 rounded-xl">
                            Sort by Average Cost 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-[#161B26] border border-white/10 rounded-xl w-52 mt-2">
                            <li>
                                <button onClick={() => handleSort('asc')} className="text-gray-300 hover:text-cyan-400 py-3">Low to High Cost</button>
                            </li>
                            <li>
                                <button onClick={() => handleSort('desc')} className="text-gray-300 hover:text-fuchsia-400 py-3">High to Low Cost</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Grid showing ALL cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        displaySpots.map(spot => (
                            <AllTouristSpot 
                                key={spot?._id} 
                                spot={spot} 
                            />
                        ))
                    }
                </div>
            
        
                
            </div>

            
        </div>
    );
};

export default AllTouristSpots;