import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import {
    RiHome2Line,
    RiUserFollowLine,
    RiBriefcase2Line,
    RiFolderChartLine,
    RiDraftLine,
    RiMessage3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
} from "react-icons/ri";


const Sidebar = (props) => {
    return (
        <aside className="aside">
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
                                <RiFileList3Line />
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
                <button onClick={props.switchTheme} className="nav__link footer__button">
                    {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
