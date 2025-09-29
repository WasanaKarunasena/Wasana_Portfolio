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
        title: "Social Media Scheduler",
        desc: "A full-stack app built with <strong>Next.js</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong> to schedule, publish, and manage social media posts with image uploads and automated publishing.",
        github: "https://github.com/WasanaKarunasena/social-media-scheduler.git"
    },
    {
        img: Portfolio2,
        title: "Multi-Source Research Agent",
        desc: "Aggregates academic papers, news, and blogs, and generates concise AI-powered summaries using <strong>Ollama</strong>. Developed with <strong>FastAPI</strong>, <strong>React</strong>, and <strong>MCP protocol</strong> to deliver an intelligent and user-friendly research assistant.",
        github: "https://github.com/WasanaKarunasena/Multi-Source-Research-Agent.git"
    },
    {
        img: Portfolio3,
        title: "E-Commerce Website",
        desc: "A fully functional e-commerce platform with cart, payment gateway, and admin dashboard built using <strong>React</strong> and <strong>Node.js</strong>.",
        github: "https://github.com/WasanaKarunasena/E-Commerce.git"
    },
    {
        img: Portfolio4,
        title: "Autonomous Travel Planner",
        desc: "An AI-powered travel planner using <strong>Agentic AI</strong>, <strong>React</strong>, <strong>FastAPI</strong>, and <strong>Ollama</strong> to generate personalized trip plans.",
        github: "https://github.com/WasanaKarunasena/Autonomous_travel_planner.git"
    },
    {
        img: Portfolio5,
        title: "Face Detection AI",
        desc: "A real-time face detection app using <strong>Python</strong> and <strong>OpenCV</strong>.",
        github: "https://github.com/WasanaKarunasena/Face-Mask-Detection-model.git"
    },
    {
        img: Portfolio6,
        title: "Dockerized Jupyter Notebook Environment",
        desc: "A lightweight <strong>Python 3.10</strong> Docker container with <strong>Jupyter Notebook</strong>, automated dependency setup, and reproducible environment for data analysis and development.",
        github: "https://github.com/WasanaKarunasena/Data-Science-Notebook.git"
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
                            {/* ✅ render HTML properly */}
                            <p dangerouslySetInnerHTML={{ __html: project.desc }} />
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
