

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import skillshare_image from "../assets/skillshare_image.png";
import roadwatch_image from "../assets/roadwatch_image.png";
import trp_image from "../assets/trp_image.png";
import crm_image from "../assets/crm_image.png";


const projects = [
  { 
    id: 1, 
    title: "SkillShare", 
    color: "from-purple-500 to-pink-500", 
    link: 'https://skill-share-iota.vercel.app/',
    img: skillshare_image,
    desc: "A mutual skill-sharing platform where users can exchange skills directly, enabling collaborative learning and growth without intermediaries." 
  },
  { 
    id: 2, 
    title: "RoadWatch", 
    color: "from-blue-500 to-cyan-500", 
    link:'https://github.com/NikhilPatel32/road-issue-project.git',
    img : roadwatch_image,
    desc: "An online platform for reporting local road issues, ensuring timely alerts reach responsible authorities and facilitating faster resolution of road problems." 
  },
  { 
    id: 3, 
    title: "Temple Resource Planning", 
    color: "from-orange-500 to-red-500", 
    link:'https://trp-temple-resource-planning.vercel.app/',
    img : trp_image,
    desc: "A temple management system that automates financial transactions and record-keeping, helping administration manage resources efficiently without manual effort." 
  },
  { 
    id: 4, 
    title: "CRM", 
    color: "from-green-500 to-emerald-500", 
    link:'https://crm-application-ukzr.vercel.app/',
    img : crm_image,
    desc: "A customer relationship management application designed to efficiently manage clients, track leads, and optimize communication workflows for businesses." 
  },
];


const ProjectSection = ({ id }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
   
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

    
      gsap.fromTo(
        titleLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

    
      const cards = gsap.utils.toArray(".project-card-item");
      
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

    
        const cardInner = card.querySelector(".card-inner");
        if (cardInner) {
          gsap.to(cardInner, {
            y: -30,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

    
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
     id={id}
     ref={sectionRef} className="relative bg-[#f6f6f6] py-20 overflow-hidden">
    
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-8 opacity-0"
        >
          My Projects
        </h2>
      </div>

     
      <div
        ref={titleLineRef}
        className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mb-20 origin-center"
        style={{ transform: "scaleX(0)" }}
      ></div>

      
      <div ref={cardsContainerRef} className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card-item opacity-0"
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="relative h-full group cursor-pointer">
             
                <div className="relative bg-white rounded-3xl shadow-xl 
                overflow-hidden h-[500px] md:h-[550px]">
              
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all
                       duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.img})` }}
                    ></div>
                  
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30
                     transition-all duration-300"></div>
                  </div>

                  
                  <div className="card-inner relative z-10 h-full p-8 md:p-10 flex
                   flex-col justify-between">
                   
                    <div>
                      <div className="inline-block bg-white/90 backdrop-blur-sm px-6 
                      py-3 rounded-2xl shadow-lg">
                        <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r
                         from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                 
                    <div className="space-y-4">
                      
                      <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl 
                      shadow-xl transform transition-all duration-300 group-hover:bg-white">
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-3">
                          {project.title}
                        </h3>
                        
                       
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                          {project.desc}
                        </p>

                      
                        <button 
                          className="px-6 py-3 bg-gradient-to-r from-purple-600
                           to-pink-600 text-white font-semibold rounded-full
                            hover:from-purple-700 hover:to-pink-700 transition-all
                             duration-300 transform hover:scale-105 inline-flex items-center
                              gap-2 shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project.link);
                          }}
                        >
                          View Project
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 
                            transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

               
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent
                     via-white/20 to-transparent transform
                     -skew-x-12 translate-x-full group-hover:translate-x-[-200%]
                      transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;