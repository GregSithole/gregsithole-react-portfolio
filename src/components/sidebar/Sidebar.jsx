import React from 'react';
import './Sidebar.css';
import Logo from "../../assets/logo.svg"
import { RiHome2Line, RiUserFollowLine, RiBriefcase2Line, RiFolderChartLine, RiDraftLine, RiMessage3Line } from 'react-icons/ri';
import { FaUserGraduate } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="logo" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <RiHome2Line />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <RiUserFollowLine />

                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <RiBriefcase2Line />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <FaUserGraduate />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <RiFolderChartLine />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                                <RiDraftLine />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <RiMessage3Line />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                    &copy; 2022 - 2023.
                </span>
            </div>
        </aside>
    )
}

export default Sidebar