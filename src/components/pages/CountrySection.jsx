import React from 'react';
import { useNavigate } from 'react-router-dom';

// 1. DEFINE THE DATA HERE (Outside the component)
const countries = [
    {
        id: 1,
        name: "Bangladesh",
        image: "https://i.ibb.co.com/21YWY2R0/BD.webp",
        description: "The land of the Royal Bengal Tiger and the world's longest sea beach.",
        highlights: ["Sundarbans", "Cox's Bazar", "Sylhet"],
        costRange: "$",
    },
    {
        id: 2,
        name: "Thailand",
        image: "https://i.ibb.co.com/kgZ9Jmvj/Thailand.jpg",
        description: "A tropical wonderland known for opulent royal palaces and ornate temples.",
        highlights: ["Bangkok", "Phi Phi Islands", "Chiang Mai"],
        costRange: "$$",
    },
    {
        id: 3,
        name: "Vietnam",
        image: "https://i.ibb.co.com/1Ymb6Gxd/Vietnam.avif",
        description: "Explore the limestone pillars of Ha Long Bay and charming ancient streets.",
        highlights: ["Ha Long Bay", "Hoi An", "Hanoi"],
        costRange: "$",
    },
    {
        id: 4,
        name: "Indonesia",
        image: "https://i.ibb.co.com/DPpHLkSC/Indonesia.webp",
        description: "An emerald archipelago offering volcanic landscapes and spiritual serenity.",
        highlights: ["Bali", "Java", "Komodo Island"],
        costRange: "$$",
    },
    {
        id: 5,
        name: "Malaysia",
        image: "https://i.ibb.co.com/N68gYqhq/Malayshia.jpg",
        description: "A unique melting pot of cultures, futuristic towers, and ancient rainforests.",
        highlights: ["Kuala Lumpur", "Langkawi", "Batu Caves"],
        costRange: "$$",
    },
    {
        id: 6,
        name: "Cambodia",
        image: "https://i.ibb.co.com/1YvG90cZ/Combodia.webp",
        description: "A kingdom of wonder defined by the majestic spires of Angkor Wat.",
        highlights: ["Angkor Wat", "Phnom Penh", "Siem Reap"],
        costRange: "$",
    }
];

const CountrySection = () => {
    const navigate = useNavigate();

    return (
        <section className=" bg-[#0B0F19]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white ">
                        Explore by <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Country</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                    {/* Now 'countries' is defined and this map will work */}
                    {countries.map((country) => (
                        <div
                            key={country.id}
                            // Inside CountrySection.jsx
                            onClick={() => navigate(`/all-tourist-spots?country=${country.name}`)}
                    className="group shadow-2xl shadow-blue-900  relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50"
                        >
                    {/* Image Section */}
                    <div className="h-96 w-full  overflow-hidden">
                        <img src={country.image} alt={country.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="absolute bottom-0 p-8 w-full">
                        <h3 className="text-3xl font-bold text-white mb-2">{country.name}</h3>

                        {/* Short Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            {country.description}
                        </p>

                        {/* Highlights Section - NEW */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {country.highlights.map((highlight, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full backdrop-blur-md"
                                >
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
        </section >
    );
};

export default CountrySection;