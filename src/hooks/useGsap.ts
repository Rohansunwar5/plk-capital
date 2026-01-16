import { useLayoutEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

interface RevealConfig {
    y?: number;
    x?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    threshold?: number; // 0-1, how much of viewport to enter before triggering
    once?: boolean;
}

export const useReveal = (
    ref: RefObject<HTMLElement | null>,
    config: RevealConfig = {}
) => {
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const {
            y = 40,
            x = 0,
            duration = 1.2,
            delay = 0,
            threshold = 0.15,
            once = true,
        } = config;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, y, x },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration,
                    delay,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${100 - threshold * 100}%`,
                        toggleActions: once ? 'play none none none' : 'play none none reverse',
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [ref, config.y, config.x, config.duration, config.delay, config.threshold, config.once]);
};

export const useStagger = (
    ref: RefObject<HTMLElement | null>,
    selector: string,
    config: RevealConfig = {}
) => {
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const {
            y = 30,
            x = 0,
            duration = 1,
            stagger = 0.1,
            threshold = 0.15,
            delay = 0,
            once = true,
        } = config;

        const ctx = gsap.context(() => {
            const items = el.querySelectorAll(selector);
            if (items.length === 0) return;

            gsap.fromTo(
                items,
                { opacity: 0, y, x },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration,
                    stagger,
                    delay,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${100 - threshold * 100}%`,
                        toggleActions: once ? 'play none none none' : 'play none none reverse',
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [ref, selector, config.y, config.x, config.duration, config.stagger, config.threshold, config.delay, config.once]);
};

export const useLoadReveal = (
    ref: RefObject<HTMLElement | null>,
    config: RevealConfig = {}
) => {
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const {
            y = 30,
            duration = 1.2,
            delay = 0,
        } = config;

        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { opacity: 0, y },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: 'power3.out'
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [ref, config.y, config.duration, config.delay]);
}

export const useHover = (
    ref: RefObject<HTMLElement | null>,
    config: { scale?: number; x?: number; y?: number; duration?: number } = {}
) => {
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const { scale = 1.02, x = 0, y = 0, duration = 0.3 } = config;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ paused: true });
            tl.to(el, { scale, x, y, duration, ease: 'power2.out' });

            const enter = () => tl.play();
            const leave = () => tl.reverse();

            el.addEventListener('mouseenter', enter);
            el.addEventListener('mouseleave', leave);

            return () => {
                el.removeEventListener('mouseenter', enter);
                el.removeEventListener('mouseleave', leave);
            };
        }, ref);

        return () => ctx.revert();
    }, [ref, config.scale, config.x, config.y, config.duration]);
}

export const useHeaderScroll = (ref: RefObject<HTMLElement | null>) => {
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const showAnim = gsap.from(el, {
                yPercent: -100,
                paused: true,
                duration: 0.3,
                ease: 'power2.out',
            }).progress(1);

            ScrollTrigger.create({
                start: 'top top',
                end: 'max',
                onUpdate: (self) => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse();
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [ref]);
};
