import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'animate.css';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_d0zyb3t',      // Replace with your service ID
            'template_kjoz7h9',     // Replace with your template ID
            formRef.current,
            'tkRcBEtcfhMtjEQMw'     // Replace with your public key
        )
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            formRef.current.reset();

            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for reaching out. I will get back to you soon.',
                icon: 'success',
                confirmButtonColor: '#7e22ce',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        }, (error) => {
            console.log(error.text);
            setLoading(false);

            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#7e22ce',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        });
    }

    return (
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease:'easeOut'}}
            viewport={{once:false, amount:0.2}}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Have a project in mind or want to collaborate? Let's talk!
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* Contact Form */}
                    <div>
                        <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                            <input type="hidden" name="title" value="Contact Me" />
                            <div>
                                <label className='block text-gray-300 mb-2'>Your Name</label>
                                <input name="name" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' required />
                            </div>
                            <div>
                                <label className='block text-gray-300 mb-2'>Email Address</label>
                                <input name="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type='email' required />
                            </div>
                            <div>
                                <label className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea name="message" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' required />
                            </div>

                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-8'>
                        {/* Location */}
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'><FaMapMarkerAlt /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Thalassery, Kannur, Kerala - 670672, India</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'><FaEnvelope /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>aishwaryakavil@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'><FaPhone /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 7025419128</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/aishwaryak0106/' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                <a href='https://www.linkedin.com/in/aishwarya-k-661870249/' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>

                                <a href='https://www.instagram.com/aishwarya.rameshan?igsh=djBoZnl6MDQwazc5' target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300'>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
