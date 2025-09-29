import React from 'react';
import './intro.css';
import bg from '../../assets/profile.jpeg';

const Intro = () => {
    return (
        <section id="intro" className="introSection">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Wasana</span>
                    <br />
                    <span className="introRole">Computer Engineer</span>
                </span>
                <div className="introParaWrapper">
                    <p className="introPara">
                        I am a results-driven computer engineer with a strong passion for developing intelligent, user-focused digital solutions. With a solid foundation in both front-end and back-end technologies, I specialize in full-stack software development and the application of artificial intelligence and machine learning to real-world problems.
                    </p>
                </div>
            </div>
            <div className="introImageWrapper">
                <img src={bg} alt="Profile" className="bg" />
            </div>
        </section>
    );
}

export default Intro;