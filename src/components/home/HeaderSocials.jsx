import React from 'react';
import { FaBehance, FaDribbble, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://wwww.instagram.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href='https://www.twitter.com' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>

            <a href='https://wwww.behance.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaBehance />
            </a>

            <a href='https://www.dribbble.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDribbble />
            </a>

            <a href='https://wwww.pinterest.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaPinterest />
            </a>
        </div>
    );
};

export default HeaderSocials;
