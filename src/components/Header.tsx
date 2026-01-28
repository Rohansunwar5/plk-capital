import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLoadReveal, useHeaderScroll } from '../hooks/useGsap';
import gsap from 'gsap';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

export const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLightPage = location.pathname === '/about';
    const headerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuLinksRef = useRef<HTMLDivElement>(null);

    useLoadReveal(headerRef, { y: -20, duration: 1, delay: 0.2 });
    useHeaderScroll(headerRef);

    // Toggle menu and animate
    useEffect(() => {
        if (!menuRef.current) return;

        if (isMenuOpen) {
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';

            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                tl.to(menuRef.current, {
                    clipPath: 'circle(150% at 100% 0%)',
                    duration: 0.8,
                    ease: 'power4.inOut'
                });
                tl.fromTo('.mobile-link',
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                    "-=0.4"
                );
            });
            return () => ctx.revert();
        } else {
            document.body.style.overflow = 'unset';
            gsap.to(menuRef.current, {
                clipPath: 'circle(0% at 100% 0%)',
                duration: 0.6,
                ease: 'power4.inOut'
            });
        }
    }, [isMenuOpen]);


    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Styles based on page context
    const navContainerClass = isLightPage
        ? "border border-[#0B1B2F]/20 bg-[#F7F2EF]/80 backdrop-blur-sm"
        : "border border-white/20 bg-plk-navy/50 backdrop-blur-sm";

    const textColor = isLightPage ? "text-[#0B1B2F]" : "text-plk-white";
    const logoSrc = location.pathname === '/' ? logo : logo2;

    return (
        <>
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
                            <Link to="/services" className={`text-sm font-medium ${location.pathname === '/services' ? 'text-plk-lima' : textColor} hover:text-plk-lima`}>Solutions</Link>
                            <Link to="/contact" className={`text-sm font-medium ${textColor} hover:text-plk-lima`}>Lets Chat</Link>
                        </nav>
                    </div>

                    {/* Right: Empty Spacer */}
                    <div className="flex justify-end"></div>
                </div>

                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between items-center bg-transparent">
                    <Link to="/">
                        <img src={logoSrc} alt="PLK Capital" className="h-8 w-auto object-contain" />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`relative z-[60] p-2 flex flex-col gap-1.5 items-end group`}
                    >
                        <span className={`w-8 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-2' : ''} ${textColor}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${textColor}`}></span>
                        <span className={`w-8 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 -translate-y-2' : ''} ${textColor}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-[#0B1B2F] z-[55] flex flex-col items-center justify-center pointer-events-none data-[open=true]:pointer-events-auto"
                style={{ clipPath: 'circle(0% at 100% 0%)' }}
                data-open={isMenuOpen}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-4 p-2 text-white hover:text-plk-lima transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <nav ref={menuLinksRef} className="flex flex-col items-center gap-10 text-center">
                    <Link to="/" className="mobile-link text-4xl font-serif text-white hover:text-plk-lima transition-colors">Home</Link>
                    <Link to="/about" className="mobile-link text-4xl font-serif text-white hover:text-plk-lima transition-colors">About Us</Link>
                    <Link to="/services" className="mobile-link text-4xl font-serif text-white hover:text-plk-lima transition-colors" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
                    <Link to="/contact" className="mobile-link text-4xl font-serif text-white hover:text-plk-lima transition-colors" onClick={() => setIsMenuOpen(false)}>Lets Chat</Link>

                    <div className="mobile-link mt-12 pt-12 border-t border-white/10 w-full max-w-[200px]">
                        <p className="text-plk-grey text-xs tracking-widest uppercase mb-4">Contact</p>
                        <p className="text-white text-sm">hello@plkcapital.com</p>
                    </div>
                </nav>
            </div>
        </>
    );
};
