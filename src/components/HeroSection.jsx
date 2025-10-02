import { motion , AnimatePresence} from "framer-motion"
import Spline from "@splinetool/react-spline"
import image from '../assets/image.png'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = ( { id }) => {
  return (
    <section 
    id={id}
    className="h-screen relative flex items-center
     px-10 lg:px-24 overflow-hidden pt-50 md:pt-10 pb-2">
 
  <Spline 
  className="absolute inset-0 w-full h-full"
  scene="https://prod.spline.design/MmQ9RBWN5LReOhCc/scene.splinecode" />


  <div className="absolute inset-0 bg-black/60"></div>

<div className="relative flex flex-col lg:flex-row items-center
 justify-center gap-10 w-full">
  <div className="text-center md:text-left max-w-2xl">
    <motion.h1 
    initial={{ opacity: 0 , y : 80}}
    animate={{ opacity: 1 , y: 0}}
    transition={{
      type: "spring",
      stiffness: 40,
      damping: 25,
      delay: 1.3,
      duration:1.5
    }}
    className="text-xl md:text-4xl lg:text-5xl font-bold
     text-white mb-6 font-serif">
      Hi, I am Nikhil Patel <br />
      <TypeAnimation
      sequence={[
  
        'Full-Stack Developer',
        1000,
        'Software Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-2xl md:text-4xl lg:text-5xl font-bold text-purple-400"
    />
    </motion.h1>
    <motion.p 
    initial={{ opacity: 0 , y : 80}}
    animate={{ opacity: 1 , y: 0}}
    transition={{
      type: "spring",
      stiffness: 40,
      damping: 25,
      delay: 1.8,
      duration:1.5
    }}
    className="text-lg md:text-xl lg:text-2xl text-purple-200 
    max-w-2xl mx-auto font-serif">
      I design and develop scalable web applications while writing efficient,
      clean, and optimized code. With strong foundations in Data Structures &
      Algorithms, I merge problem-solving skills with modern web technologies to
      create impactful and reliable digital solutions.
    </motion.p>
  </div>

<motion.img
initial={{ opacity: 0, y: 80 }}
  animate={{
    opacity: 1,
    y: 0,
    boxShadow: "0 0 20px rgba(157, 78, 221, 0.8)",
  }}
  transition={{
    type: "spring",
    stiffness: 40,
    damping: 25,
    delay: 2.3,
    duration: 1.5,
  }}
  whileHover={{
    boxShadow: "0 0 40px rgba(157, 78, 221, 1)"
  }}
src={image} alt="Nikhil Patel" 
className="lg:h-[25rem] md:h-[20rem] h-[20rem] rounded-full mix-blend-lighten"/>
</div>

</section>

  )
}

export default HeroSection
