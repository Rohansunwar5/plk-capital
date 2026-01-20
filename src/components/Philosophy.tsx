import React, { useRef } from 'react';
import { useReveal } from '../hooks/useGsap';

interface PhilosophyProps {
    variant?: 'default' | 'light';
}

export const Philosophy: React.FC<PhilosophyProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const containerRef = useRef<HTMLElement>(null);
    useReveal(containerRef, { threshold: 0.2 });

    const textColor = isLight ? 'text-[#152E4D]' : 'text-plk-white';
    const dividerColor = isLight ? 'bg-[#152E4D]/20' : 'bg-[#979797] opacity-50';

    return (
        <section ref={containerRef} className={`px-4 md:px-12 py-20 max-w-4xl mx-auto text-center opacity-0 ${isLight ? 'bg-[#F7F2EF]' : ''}`}>
            <div className="space-y-12">
                <h2 className={`text-2xl md:text-3xl font-thin ${textColor} leading-relaxed`}>
                    Money decisions are rarely just about numbers.
                </h2>

                <h2 className={`text-2xl md:text-3xl font-thin ${textColor} leading-relaxed`}>
                    They are shaped by responsibilities, future commitments, cash flows, and uncertainty.
                </h2>

                <h2 className={`text-2xl md:text-3xl font-thin ${textColor} leading-relaxed`}>
                    Our role is to bring structure and clarity — so your wealth quietly supports your life, allowing you to focus on other important things.
                </h2>
            </div>

            {/* Divider Line */}
            <div className={`h-[1px] w-full ${dividerColor} mt-20`}></div>
        </section>
    );
};
