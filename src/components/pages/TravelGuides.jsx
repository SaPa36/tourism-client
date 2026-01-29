
import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';

const TravelGuides = () => {
    const guides = [
        {
            id: 1,
            title: "10 Things to Pack for South East Asia",
            category: "Essential Tips",
            date: "Jan 24, 2026",
            readTime: "5 min",
            img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "The Ultimate Visa Guide for Indonesia 2026",
            category: "Visa Secrets",
            date: "Jan 12, 2026",
            readTime: "8 min",
            img: "https://i.ibb.co.com/k69df85S/indo.jpg"
        },
        {
            id: 3,
            title: "Exploring the Street Food of Old Dhaka",
            category: "Food & Culture",
            date: "Jan 05, 2026",
            readTime: "6 min",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className=" bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header with a cleaner look */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="text-center md:text-left">
                        <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs">Our Blog</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
                            Travel <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Insights</span>
                        </h2>
                    </div>
                    <button className="mt-6 md:mt-0 group flex items-center gap-2 text-white font-semibold bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all">
                        Explore All Articles <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Grid with improved spacing and card hover effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {guides.map((guide) => (
                        <div key={guide.id} className="group relative shadow-2xl shadow-blue-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                            
                            {/* Image with Dark Overlay */}
                            <div className="h-64 w-full overflow-hidden relative">
                                <img src={guide.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={guide.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161B26] to-transparent"></div>
                                <span className="absolute top-6 left-6 bg-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    {guide.category}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                                    <span className="flex items-center gap-1"><FaCalendarAlt /> {guide.date}</span>
                                    <span className="flex items-center gap-1"><FaClock /> {guide.readTime}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors leading-tight">
                                    {guide.title}
                                </h3>
                                <button className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                                    Read Article <FaArrowRight className="text-fuchsia-500" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default TravelGuides;