import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLoadReveal, useHeaderScroll } from '../hooks/useGsap';
import logo from '../assets/logo.png';

export const Header: React.FC = () => {
    const location = useLocation();
    const isLightPage = location.pathname === '/about';
    const headerRef = useRef<HTMLElement>(null);

    useLoadReveal(headerRef, { y: -20, duration: 1, delay: 0.2 });
    useHeaderScroll(headerRef);

    // Styles based on page context
    const navContainerClass = isLightPage
        ? "border border-[#0B1B2F]/20 bg-[#F7F2EF]/80 backdrop-blur-sm"
        : "border border-white/20 bg-plk-navy/50 backdrop-blur-sm";

    const textColor = isLightPage ? "text-[#0B1B2F]" : "text-plk-white";
    const activeColor = "text-plk-green";
    const logoSrc = logo;

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full py-6 px-4 md:px-12 z-50 opacity-0 transition-opacity">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 items-center max-w-7xl mx-auto">
                {/* Left: Logo */}
                <div className="flex justify-start">
                    <Link to="/">
                        <img src={logoSrc} alt="PLK Capital" className="h-10 md:h-12 w-auto object-contain" />
                    </Link>
                </div>

                {/* Center: Nav */}
                <div className="flex justify-center">
                    <nav className={`flex items-center gap-8 rounded-full px-12 py-3 ${navContainerClass} whitespace-nowrap transition-all duration-300`}>
                        <Link to="/about" className={`text-sm font-medium ${location.pathname === '/about' ? 'text-plk-lima' : textColor} hover:text-plk-lima`}>About Us</Link>
                        <a href="#solutions" className={`text-sm font-medium ${textColor} hover:text-plk-lima`}>Solutions</a>
                        <a href="#chat" className={`text-sm font-medium ${textColor} hover:text-plk-lima`}>Lets Chat</a>
                    </nav>
                </div>

                {/* Right: Empty Spacer */}
                <div className="flex justify-end"></div>
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden justify-between items-center">
                <Link to="/">
                    <img src={logoSrc} alt="PLK Capital" className="h-8 w-auto object-contain" />
                </Link>
                <button className={`${textColor} font-serif italic`}>Menu</button>
            </div>
        </header>
    );
};
