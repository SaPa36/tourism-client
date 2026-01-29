<<<<<<< HEAD
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Nur Sapa",
            role: "Solo Traveler",
            image: "https://i.ibb.co.com/MyhrdcgQ/photo-2026-01-25-10-41-21.png",
            text: "The details on this site helped me navigate the hidden trails of Sapa, Vietnam. Unforgettable experience!",
            rating: 5
        },
        {
            id: 2,
            name: "Meherun Nesa Mishu",
            role: "Vlogger",
            image: "https://i.ibb.co.com/dw5n4sW1/mishu.jpg",
            text: "Finally a platform that accurately describes the travel time and costs for spots in Bangladesh. Truly helpful!",
            rating: 5
        },
        {
            id: 3,
            name: "Md. Habib",
            role: "Backpacker",
            image: "https://i.ibb.co.com/7drm7FGw/Habib.jpg",
            text: "I found the best budget-friendly spots in Bali thanks to the sorting feature here. Highly recommend!",
            rating: 4
        }
    ];

    return (
        <section className=" bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Traveler <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Stories</span></h2>
                    <p className="text-gray-400">Hear from our community of world explorers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev) => (
                        <div key={rev.id} className="bg-white/5 border shadow-2xl shadow-blue-900 border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 relative group">
                            <FaQuoteLeft className="text-cyan-500/20 text-5xl absolute top-6 right-8" />
                            <div className="flex gap-1 mb-4 ">
                                {[...Array(rev.rating)].map((_, i) => <FaStar key={i} className="text-orange-400 text-sm" />)}
                            </div>
                            <p className="text-gray-300 italic mb-6">"{rev.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={rev.image} className="w-12 h-12 rounded-full border-2 border-cyan-500" alt="" />
                                <div>
                                    <h4 className="text-white font-bold">{rev.name}</h4>
                                    <p className="text-gray-500 text-xs">{rev.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

=======
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Nur Sapa",
            role: "Solo Traveler",
            image: "https://i.ibb.co.com/MyhrdcgQ/photo-2026-01-25-10-41-21.png",
            text: "The details on this site helped me navigate the hidden trails of Sapa, Vietnam. Unforgettable experience!",
            rating: 5
        },
        {
            id: 2,
            name: "Meherun Nesa Mishu",
            role: "Vlogger",
            image: "https://i.ibb.co.com/dw5n4sW1/mishu.jpg",
            text: "Finally a platform that accurately describes the travel time and costs for spots in Bangladesh. Truly helpful!",
            rating: 5
        },
        {
            id: 3,
            name: "Md. Habib",
            role: "Backpacker",
            image: "https://i.ibb.co.com/7drm7FGw/Habib.jpg",
            text: "I found the best budget-friendly spots in Bali thanks to the sorting feature here. Highly recommend!",
            rating: 4
        }
    ];

    return (
        <section className=" bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Traveler <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Stories</span></h2>
                    <p className="text-gray-400">Hear from our community of world explorers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev) => (
                        <div key={rev.id} className="bg-white/5 border shadow-2xl shadow-blue-900 border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 relative group">
                            <FaQuoteLeft className="text-cyan-500/20 text-5xl absolute top-6 right-8" />
                            <div className="flex gap-1 mb-4 ">
                                {[...Array(rev.rating)].map((_, i) => <FaStar key={i} className="text-orange-400 text-sm" />)}
                            </div>
                            <p className="text-gray-300 italic mb-6">"{rev.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={rev.image} className="w-12 h-12 rounded-full border-2 border-cyan-500" alt="" />
                                <div>
                                    <h4 className="text-white font-bold">{rev.name}</h4>
                                    <p className="text-gray-500 text-xs">{rev.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

>>>>>>> 25d506a525cdfdc85479c7f7b3345d9b8274bac4
export default Testimonials;