import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.png";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Negin. i'm from Iran. i studied software engineering at
              kermanshah technical university. Fastforward to this day, i can
              honestly say it's been a beautiful journery and i hope i keep up
              on exapnding my portfolio by building more projects.<br></br> my
              current focus is build small yet exciting projects to showcase my
              knowledge in order to study abroad in master's degree in computer
              science major in my dream university. <br />
              here's a few i've been working on recently:
            </p>
            <ul className="about__list">
              <li>Python</li>
              <li>Rust</li>
              <li>C/C++</li>
              <li>React</li>
              <li>Web Developement</li>
              <li>UI/UX</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>

          <br></br>
          {
            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Development</h3>
                  <span className="skills__number">80%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">UI/UX Design</h3>
                  <span className="skills__number">60%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage ui__design"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">90%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage python"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Rust</h3>
                  <span className="skills__number">75%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage rust"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C/C++</h3>
                  <span className="skills__number">50%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage c"></span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
