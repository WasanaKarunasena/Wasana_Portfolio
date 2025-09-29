import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I am a dedicated computer engineer with a passion for building full-stack web applications and intelligent systems. I combine technical expertise in front-end and back-end development with a strong foundation in artificial intelligence and quality assurance to deliver reliable and innovative digital solutions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="Full Stack Development" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full-Stack Development</h2>
                        <p>I design and build complete web applications using modern technologies such as React, Node.js, Express, and MongoDB, ensuring responsive design and robust functionality across all devices.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="AI & ML" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AI & Machine Learning</h2>
                        <p>I develop intelligent systems using Python, TensorFlow, and Scikit-learn to analyze data, make predictions, and automate complex tasks in real-world applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="Quality Assurance" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Quality Assurance</h2>
                        <p>I apply systematic testing and debugging methods to ensure software is reliable, efficient, and user-friendly, covering both web and mobile platforms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
