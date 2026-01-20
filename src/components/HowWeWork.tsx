import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import menuIcon from '../assets/icons/menu.png';
import chartIcon from '../assets/icons/chart.png';
import walletCheckIcon from '../assets/icons/wallet-check.png';
import judgeIcon from '../assets/icons/judge.png';

interface HowWeWorkProps {
    variant?: 'default' | 'light';
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    // Reveal animations
    useReveal(containerRef, { threshold: 0.1 });
    useStagger(headerRef, "h2, p", { y: 20, delay: 0.1 });
    useStagger(gridRef, ".p-8, .p-16", { y: 30, stagger: 0.1, delay: 0.2 });
    useReveal(quoteRef, { y: 20, delay: 0.5 });

    // Styles
    const sectionBg = isLight ? 'bg-[#F7F2EF]' : 'bg-plk-navy';
    const textColor = isLight ? 'text-[#152E4D]' : 'text-white';
    const subTextColor = isLight ? 'text-[#152E4D]/80' : 'text-plk-grey';
    const borderColor = isLight ? 'border-black' : 'border-white/10';

    const separatorColor = isLight ? 'via-black' : 'via-white';
    const imageClass = isLight ? 'w-12 h-12 filter invert' : 'w-12 h-12';

    return (
        <section ref={containerRef} className={`${sectionBg} py-24`}>
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <h2 className={`text-4xl md:text-5xl font-serif ${textColor} mb-6`}>
                        How We Work With Clients
                    </h2>
                    <p className={`${subTextColor} font-light text-lg`}>
                        Principles that guide every client relationship
                    </p>
                </div>

                {/* Staggered Grid Content */}
                <div ref={gridRef} className="flex flex-col md:flex-row relative">

                    {/* Vertical Divider (Desktop Only) */}
                    <div className={`hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent ${separatorColor} to-transparent opacity-20 -translate-x-1/2 z-10`}></div>

                    {/* Left Column (Items 1 & 3) */}
                    <div className={`w-full md:w-1/2`}>
                        {/* Item 1: Independent Advice */}
                        <div className={`p-8 md:p-16 relative border-b ${borderColor}`}>
                            <div className="mb-8">
                                <img src={menuIcon} alt="Icon" className={imageClass} />
                            </div>
                            <h3 className={`text-2xl font-serif ${textColor} mb-6`}>Independent Advice</h3>
                            <p className={`${subTextColor} font-light text-lg leading-relaxed`}>
                                We provide advice that is free from product commissions, incentives, or targets—so recommendations are guided only by what is right for you.
                            </p>
                        </div>

                        {/* Item 3: Long-Term Discipline */}
                        <div className={`p-8 md:p-16 relative border-b md:border-b-0 ${borderColor}`}>
                            <div className="mb-8">
                                <img src={chartIcon} alt="Icon" className={imageClass} />
                            </div>
                            <h3 className={`text-2xl font-serif ${textColor} mb-6`}>Long-Term Discipline</h3>
                            <p className={`${subTextColor} font-light text-lg leading-relaxed`}>
                                We focus on consistency, asset allocation, and behaviour over time—rather than reacting to short-term market movements or noise.
                            </p>
                        </div>
                    </div>

                    {/* Right Column (Items 2 & 4) - Staggered Down */}
                    <div className="w-full md:w-1/2 md:mt-24">
                        {/* Item 2: Risk Before Returns */}
                        <div className={`p-8 md:p-16 relative border-b ${borderColor}`}>
                            <div className="mb-8">
                                <img src={walletCheckIcon} alt="Icon" className={imageClass} />
                            </div>
                            <h3 className={`text-2xl font-serif ${textColor} mb-6`}>Risk Before Returns</h3>
                            <p className={`${subTextColor} font-light text-lg leading-relaxed`}>
                                Every portfolio is built around an agreed understanding of risk. Protecting capital and managing downside always come before pursuing returns.
                            </p>
                        </div>

                        {/* Item 4: Fiduciary Responsibility */}
                        <div className={`p-8 md:p-16 relative`}>
                            <div className="mb-8">
                                <img src={judgeIcon} alt="Icon" className={imageClass} />
                            </div>
                            <h3 className={`text-2xl font-serif ${textColor} mb-6`}>Fiduciary Responsibility</h3>
                            <p className={`${subTextColor} font-light text-lg leading-relaxed`}>
                                As a fee-only fiduciary, we are legally and ethically required to act in our clients' best interest—clearly, independently, and without conflict.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Quote */}
                <div ref={quoteRef} className="text-center mt-20 max-w-4xl mx-auto opacity-0">
                    <p className={`text-2xl md:text-3xl font-serif ${textColor} leading-normal`}>
                        While markets change, our responsibility remains the same—helping clients make better decisions, consistently
                    </p>
                </div>

            </div>
        </section>
    );
};
