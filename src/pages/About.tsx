import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import { WhatWeDo } from '../components/WhatWeDo';
import { HowWeWork } from '../components/HowWeWork';
import profileImg from '../assets/aboutUs1.png';

export const About: React.FC = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);

  useReveal(section1Ref, { threshold: 0.1 });
  useStagger(section1Ref, ".md\\:w-1\\/3, .md\\:w-2\\/3 > *", { y: 30, stagger: 0.2, delay: 0.2 });

  useReveal(section2Ref, { threshold: 0.1 });
  useStagger(section2Ref, ".max-w-4xl > *", { y: 30, stagger: 0.15, delay: 0.2 });

  useReveal(section3Ref, { threshold: 0.1 });
  useStagger(section3Ref, "h2, .max-w-lg, p, .grid, .space-y-6 > *", { y: 30, stagger: 0.1, delay: 0.2 });

  return (
    <main className="flex-grow bg-[#F7F2EF] text-[#0B1B2F] pt-32 pb-20 overflow-hidden">

      {/* Section 1: Profile & Quote */}
      <section ref={section1Ref} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-24 md:mb-32 px-6 md:px-12 opacity-0">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative group max-w-[280px] md:max-w-none">
            <img src={profileImg} alt="Mehul Jain" className="w-full rounded-lg shadow-sm relative z-10" />
            <div className="absolute -inset-2 border border-[#0B1B2F]/5 rounded-lg -z-0 translate-x-1 translate-y-1"></div>
          </div>
        </div>

        {/* Quote */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start space-y-8">
          <blockquote className="text-xl md:text-3xl font-serif leading-relaxed text-[#594D46] text-center md:text-left">
            “Clients trust us with decisions that affect their families, their businesses, and their future.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <span className="md:hidden"><br /></span>
            Our responsibility is to act in their best interest—clearly, independently, and without conflict.”
          </blockquote>

          <div className="w-16 h-[1px] bg-[#0B1B2F]/20 md:hidden"></div>

          <div className="text-[#594D46] font-light tracking-wide text-sm md:text-base uppercase">
            <span className="font-semibold text-[#0B1B2F]">Mehul Jain</span>, CFA — Founder
          </div>
        </div>
      </section>

      {/* Section 2: Our Belief (Full Width White) */}
      <section ref={section2Ref} className="w-full bg-white py-32 mb-32 opacity-0">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-12">
          <h2 className="text-2xl md:text-3xl font-serif text-[#0B1B2F] uppercase tracking-wider mb-8">
            OUR BELIEF
          </h2>

          {/* Divider 1 */}
          <div className="h-[1px] w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-[#0B1B2F]/30 to-transparent mb-16"></div>

          <p className="text-xl md:text-2xl font-serif text-[#0B1B2F] mb-12 leading-relaxed">
            We believe wealth management works best when advice is independent and aligned with the client.
          </p>

          {/* Divider 2 */}
          <div className="h-[1px] w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-[#0B1B2F]/30 to-transparent mb-16"></div>

          <div className="space-y-4 text-lg md:text-xl font-light text-[#594D46]">
            <p>Clarity over complexity</p>
            <p>Discipline over excitement</p>
            <p>Guidance through all market conditions</p>
          </div>
        </div>
      </section>

      {/* Section 3: Fee-Only */}
      <section ref={section3Ref} className="max-w-5xl mx-auto text-center px-4 md:px-12 opacity-0">
        <h2 className="text-2xl md:text-3xl font-serif text-[#0B1B2F] uppercase tracking-wider mb-8">
          WHY WE ARE FEE-ONLY
        </h2>

        {/* Divider 3 */}
        <div className="h-[1px] w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-[#0B1B2F]/30 to-transparent mb-16"></div>

        <p className="text-lg md:text-xl font-medium text-[#0B1B2F] mb-8">
          We work as a fiduciary—legally and ethically required to act in our clients’ best interest.
        </p>

        <p className="text-lg text-[#594D46] font-light mb-16 max-w-3xl mx-auto">
          In simple terms, this means our advice is driven only by what is right for you—not by commissions, targets, or product incentives.
        </p>

        {/* Placeholders for Images (Side by Side) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#EAE5E1] aspect-square rounded-sm"></div>
          <div className="bg-[#EAE5E1] aspect-square rounded-sm"></div>
        </div>

        <div className="space-y-6 text-[#594D46] font-light max-w-3xl mx-auto">
          <p>
            Money decisions are rarely just about numbers.
          </p>
          <p>
            They are shaped by responsibilities, future commitments, cash flows, and uncertainty.
          </p>
          <p>
            Our role is to bring structure and clarity — so your wealth quietly supports your life, allowing you to focus on other important things.
          </p>
        </div>

      </section>

      {/* Reused Sections (Light Variant) */}
      <WhatWeDo variant="light" />
      <HowWeWork variant="light" />

    </main>
  );
};
