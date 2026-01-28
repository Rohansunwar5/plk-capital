import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import logo from '../assets/logo.png';
import heroVideo from '../assets/plk-hero.mp4';

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    // Stagger text elements
    useStagger(textRef, "h1, p", { y: 30, duration: 1, stagger: 0.2, delay: 0.5 });

    // Reveal the whole container slightly
    useReveal(containerRef, { y: 20, duration: 1.2, delay: 0.2 });

    return (
        <section ref={containerRef} className="px-4 md:px-12 pt-32 pb-12 max-w-7xl mx-auto opacity-0">
            <div className="bg-[#1C1F26] rounded-sm p-8 md:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden mb-12">

                {/* Left Content */}
                <div ref={textRef} className="flex-1 z-10">
                    <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
                        Helping your money <br />
                        stay aligned with your life.
                    </h1>
                    <p className="text-plk-grey text-lg max-w-md leading-relaxed">
                        Thoughtful financial guidance for individuals, families, and business owners — built on clarity, independence, and long-term thinking.
                    </p>
                </div>

                {/* Right Content / Video Placeholder */}
                <div className="flex-1 flex flex-col items-center justify-center relative z-10 min-h-[300px]">
                    <video
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Background Gradients/Effects could go here */}
            </div>

            {/* Divider Line */}
            <div className="h-[1px] w-full bg-[#979797]"></div>
        </section>
    );
};
