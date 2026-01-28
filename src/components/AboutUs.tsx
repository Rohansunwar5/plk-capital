import React, { useRef } from 'react';
import { useReveal, useStagger, useHover } from '../hooks/useGsap';
import aboutUs1 from '../assets/aboutUs1.png';
import aboutUs2 from '../assets/aboutUs2.png';
import emoji from '../assets/emoji.png';

export const AboutUs: React.FC = () => {
    const topSectionRef = useRef<HTMLDivElement>(null);
    const bottomSectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const btn1Ref = useRef<HTMLButtonElement>(null);
    const btn2Ref = useRef<HTMLButtonElement>(null);

    // Reveal top section content
    useStagger(topSectionRef, "h2, p, button", { y: 20, delay: 0.1 });

    // Reveal bottom grid content
    useReveal(bottomSectionRef, { threshold: 0.2 });
    useStagger(contentRef, "span, h3, p, button", { y: 30, stagger: 0.15, delay: 0.2 });

    // Micro-interactions
    useHover(btn1Ref, { scale: 1.05 });
    useHover(btn2Ref, { scale: 1.05 });

    return (
        <section className="py-24">
            {/* Top Section */}
            <div ref={topSectionRef} className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                    Financial peace of mind.
                </h2>
                <p className="text-xl md:text-2xl text-plk-grey font-light mb-12">
                    Something worth building over time.
                </p>
                <div className="flex justify-center">
                    <button ref={btn1Ref} className="bg-[#112240] text-plk-lima border border-[#1E3A5F] px-8 py-3 rounded-md text-lg hover:bg-[#1E3A5F] hover:text-white transition-all duration-300">
                        Schedule a Conversation
                    </button>
                </div>
            </div>

            {/* Bottom Content Container */}
            <div ref={bottomSectionRef} className="max-w-7xl mx-auto px-4 md:px-12 opacity-0">
                <div className="bg-[#0D1625] rounded-lg p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Staggered Grid Layout */}
                    <div className="flex-1 w-full max-w-md lg:max-w-none">
                        <div className="grid grid-cols-2 gap-4 auto-rows-min">

                            {/* Col 1: Large Portrait (Spans 2 rows visually roughly) */}
                            <div className="relative row-span-2">
                                <img src={aboutUs1} alt="Profile" className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" />
                                {/* Small ratings card overlay/below */}
                                <div className="absolute -bottom-3 md:-bottom-12 -left-2 -right-2 md:left-2 md:right-2 z-10">
                                    <img src={emoji} alt="Best ratings" className="w-full h-auto object-contain drop-shadow-xl" />
                                </div>
                            </div>

                            {/* Col 2: Top Card + Bottom Image */}
                            <div className="space-y-4 pt-8 md:pt-12">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="text-2xl font-bold text-plk-navy mb-1">30,000+</div>
                                    <div className="text-xs text-gray-500">Clients in July 2021 with 5 star ratings and happy clients.</div>
                                    <div className="h-1 w-full bg-plk-red/20 mt-2 rounded">
                                        <div className="h-full w-2/3 bg-plk-green rounded"></div>
                                    </div>

                                    {/* Mini avatars placeholder */}
                                    <div className="flex -space-x-2 mt-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"></div>
                                        ))}
                                    </div>
                                </div>
                                <img src={aboutUs2} alt="Tech" className="w-full aspect-square object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div ref={contentRef} className="flex-1 space-y-8 mt-12 lg:mt-0">
                        <div>
                            <span className="tracking-[0.2em] text-sm font-semibold uppercase block mb-4" style={{ color: '#50D28A' }}>A BIT</span>
                            <h3 className="text-4xl md:text-5xl font-serif text-white">ABOUT US</h3>
                        </div>

                        <p className="text-plk-grey font-light text-lg leading-relaxed">
                            Clients trust us with decisions that affect their families, their businesses, and their future.
                            Our responsibility is to act in their best interest—clearly, independently, and without conflict.
                        </p>

                        <button ref={btn2Ref} className="bg-[#979797] text-white px-8 py-3 rounded-sm text-sm tracking-wide font-medium hover:bg-white hover:text-plk-navy transition-all duration-300 transform hover:scale-105">
                            EXPLORE MORE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};
