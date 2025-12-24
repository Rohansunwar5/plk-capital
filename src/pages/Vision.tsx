
import React, { useEffect } from 'react';
import { gsap } from '../lib/gsap';

const Vision: React.FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-item', {
        y: 80,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: 'power4.out',
      });

      gsap.to('.vision-parallax', {
        y: '-15%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.vision-parallax-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f5f5f0] pt-40 md:pt-64 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24">
        {/* Header Section */}
        <div className="mb-32 md:mb-64">
          <span className="reveal-item block text-stone-400 uppercase tracking-[0.4em] text-[10px] font-medium mb-12">The Philosophy</span>
          <h1 className="reveal-item text-6xl md:text-[10vw] leading-[0.9] serif font-light italic mb-16 tracking-tighter">
            Architectural <br />
            <span className="md:ml-[20vw]">Silence.</span>
          </h1>
          <div className="reveal-item max-w-2xl md:ml-auto">
            <p className="text-xl md:text-3xl serif leading-relaxed text-[#1a1a1a]">
              We believe luxury isn't about excess; it's about the precision of space and the quality of light.
            </p>
          </div>
        </div>

        {/* Image Grid - Asymmetrical */}
        <div className="vision-parallax-container grid grid-cols-1 md:grid-cols-12 gap-8 mb-48">
          <div className="reveal-item md:col-span-7 aspect-[16/10] bg-stone-200 overflow-hidden vision-parallax">
            <img 
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Detail" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="reveal-item md:col-span-4 md:col-start-9 md:mt-32 aspect-[3/4] bg-stone-300 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1500" 
              alt="Material" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-64">
          <div className="reveal-item space-y-24">
            <div className="space-y-8">
              <h3 className="text-4xl serif italic">Sensory Integration</h3>
              <p className="text-stone-600 font-light leading-relaxed max-w-md">
                Our designs engage all five senses. The texture of hand-finished stone, the sound of water moving through a courtyard, and the specific scent of reclaimed cedar.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl serif italic">Ecological Resonance</h3>
              <p className="text-stone-600 font-light leading-relaxed max-w-md">
                We don't just build on the land; we build with it. Every structure is designed to harmonize with local wind patterns and solar cycles.
              </p>
            </div>
          </div>
          <div className="reveal-item flex flex-col justify-center">
             <div className="p-12 md:p-24 border border-stone-200 bg-white/50 backdrop-blur-sm">
                <h4 className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-8 font-medium">Core Intent</h4>
                <p className="text-2xl md:text-4xl serif leading-tight italic">
                  "To live within an Horizon estate is to rediscover the rhythm of the natural world from a sanctuary of absolute comfort."
                </p>
                <div className="w-12 h-[1px] bg-stone-800 mt-12"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
