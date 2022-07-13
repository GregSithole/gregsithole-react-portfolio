import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
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
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-social'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-social'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Twitter <FaTwitter size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-social'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-social'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-social'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-social'>
                        <a className='flex justify-between items-center w-full text-white' href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar