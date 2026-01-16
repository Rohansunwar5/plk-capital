import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface PageTransitionProps {
    children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Reset scroll position on route change
        window.scrollTo(0, 0);

        // Animation
        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [location.pathname]);

    return (
        <div ref={containerRef} className="flex-grow flex flex-col w-full">
            {children}
        </div>
    );
};
