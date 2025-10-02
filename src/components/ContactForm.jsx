import React from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import emailjs from 'emailjs-com'
const ContactForm = ({ closeContactForm }) => {
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId, templateId, e.target, publicKey     
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
          closeContactForm()
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong");
          closeContactForm()
        }
      );
  };

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex 
        items-center justify-center p-4'>
            
            <motion.div 
            initial={{ scale: 0.8 , opacity: 0 , y: 30}}
            animate={{ scale: 1 , opacity: 1 , y: 0}}
            exit={{ scale: 0.8 , opacity: 0 , y: 30 }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8
            }}
            className='bg-gray-900 rounded-xl shadow-xl
             w-full max-w-md p-6'>
              
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold text-gray-300'>Get In Touch</h1>
                <button
                onClick={closeContactForm}>
                    <FiX className='w-5 h-5 text-gray-300 font-extrabold'/>
                </button>
              </div>

              <form 
              onSubmit={sendEmail}
              className='space-y-4'>
                <div>
                    <label htmlFor="name"
                    className='block text-sm font-medium text-gray-300 mb-1'>
                        Name
                    </label>
                    <input type="text" 
                    id="name" 
                    name="user_name"
                    placeholder='Your Name'
                    className='w-full px-4 py-2 border
                    border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500
                    bg-gray-700'
                    />
                </div>

                <div>
                    <label htmlFor="email"
                    className='block text-sm font-medium text-gray-300 mb-1'>
                        Email
                    </label>
                    <input type="email" 
                    id="email"
                    name="user_email" 
                    placeholder='Your Email'
                    className='w-full px-4 py-2 border
                    border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500
                    bg-gray-700'
                    />
                </div>

                <div>
                    <label htmlFor="message"
                    className='block text-sm font-medium text-gray-300 mb-1'>
                        Message
                    </label>
                    <input type="textarea" 
                    rows="4"
                    id="meassage" 
                    name="message"
                    placeholder='How can I help you?'
                    className='w-full px-4 py-2 border
                    border-gray-600 rounded-lg focus:ring-2
                    focus:ring-violet-500
                    bg-gray-700'
                    />
                </div>

                <motion.button 
                type='submit'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className='w-full px-4 py-2 bg-gradient-to-r
                from-violet-600 tp-violet-400 hover:from-violet-700 hover:to-purple-700
                transition-all duration-300 rounded-lg shadow-md
                hover:shadow-lg hover:shadow-violet-600/50'>
                    Send Message
                </motion.button>
              </form>

            </motion.div>
            </motion.div>
  )
}

export default ContactForm
