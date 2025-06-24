import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const projectData = [
    {
        img: Portfolio1,
        title: "Full-Stack Web App",
        desc: "A responsive MERN stack application with user authentication and CRUD features.",
        github: "https://github.com/yourusername/fullstack-webapp"
    },
    {
        img: Portfolio2,
        title: "AI Chatbot",
        desc: "An NLP-powered chatbot that helps users find quick answers using machine learning.",
        github: "https://github.com/yourusername/ai-chatbot"
    },
    {
        img: Portfolio3,
        title: "E-Commerce Website",
        desc: "A fully functional e-commerce platform with cart, payment gateway, and admin dashboard.",
        github: "https://github.com/yourusername/ecommerce-site"
    },
    {
        img: Portfolio4,
        title: "Weather App",
        desc: "A React app that displays weather info using OpenWeatherMap API.",
        github: "https://github.com/yourusername/weather-app"
    },
    {
        img: Portfolio5,
        title: "Face Detection AI",
        desc: "A real-time face detection app using OpenCV and Python.",
        github: "https://github.com/yourusername/face-detection-ai"
    },
    {
        img: Portfolio6,
        title: "Task Manager",
        desc: "A productivity tool to manage daily tasks and goals with notifications.",
        github: "https://github.com/yourusername/task-manager"
    }
];

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
                Here's a selection of projects I've worked on — each one showcases my skills in full-stack development, AI/ML, and responsive UI design.
            </span>
            <div className="worksGrid">
                {projectData.map((project, index) => (
                    <div key={index} className="projectCard">
                        <img src={project.img} alt={project.title} className="projectImg" />
                        <div className="projectContent">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <a href={project.github} className="githubBtn" target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Works;
