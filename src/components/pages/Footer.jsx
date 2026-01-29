import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-[#0B0F19] mt-20 pt-24 pb-12 overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h2 className="btn btn-ghost text-4xl font-bold bg-gradient-to-r from-cyan-400
                         to-fuchsia-500 bg-clip-text text-transparent ">TerraQuest
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Discover the soul of Southeast Asia. From hidden waterfalls to ancient temples, we guide you to the world's most breathtaking destinations.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8">Explore</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'All Tourist Spots', path: '/all-tourist-spots' },
                                { name: 'Add Tourist Spot', path: '/add-spot' },
                                { name: 'My List', path: '/my-list' },
                                { name: 'Home', path: '/' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                                    >
                                        {/* Animated underline/dash on hover */}
                                        <span className="w-0 group-hover:w-4 h-[2px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>Email: <span className="text-white">nursapa@gmail.com</span></li>
                            <li>Phone: <span className="text-white">+880 123 456 789</span></li>
                            <li>Location: <span className="text-white">Dhaka, Bangladesh</span></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8">Newsletter</h4>
                        <p className="text-gray-400 mb-6 text-sm">Subscribe to get travel tips and exclusive hidden gem alerts.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-cyan-400
                         to-fuchsia-500 text-white px-4 rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2026 AdventureHub. Built with ❤️ for Travelers.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;