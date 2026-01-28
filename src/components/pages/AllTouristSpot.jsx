import React from 'react';
import { Link } from 'react-router-dom';

const AllTouristSpot = ({ spot, touristSpots, setTouristSpots }) => {
    if (!spot) return null;


    const { spotName, country, averageCost, image, _id, travelTime, season } = spot;

    return (
        <div>
            <div className="bg-white/5 shadow-blue-900 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                    <img
                        src={image || "https://via.placeholder.com/400"}
                        alt={spotName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md text-cyan-400 px-4 py-1 rounded-full border border-cyan-400/30 font-bold">
                        ${averageCost}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{spotName}</h3>
                    <p className="text-gray-400 text-sm  flex items-center gap-2">
                        📍 {country}
                    </p>

                    <div className="flex justify-between items-center py-4 border-t border-white/10">
                        <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">{season}</span>
                        <span className="text-xs text-gray-500">🕒 {travelTime}</span>
                    </div>

                    <Link to={`/view-details/${_id}`}>
                        <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95">
                            View Details
                        </button>
                    </Link>


                </div>


            </div>

        </div>
    );
};

export default AllTouristSpot;