
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutSection = ({ id }) => {
  const titleRef = useRef(null)
  const sectionRef = useRef(null)
  const introRef = useRef(null)
   const starsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: 'blur(10px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    //stars animation
    starsRef.current.forEach((star , index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5

      gsap.to(star , {
        x: `${direction* (100 + index * 20)}`,
        y: `${direction* -50 + index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end:"bottom top",
          scrub: speed,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if(trigger.vars.trigger === sectionRef.current){
          trigger.kill();
        }
      })
    }

  }, [])
 
  const addToStars = (el) => {
    if(el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  }


  return (
    <section
      ref={sectionRef}
      id={id}
      className="h-screen relative overflow-hidden flex flex-col 
      items-center justify-center p-3
      bg-gradient-to-b from-black to-[#9a74cf50] px-6"
    >

      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(10)].map((_ , i) => (
          <div
          ref={addToStars}
          key={`start-${i}`}
          className='absolute rounded-full'
          style={{
            width: `${10 + i * 3 }px`,
            height: `${10 + i * 3 }px`,
            backgroundColor:"white",
            opacity:0.2 + Math.random() * 0.4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}>
          
          </div>
        ))}
      </div>

      <div className=" z-50 container mx-auto h-full flex flex-col
       items-center justify-center text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold 
          tracking-tight mb-8 text-white drop-shadow-lg"
        >
          About Me
        </h1>

        <div
          ref={introRef}
          className="opacity-0 max-w-3xl text-base md:text-xl 
          font-serif text-gray-200 leading-relaxed space-y-4"
        >
          <p>
            I’m an undergraduate at IIT Kharagpur with a passion for technology,
            problem-solving, and building meaningful digital solutions. I enjoy
            working on scalable web applications that combine clean, efficient
            code with modern frameworks to create reliable and user-friendly
            experiences.
          </p>

          <p>
            My development journey began with Data Structures & Algorithms,
            which sharpened my logical thinking and laid the foundation for
            problem-solving. Over time, I transitioned into full-stack web
            development, where I work extensively with the MERN stack (MongoDB,
            Express.js, React, Node.js) to bring ideas to life. While I enjoy
            all aspects of development, I’m particularly drawn to backend
            engineering, focusing on security and optimization.
          </p>

          <p>
            When I’m not coding, you’ll often find me on the cricket field, lost
            in music, or exploring fine arts—anything that lets me channel
            creativity in a different form.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
