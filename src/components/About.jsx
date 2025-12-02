import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets, assetss } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            intial = {{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, ease:'easeOut'}}
            viewport={{once:true}}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/*Heading*/}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-purple'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Get to know more about my background and passion
                </p>

                {/*Image + my journey*/}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/*image*/}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img 
                        initial = {{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.9, ease:'easeOut'}}
                        viewport={{once:false, amount:0.2}}
                        className='w-full h-full object-cover'
                        src={assetss.aboutMe} alt="profile" />
                    </div>
                    {/*Text content*/}
                    <motion.div
                        initial = {{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.9, ease:'easeOut'}}
                        viewport={{once:false, amount:0.2}}
                        className='md:w-1/2'
                    >   
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semi-bold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I'm Oracle APEX and full-stack developer with experience building scalable, data-driven applications for businesses across different domains. My journey began with simple HTML/CSS pages and has grown into creating powerful web solutions using PL/SQL, Python, Java, and modern frameworks.</p>
                            <p className='text-gray-300 mb-12'>When I'm not coding, you’ll find me learning new technologies, exploring automation and analytics, or improving my skills through personal projects and tech research. I believe in continuous learning and enjoy pushing the boundaries of what's possible with smart, efficient, and user-focused application development.</p>
                            
                            {/*Cards*/}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.flatMap((data, index)=> (
                                        <div key={index}className='bg-dark-300 rounded- p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default About