import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [navigation, setNavigation] = useState(false);
    const handleClick = () => setNavigation(!navigation);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#202020] text-gray-300'>
            <div>
                <h1 className='font-xl'>Greg Sithole</h1>
            </div >

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>


            <div onClick={handleClick} className='md:hidden z-10'>
                {!navigation ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!navigation ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#202020] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            <div className='hidden'></div>
        </div >
    )
}

export default Navbar