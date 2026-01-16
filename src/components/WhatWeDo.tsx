import React, { useRef } from 'react';
import { useReveal, useStagger, useHover } from '../hooks/useGsap';

interface WhatWeDoProps {
    variant?: 'default' | 'light';
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const containerRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);

    // Reveal section
    useReveal(containerRef, { threshold: 0.1 });
    // Stagger cards
    useStagger(gridRef, ".what-we-do-card", { y: 40, stagger: 0.2, delay: 0.2 });

    // Micro-interactions
    useHover(card1Ref);
    useHover(card2Ref);

    // Styles
    const sectionBg = isLight ? 'bg-[#F7F2EF]' : 'bg-plk-navy';
    const textColor = isLight ? 'text-[#152E4D]' : 'text-white';
    const subTextColor = isLight ? 'text-[#152E4D]/80' : 'text-plk-grey';
    const cardBg = isLight ? 'bg-white' : 'bg-[#112240]';
    const cardBorder = isLight ? 'border-[#152E4D]/10' : 'border-white/5';
    const dividerColor = isLight ? 'bg-[#152E4D]/20' : 'bg-[#979797] opacity-50';
    const buttonText = isLight ? 'text-[#152E4D]' : 'text-plk-lima';

    return (
        <section ref={containerRef} className={`${sectionBg} py-20 relative opacity-0`} id="solutions">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className={`text-4xl md:text-5xl font-serif ${textColor} max-w-2xl mx-auto mb-8`}>
                        WHAT WE DO
                    </h2>
                    {/* <a href="#" className={`inline-block text-sm border-b ${isLight ? 'border-[#152E4D] text-[#152E4D]' : 'border-white text-white'} pb-1 hover:opacity-70 transition-opacity`}>
                        Explore Our Solutions
                    </a> */}
                </div>

                {/* Cards Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
                    {/* Card 1: Managing Wealth */}
                    <div ref={card1Ref} className={`what-we-do-card ${cardBg} p-10 md:p-14 rounded-sm border ${cardBorder} flex flex-col h-full transform-gpu cursor-pointer`}>
                        <h3 className={`text-3xl font-serif ${textColor} mb-6`}>Managing Wealth</h3>
                        <p className={`${subTextColor} font-light text-lg mb-8 leading-relaxed`}>
                            For those who have already created wealth, the challenge is to preserve and grow it above inflation—without taking unnecessary risks.
                        </p>
                        <div className="mt-auto">
                            <a href="#" className={`${buttonText} text-lg hover:opacity-80 transition-opacity duration-300 flex items-center gap-2`}>
                                Learn More <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Creating Liquidity */}
                    <div ref={card2Ref} className={`what-we-do-card ${cardBg} p-10 md:p-14 rounded-sm border ${cardBorder} flex flex-col h-full transform-gpu cursor-pointer`}>
                        <h3 className={`text-3xl font-serif ${textColor} mb-6`}>Creating Liquidity</h3>
                        <p className={`${subTextColor} font-light text-lg mb-8 leading-relaxed`}>
                            For business owners and professionals, wealth is often locked in assets. We help structure liquidity to fund lifestyle, expansion, or new opportunities.
                        </p>
                        <div className="mt-auto">
                            <a href="#" className={`${buttonText} text-lg hover:opacity-80 transition-opacity duration-300 flex items-center gap-2`}>
                                Learn More <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>
                </div>



            </div>
            {/* Divider Line */}
            <div className={`h-[1px] w-full ${dividerColor} mt-20`}></div>
        </section>
    );
};
