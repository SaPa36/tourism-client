import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign, FaUsers, FaCloudSun, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ViewDetails = () => {
    const spot = useLoaderData();
    const { image, spotName, country, location, description, averageCost, season, travelTime, totalVisitors, userName, userEmail } = spot;

    return (
        <div className="min-h-screen bg-[#0B0F19] py-12 px-4">
            <div className="max-w-6xl mx-auto shadow-blue-900 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                
                {/* Hero Image Section */}
                <div className="relative h-[400px] w-full">
                    <img src={image} alt={spotName} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                        <span className="px-4 py-1 bg-cyan-500 text-white text-xs font-bold uppercase rounded-full tracking-widest">{country}</span>
                        <h1 className="text-5xl font-black text-white mt-2">{spotName}</h1>
                        <p className="text-gray-300 flex items-center mt-2 font-medium">
                            <FaMapMarkerAlt className="mr-2 text-fuchsia-500" /> {location}
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left: Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">About this Spot</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">{description}</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  pt-6">
                            <div className="bg-white/5 p-4 rounded-2xl border  border-white/10 text-center">
                                <FaDollarSign className="mx-auto text-cyan-400 mb-2" />
                                <p className="text-xs text-gray-500 uppercase">Cost</p>
                                <p className="text-white font-bold">${averageCost}</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                                <FaCloudSun className="mx-auto text-fuchsia-400 mb-2" />
                                <p className="text-xs text-gray-500 uppercase">Season</p>
                                <p className="text-white font-bold">{season}</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                                <FaClock className="mx-auto text-orange-400 mb-2" />
                                <p className="text-xs text-gray-500 uppercase">Duration</p>
                                <p className="text-white font-bold">{travelTime}</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                                <FaUsers className="mx-auto text-green-400 mb-2" />
                                <p className="text-xs text-gray-500 uppercase">Visitors</p>
                                <p className="text-white font-bold">{totalVisitors}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contributor Card */}
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 h-fit">
                        <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Contributed By</h4>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xl uppercase">
                                {userName?.charAt(0) || 'U'}
                            </div>
                            <div>
                                <p className="text-white font-semibold">{userName || 'Anonymous User'}</p>
                                <p className="text-gray-500 text-sm">{userEmail}</p>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all font-semibold">
                            Contact Guide
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;