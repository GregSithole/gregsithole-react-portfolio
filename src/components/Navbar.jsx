import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiFacebook, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { images } from '../constants';

const Navbar = () => {

    const [navigation, setNavigation] = useState(false);
    const handleClick = () => setNavigation(!navigation);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#202020] text-white'>
            <div>
                <img src={images.logo} alt='logo' style={{ width: '60px' }} />
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

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[50px] h-[50px] m-2 flex justify-between item-center border rounded-md border-[#474747] hover:bg-[#474747]'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            <FiFacebook size={40} />
                        </a>
                    </li>
                    <li className='w-[50px] h-[50px] m-2 flex justify-between item-center border rounded-md border-[#474747] hover:bg-[#474747]'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            <FiTwitter size={40} />
                        </a>
                    </li>
                    <li className='w-[50px] h-[50px] m-2 flex justify-between item-center border rounded-md border-[#474747] hover:bg-[#474747]'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            <FiLinkedin size={40} />
                        </a>
                    </li>
                    <li className='w-[50px] h-[50px] m-2 flex justify-between item-center border rounded-md border-[#474747] hover:bg-[#474747]'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            <FiGithub size={40} />
                        </a>
                    </li>
                    <li className='w-[50px] h-[50px] m-2 flex justify-between item-center border rounded-md border-[#474747] hover:bg-[#474747]'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            <FiMail size={40} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar