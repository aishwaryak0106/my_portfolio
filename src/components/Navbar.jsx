import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href = "#" className='text-3xl font-bold text-white'>
                    Aishwarya
                    <span className='text-purple'>Kavil</span>
                    <div className='w-4 h-4 bg-purple rounded-full'></div>

                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href="#home" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#experience" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            {/* Mobile button */}
            <div className='md:hidden'>
                {
                    showMenu ?
                    <FaXmark onClick={()=> setShowMenu(!showMenu)}
                        className='text-2xl cursor-pointer'/> : 
                    <FaBars onClick={()=> setShowMenu(!showMenu)}
                        className='text-2xl cursor-pointer'/>
                }
            </div>

        </div>
        
        {/*Mobile menus*/}

        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a onClick={()=> setShowMenu(!showMenu)} href="#home" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                        <span>Home</span>
                    </a>
                    <a onClick={()=> setShowMenu(!showMenu)} href="#about" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                        <span>About</span>
                    </a>
                    <a onClick={()=> setShowMenu(!showMenu)} href="#skills" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                        <span>Skills</span>
                    </a>
                    <a onClick={()=> setShowMenu(!showMenu)} href="#projects" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                        <span>Projects</span>
                    </a>
                    <a onClick={()=> setShowMenu(!showMenu)} href="#experience" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                        <span>Experience</span>
                    </a>
                    <a onClick={()=> setShowMenu(!showMenu)} href="#contact" className='group relative text-white/80 transition duration-300 hover:text-purple'>
                        <span>Contact</span>
                    </a> 
                </div>
            )
        }
    </nav>
  )
}

export default Navbar