import React, { useState , useEffect } from 'react'
import { motion , AnimatePresence} from 'framer-motion'
import { FiGithub , FiLinkedin , FiInstagram , FiMenu , FiX} from "react-icons/fi"
import ContactForm from './ContactForm';
const Header = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    const [isContactFormOpen , setIsContactFormOpen] = useState(false);
    
    const openContactForm = () => {
        setIsContactFormOpen(true)
    }

     const closeContactForm = () => {
        setIsContactFormOpen(false)
    }

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        
        // Close mobile menu if open
        if (isOpen) {
            setIsOpen(false);
            // Wait for menu to close before scrolling
            setTimeout(() => {
                scrollToSection(targetId);
            }, 300);
        } else {
            scrollToSection(targetId);
        }
    }

    const scrollToSection = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    useEffect(() => {
        if (isContactFormOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
        
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isContactFormOpen]);

  return (
   <header className='absolute w-full z-50 transition-all duration-300 mb-10'>
    
    <div className='container mx-auto px-4 sm:px-6 
    lg:px-8 flex items-center justify-between h-16 md:h-20'>
    
    
    <motion.div 
    initial={{ opacity: 0 , x: -100}}
    animate={{ opacity: 1 , x: 0}}
    transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.3,
        duration: 1.2,
    }}
    className='flex items-center'>

    <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100
      flex items-center justify-center text-purple-600 font-bold text-xl mr-3'>
        N
    </div>

    <span className='text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-100
    bg-clip-text text-transparent'>
    Nikhil Patel
    </span>

    </motion.div>

  
    <nav className='lg:flex hidden space-x-15'>
      {["Home" , "About" , "Projects" , "Contact"].map((item , index) => (
      <motion.a 
      key={index}
      initial={{ opacity: 0 , y: -20}}
      animate={{ opacity: 1 , y: 0}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7 + index * 0.2,
      }}
      className='relative text-gray-300 dark:text-gray-200
      hover:text-violet-600 dark:hover:text-violet-400 font-medium 
      transition-colors duration-300 group'
      href={`#${item.toLowerCase()}`}>
        {item}
        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full
        transition-all duration-300'></span>
      </motion.a>
      ))}
    </nav>


     <div className='lg:flex hidden items-center space-x-8'>
        <motion.a 
        initial={{ opacity: 0 , scale: 0.5}}
        animate={{ opacity: 1 , scale: 1}}
        transition={{delay: 1.3 , duration: 0.8}}
        href="https://github.com/NikhilPatel32/"  className='text-gray-300 dark:text-gray-300 hover:text-violet-600
        dark:hover:text-violet-400 transition-colors duration-300'>
            <FiGithub className='w-5 h-5'/>
        </motion.a>

        <motion.a 
        initial={{ opacity: 0 , scale: 0.5}}
        animate={{ opacity: 1 , scale: 1}}
        transition={{delay: 1.3 , duration: 0.8}}
        href="https://www.linkedin.com/in/nikhil-patel-803aa931a"  className='text-gray-300 dark:text-gray-300 hover:text-violet-600
        dark:hover:text-violet-400 transition-colors duration-300'>
            <FiLinkedin className='w-5 h-5'/>
        </motion.a>

        <motion.a 
        initial={{ opacity: 0 , scale: 0.5}}
        animate={{ opacity: 1 , scale: 1}}
        transition={{delay: 1.3 , duration: 0.8}}
        href="https://www.instagram.com/nikhilpatel5133?igsh=Z3F0cjUwYTc5Y2hx"  className='text-gray-300 dark:text-gray-300 hover:text-violet-600
        dark:hover:text-violet-400 transition-colors duration-300'>
            <FiInstagram className='w-5 h-5'/>
        </motion.a>

    </div>

    {/* mobile menu button */}
    <div className='lg:hidden flex items-center'>
      <motion.button 
      whileTap={{ scale: 0.7 }}
      onClick={toggle}
      className='text-gray-300'>
        { isOpen ? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/> }
      </motion.button>
    </div>
    </div>

   
    <motion.div
    initial={{ opacity: 0 , height: 0}}
    animate={{
        opacity: isOpen ? 1 : 0, 
        height: isOpen ? "auto" :0 ,
    }}
    transition={{ duration: 0.5 }}
     className='lg:hidden overflow-hidden text-white bg-gray-900 dark:bg-gray-900 shadow-lg
    px-4 py-5 space-y-5'>
     <nav className='flex flex-col space-y-3'>
    
       {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <a 
            key={index}
            className='text-gray-300 font-medium py-2 cursor-pointer hover:text-violet-400 transition-colors duration-300'
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, item.toLowerCase())}>
            {item}
            </a>
        ))}
     </nav>

     <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
        <div className='flex space-x-5'>
            <a href="https://github.com/NikhilPatel32/">
                <FiGithub className='h-5 w-5 text-gray-300' />
            </a>

            <a href="https://www.linkedin.com/in/nikhil-patel-803aa931a">
                <FiLinkedin className='h-5 w-5 text-gray-300' />
            </a>

            <a href="https://www.instagram.com/nikhilpatel5133?igsh=Z3F0cjUwYTc5Y2hx">
                <FiInstagram className='h-5 w-5 text-gray-300' />
            </a>
        </div>

        <button 
        onClick={() => {
            toggle();
            openContactForm();
        }}
        className='mt-4 block w-full px-4 py-2 rounded-lg
        bg-gradient-to-r from-violet-600  to-violet-400 font-bold'>
          Contact Me
        </button>
     </div>

    </motion.div>

    {/* contact form */}
    <AnimatePresence>
     {isContactFormOpen && <ContactForm closeContactForm={closeContactForm}/> }
</AnimatePresence>

   </header>
  )
}

export default Header
