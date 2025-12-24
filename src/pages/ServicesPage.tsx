
import React, { useEffect } from 'react';
import { gsap } from '../lib/gsap';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-service', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from('.reveal-list-item', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        x: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const serviceCategories = [
    {
      title: "Residential & Commercial",
      description: "A swanky villa or a simple home, we help build dreams. Dreams that make lives. Highest quality materials supported with high-skilled labour, and on-ground everyday progress examined by the directors themselves, you can be rest assured of how dreams turn reality.",
      details: "We build fully-equipped apartments and commercial complexes. Whether a stand-alone apartment or a series of complexes, connect with us to know more.",
      features: [
        "Independent Homes & Villas",
        "Refurbishing & Renovation",
        "Structural Changes",
        "24/7 CCTV Surveillance & Security",
        "Design to Maximise Parking",
        "Service and Internal Usage Lifts",
        "Premium Fittings",
        "Customisable to meet any Requirements"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Labor Supply & Interior Contracting",
      description: "We supply skilled, semi-skilled and unskilled labour required for all types of construction related projects.",
      details: "From an individual home that requires structural changes to a high-rise that requires multiple trained manpower, our team works on the ground with our clients to ensure efficient, effective and economical results.",
      features: [
        "Tile & Marble Fitting",
        "Plumbing Works",
        "Paint jobs",
        "Carpentry",
        "Civil works",
        "False Ceiling",
        "Facades & Elevation"
      ],
      image: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Residential Layout",
      description: "To set out and create a residential layout requires multiple vendor associations. With an expertise in managing layout developments for years, you can sit back and see your investment build into into a dream project.",
      details: "We specialise in concept positioning and Vastu-aligned developments.",
      features: [
        "Cement/Tar Roads in and around the layouts",
        "Vaastu incorporated sites with 90 degree",
        "Concept Positioning Design",
        "Sanitary & Water Connection to individual sites",
        "Plants & Lights for the common areas",
        "Providing Electrical Polls, Cables and Transformers",
        "Parks, Parking, Entrance Security",
        "All approvals from BESCOM, BBMP, BDA & departments"
      ],
      image: "https://images.unsplash.com/photo-1721244654392-9c912a6eb236?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "PEB Structures",
      description: "With the advent of pre-engineered building structures, the change is inevitable. We help design, procure, erect and deliver complete end-to-end industrial, commercial and infrastructural projects.",
      details: "Modern construction meets efficiency and relocatability.",
      features: [
        "Fastest delivery time, speedy erection",
        "Energy efficient, low cost maintenance",
        "Easy to adapt & relocate",
        "All-weather ready"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="bg-[#f5f5f0] pt-40 md:pt-64 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Header */}
        <div className="mb-32 md:mb-48">
          <span className="reveal-service block text-stone-400 uppercase tracking-[0.4em] text-[10px] font-medium mb-12">Our Expertise</span>
          <h1 className="reveal-service text-6xl md:text-[10vw] leading-[0.9] serif font-light italic mb-16 tracking-tighter">
            Full Spectrum <br />
            <span className="md:ml-[15vw]">Realization.</span>
          </h1>
          <div className="reveal-service max-w-2xl md:ml-auto">
            <p className="text-xl md:text-3xl serif leading-relaxed text-[#1a1a1a]">
              From the foundational stone to the final interior detail, we manage the alchemy of construction.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid space-y-48 md:space-y-72">
          {serviceCategories.map((service, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Column */}
              <div className={`lg:col-span-6 space-y-12 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl serif italic tracking-tight">{service.title}</h2>
                  <p className="text-xl text-stone-800 serif font-light leading-relaxed italic">
                    {service.description}
                  </p>
                  <p className="text-stone-500 font-light leading-relaxed">
                    {service.details}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-stone-200">
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-8 font-medium">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="reveal-list-item flex items-start gap-3 group">
                        <span className="w-1.5 h-[1px] bg-stone-300 mt-2.5 group-hover:w-4 group-hover:bg-stone-800 transition-all duration-300"></span>
                        <span className="text-sm text-stone-600 font-light tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Column */}
              <div className={`lg:col-span-6 aspect-[4/5] overflow-hidden bg-stone-200 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Vision */}
        <div className="mt-48 md:mt-72 text-center py-24 border-y border-stone-200">
          <p className="text-3xl md:text-5xl serif italic font-light text-stone-800 max-w-4xl mx-auto">
            "Transforming architectural blueprints into living, breathing legacies."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
