import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import { WhatWeDo } from '../components/WhatWeDo';
import { Philosophy } from '../components/Philosophy';
import { HowWeWork } from '../components/HowWeWork';
import aboutUs1 from '../assets/services.avif'; // Using as placeholder for the main hero image

export const Services: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);
    useReveal(heroRef, { threshold: 0.1 });
    useStagger(heroRef, "h1, p, .hero-btn", { y: 30, delay: 0.2 });

    return (
        <main className="flex-grow bg-[#F7F2EF] text-[#0B1B2F] pt-32 pb-20 overflow-hidden">

            {/* Section 1: Custom Hero (Based on design) */}
            <section ref={heroRef} className="max-w-7xl mx-auto px-4 md:px-12 mb-32 opacity-0">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    {/* Left: Text Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-7xl font-serif text-[#0B1B2F] leading-tight">
                                GROW <br />
                                <span className="text-[#19406B]">YOUR COMPANY</span> <br />
                                WITH US
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-[#152E4D]/80 font-medium max-w-md">
                            Growing a business will indirectly lead the success you seek.
                        </p>

                        <div className="pt-4 hero-btn">
                            <a href="#" className="inline-block text-[#152E4D] font-semibold border-b-2 border-[#152E4D] pb-1 hover:text-plk-lima hover:border-plk-lima transition-colors">
                                www.PLKCapitals.com
                            </a>
                        </div>
                    </div>

                    {/* Right: Visual (Circular/Collage Placeholder) */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                            {/* Placeholder for the guy in suit image */}
                            <img src={aboutUs1} alt="Grow with us" className="w-full h-full object-cover scale-110" />

                            {/* Overlay Graph/Graphic Placeholder */}
                            {/* <div className="absolute bottom-1/4 left-1/4 md:left-0 right-1/4 md:right-auto bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg w-48">
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-blue-400/80 rounded"></div>
                                    <div className="h-8 w-8 bg-blue-400/80 rounded mx-auto mt-4"></div>
                                    <div className="h-12 w-12 bg-blue-300/80 rounded mx-auto -mt-2"></div>
                                    <div className="text-center text-white text-xs font-bold mt-2">GROWTH</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: What We Do (Light Variant) */}
            <WhatWeDo variant="light" />

            {/* New Design Section: Wealth Management & Alignment */}
            <section className="bg-[#F7F2EF] py-24 px-4 md:px-12 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B2F] leading-tight">
                        Wealth Management for Individuals <br /> & Families
                    </h2>

                    <p className="text-xl md:text-2xl text-[#0B1B2F] font-light italic leading-relaxed max-w-3xl mx-auto">
                        Helping your money stay aligned with your life — <br className="hidden md:block" />
                        <span className="italic">as priorities change and time moves on.</span>
                    </p>
                </div>
            </section>

            {/* Section 3: Philosophy (Light Variant) */}
            <Philosophy variant="light" />

            {/* Section 4: How We Work (Light Variant) */}
            <HowWeWork variant="light" />

        </main>
    );
};
