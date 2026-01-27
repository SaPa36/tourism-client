import React from 'react';

import bannerImg1 from '../../assets/banner1.jpg';
import bannerImg2 from '../../assets/banner2.png';
import bannerImg3 from '../../assets/banner3.webp';

const Banner = () => {
    return (
        <div className="carousel   lg:h-[550px] w-full">

            {/* Slider 1 */}
            <div id="slide1" className="carousel-item relative w-full h-[400px] lg:h-[550px]">
                {/* Main Background Image */}
                <img
                    src={bannerImg1}
                    className="w-full h-full object-cover"
                    alt="Banner"
                />

                {/* 2. Responsive Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90
                 via-black/50 to-transparent 
        flex items-center justify-center lg:justify-start">

                    {/* Container: 1 col on mobile, 2 cols on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-6 md:px-12 lg:px-24 gap-6 lg:gap-10">

                        {/* LEFT COLUMN: Content (Centered on mobile, left-aligned on desktop) */}
                        <div className="space-y-4 lg:space-y-6 text-center lg:text-left flex flex-col items-center
                         lg:items-start">

                            {/* Responsive Glass Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border
                    border-white/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">
                                <span className="text-cyan-400 font-bold text-[10px] lg:text-xs uppercase
                                 tracking-widest">
                                    🌍 Explore the Unexplored
                                </span>
                            </div>

                            {/* Heading: text-4xl for mobile, text-8xl for desktop */}
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight
                             lg:leading-[0.9]">
                                Journey To <br className="hidden lg:block" /> The <br />
                                <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400
                                 to-emerald-400
                        bg-clip-text text-transparent">
                                    Horizon
                                </span>
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-xs md:max-w-md">
                                Discover curated travel experiences from hidden tropical paradises to majestic
                                mountain peaks.
                            </p>

                            {/* Buttons: Stacked on mobile, row on desktop */}
                            <div className="flex  sm:flex-row gap-3 pt-2 lg:pt-4  ">
                                <button className="bg-gradient-to-r from-orange-400 to-purple-600
                        hover:scale-105 text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl
                         shadow-lg 
                        transition-transform text-sm lg:text-base">
                                    Book Now
                                </button>
                                <button className="bg-white/10 backdrop-blur-lg border border-white/30
                        text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl hover:scale-105
                         transition-all text-sm lg:text-base">
                                    See Video
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Floating Card Visual (Hidden on mobile/tablet) */}
                        <div className="hidden lg:flex justify-center items-center relative">
                            <div className="relative group -rotate-3 hover:rotate-0 transition-all duration-500">
                                <img
                                    src={bannerImg2}
                                    className="w-64 h-80 xl:w-72 xl:h-96 object-cover rounded-[2.5rem] border-8
                                     border-white/10 shadow-2xl"
                                    alt="Featured Destination"
                                />
                                <div className="absolute bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-400 text-xs font-bold uppercase">Starting at</p>
                                    <p className="text-3xl font-black text-gray-800">$299<span className="text-sm
                                     font-normal">/pp</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Navigation Arrows: Repositioned for mobile */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
                    <a href="#slide3" className="btn btn-circle btn-sm lg:btn-md bg-black/40 border-white/20 text-white hover:bg-cyan-500">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm lg:btn-md bg-black/40 border-white/20 text-white hover:bg-cyan-500">❯</a>
                </div>
            </div>

            {/* Slider 2 */}
            <div id="slide2" className="carousel-item relative w-full h-[400px] lg:h-[550px]">
                {/* Main Background Image */}
                <img
                    src={bannerImg2}
                    className="w-full h-full object-cover"
                    alt="Banner"
                />

                {/* 2. Responsive Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90
                 via-black/50 to-transparent 
        flex items-center justify-center lg:justify-start">

                    {/* Container: 1 col on mobile, 2 cols on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-6 md:px-12 lg:px-24 gap-6 lg:gap-10">

                        {/* LEFT COLUMN: Content (Centered on mobile, left-aligned on desktop) */}
                        <div className="space-y-4 lg:space-y-6 text-center lg:text-left flex flex-col items-center
                         lg:items-start">

                            {/* Responsive Glass Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border
                    border-white/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">
                                <span className="text-cyan-400 font-bold text-[10px] lg:text-xs uppercase
                                 tracking-widest">
                                    🌍 Explore the Unexplored
                                </span>
                            </div>

                            {/* Heading: text-4xl for mobile, text-8xl for desktop */}
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight
                             lg:leading-[0.9]">
                                Journey To <br className="hidden lg:block" /> The <br />
                                <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400
                                 to-emerald-400
                        bg-clip-text text-transparent">
                                    Horizon
                                </span>
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-xs md:max-w-md">
                                Discover curated travel experiences from hidden tropical paradises to majestic
                                mountain peaks.
                            </p>

                            {/* Buttons: Stacked on mobile, row on desktop */}
                            <div className="flex  sm:flex-row gap-3 pt-2 lg:pt-4  ">
                                <button className="bg-gradient-to-r from-orange-400 to-purple-600
                        hover:scale-105 text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl
                         shadow-lg 
                        transition-transform text-sm lg:text-base">
                                    Book Now
                                </button>
                                <button className="bg-white/10 backdrop-blur-lg border border-white/30
                        text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl hover:scale-105
                         transition-all text-sm lg:text-base">
                                    See Video
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Floating Card Visual (Hidden on mobile/tablet) */}
                        <div className="hidden lg:flex justify-center items-center relative">
                            <div className="relative group -rotate-3 hover:rotate-0 transition-all duration-500">
                                <img
                                    src={bannerImg2}
                                    className="w-64 h-80 xl:w-72 xl:h-96 object-cover rounded-[2.5rem] border-8
                                     border-white/10 shadow-2xl"
                                    alt="Featured Destination"
                                />
                                <div className="absolute bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-400 text-xs font-bold uppercase">Starting at</p>
                                    <p className="text-3xl font-black text-gray-800">$299<span className="text-sm
                                     font-normal">/pp</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Navigation Arrows: Repositioned for mobile */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
                    <a href="#slide3" className="btn btn-circle btn-sm lg:btn-md bg-black/40 border-white/20 text-white hover:bg-cyan-500">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm lg:btn-md bg-black/40 border-white/20 text-white hover:bg-cyan-500">❯</a>
                </div>
            </div>


            {/* Slider 3 */}
            <div id="slide3" className="carousel-item relative w-full h-[400px] lg:h-[550px]">
                {/* Main Background Image */}
                <img
                    src={bannerImg3}
                    className="w-full h-full object-cover"
                    alt="Banner"
                />

                {/* 2. Responsive Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90
                 via-black/50 to-transparent 
        flex items-center justify-center lg:justify-start">

                    {/* Container: 1 col on mobile, 2 cols on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-6 md:px-12 lg:px-24 gap-6 lg:gap-10">

                        {/* LEFT COLUMN: Content (Centered on mobile, left-aligned on desktop) */}
                        <div className="space-y-4 lg:space-y-6 text-center lg:text-left flex flex-col items-center
                         lg:items-start">

                            {/* Responsive Glass Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border
                    border-white/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">
                                <span className="text-cyan-400 font-bold text-[10px] lg:text-xs uppercase
                                 tracking-widest">
                                    🌍 Explore the Unexplored
                                </span>
                            </div>

                            {/* Heading: text-4xl for mobile, text-8xl for desktop */}
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight
                             lg:leading-[0.9]">
                                Journey To <br className="hidden lg:block" /> The <br />
                                <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400
                                 to-emerald-400
                        bg-clip-text text-transparent">
                                    Horizon
                                </span>
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-xs md:max-w-md">
                                Discover curated travel experiences from hidden tropical paradises to majestic
                                mountain peaks.
                            </p>

                            {/* Buttons: Stacked on mobile, row on desktop */}
                            <div className="flex  sm:flex-row gap-3 pt-2 lg:pt-4  ">
                                <button className="bg-gradient-to-r from-orange-400 to-purple-600
                        hover:scale-105 text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl
                         shadow-lg 
                        transition-transform text-sm lg:text-base">
                                    Book Now
                                </button>
                                <button className="bg-white/10 backdrop-blur-lg border border-white/30
                        text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded-xl lg:rounded-2xl hover:scale-105
                         transition-all text-sm lg:text-base">
                                    See Video
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Floating Card Visual (Hidden on mobile/tablet) */}
                        <div className="hidden lg:flex justify-center items-center relative">
                            <div className="relative group -rotate-3 hover:rotate-0 transition-all duration-500">
                                <img
                                    src={bannerImg2}
                                    className="w-64 h-80 xl:w-72 xl:h-96 object-cover rounded-[2.5rem] border-8
                                     border-white/10 shadow-2xl"
                                    alt="Featured Destination"
                                />
                                <div className="absolute bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl">
                                    <p className="text-gray-400 text-xs font-bold uppercase">Starting at</p>
                                    <p className="text-3xl font-black text-gray-800">$299<span className="text-sm
                                     font-normal">/pp</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Navigation Arrows: Repositioned for mobile */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
                    <a href="#slide3" className="btn btn-circle btn-sm lg:btn-md bg-black/40 border-white/20 text-white hover:bg-cyan-500">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm lg:btn-md bg-black/40 border-white/20 text-white hover:bg-cyan-500">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;