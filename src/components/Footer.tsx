import React from 'react';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0E293C] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-12">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-20">

                    {/* Logo Column */}
                    <div className="flex-shrink-0 max-w-xs">
                        <img src={logo} alt="PLK Capital" className="h-10 md:h-12 object-contain mb-6" />
                        <div className="text-gray-400 text-sm font-light space-y-3 leading-relaxed">
                            <p>Company name: PLK CAPITAL ADVISORS PRIVATE LIMITED</p>
                            <p>
                                #51, Pushpa Vatika, 1st Floor, C Flat, Vanivilas Road,
                                Basavanagudi, Bangalore- 560004, Karnataka
                            </p>
                            <p>+91-9620050061</p>
                            <p>Plkcapital14@gmail.com</p>
                            <p>CIN - U66190KA2025PTC210648</p>
                        </div>
                    </div>

                    {/* Links Container */}
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">

                        {/* Column 1 */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg mb-4">Important link</h4>
                            <ul className="space-y-4 text-gray-400 font-light text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Client Login</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg mb-4">Community</h4>
                            <ul className="space-y-4 text-gray-400 font-light text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Token</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Discussion</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Voting</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg mb-4">Social Media</h4>
                            <ul className="space-y-4 text-gray-400 font-light text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
                    <div className="mb-4 md:mb-0">
                        Copyright @2026 PLK Capital
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
