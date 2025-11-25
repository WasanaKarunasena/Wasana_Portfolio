import React from "react";
import { Link } from "react-router-dom";
import "./works.css";

// Display images
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import P1Video from "../../assets/p1-demo.mp4";
import P2Video from "../../assets/p2-demo.mp4";
import P3Video from "../../assets/p3-demo.mp4";
import P4Video from "../../assets/p4-demo.mp4";
import P5Video from "../../assets/p5-demo.mp4";
import P6Video from "../../assets/p6-demo.mp4";


// Project data
export const projectData = [
    {
        id: 1,
        img: Portfolio1,
        detailImg: "../../assets/p1-detail.jpg",
        video: P1Video,
        title: "Social Media Scheduler",
        shortDesc:
            "A full-stack scheduler built using <strong>Next.js</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong>.",
        longDesc: `
            <h3>🚀 Social Media Scheduler</h3>
            <p>Smart platform to schedule and manage social media posts.</p>
            <h4>✨ Features</h4>
            <ul>
                <li>Image uploads</li>
                <li>Post scheduling</li>
                <li>Automated publishing</li>
                <li>Calendar UI</li>
            </ul>
            <h4>🛠 Tech</h4>
            <p><strong>Next.js</strong>, <strong>Spring Boot</strong>, <strong>PostgreSQL</strong></p>
        `,
        github: "https://github.com/WasanaKarunasena/social-media-scheduler.git",
    },
    {
        id: 2,
        img: Portfolio2,
        detailImg: "../../assets/p2-detail.jpg",
        video: P2Video,
        title: "Multi-Source Research Agent",
        shortDesc:
            "AI research agent using <strong>FastAPI</strong>, <strong>React</strong>, <strong>Ollama</strong>, and <strong>MCP</strong>.",
        longDesc: `
            <h2>🚀 Multi-Source Research Agent</h2>
            <p>A tool that merges research from papers, news, and blogs into one AI-generated summary.</p>
            <h3>🔍 Sources</h3>
            <ul>
                <li>📄 arXiv papers</li>
                <li>📰 News articles</li>
                <li>✍️ Technical blogs</li>
                <li>🤖 AI summary via Ollama</li>
            </ul>
            <h3>🧠 Why It Exists</h3>
            <p>To save researchers time and provide a unified research overview.</p>
            <h3>⚙️ Tech</h3>
            <p><strong>FastAPI</strong>, <strong>React</strong>, <strong>MCP</strong>, <strong>Ollama</strong></p>
        `,
        github: "https://github.com/WasanaKarunasena/Multi-Source-Research-Agent.git",
    },
    {
    id: 3,
    img: Portfolio3,
    detailImg: "../../assets/p3-detail.jpg",
    video: P3Video,
    title: "E-Commerce Website",
    shortDesc:
        "A fully functional e-commerce platform built using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.",

    longDesc: `
        <h2>🛒 Full-Stack E-Commerce Website</h2>
        <p>
            A complete end-to-end e-commerce application built using 
            <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and 
            <strong>MongoDB</strong>.  
            This project helped me explore the entire development cycle—from frontend UI design to backend 
            architecture, API development, and database modeling.
        </p>

        <h3>✨ Key Features I Implemented</h3>
        <ul>
            <li><strong>Product Management</strong> – Add, update, delete, and list products with images, pricing, categories, and stock control.</li>
            <li><strong>User Management</strong> – JWT authentication, secure login/registration, profile updates, and role-based access (admin/user).</li>
            <li><strong>Order Processing</strong> – Create and track orders, update statuses, calculate totals, and handle full cart-to-checkout flow.</li>
            <li><strong>RESTful API Backend</strong> – Built scalable Express.js APIs with validation, error handling, and clean routing.</li>
            <li><strong>Responsive React Frontend</strong> – Modern UI for browsing products, viewing details, cart management, and placing orders.</li>
            <li><strong>MongoDB Integration</strong> – Structured schemas for products, users, orders, and sessions with fast and optimized queries.</li>
            <li><strong>Performance & Security Enhancements</strong> – Password hashing, API protection, optimized endpoints, and secure workflows.</li>
        </ul>

        <h3>🛠 Tech Stack</h3>
        <p>
            <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, 
            <strong>MongoDB</strong>, <strong>JWT</strong>, <strong>Mongoose</strong>
        </p>
    `,

    github: "https://github.com/WasanaKarunasena/E-Commerce.git",
},

    {
        id: 4,
        img: Portfolio4,
        detailImg: "../../assets/p4-detail.jpg",
        video: P4Video,
        title: "Autonomous Travel Planner",
        shortDesc:
            "AI-based travel planner using <strong>Ollama</strong>, <strong>FastAPI</strong>, and <strong>React</strong>.",
        longDesc: `
            <h2>🌍 Autonomous Travel Planner</h2>
            <p>AI agent generating personalized travel itineraries.</p>
            <h3>✨ Features</h3>
            <ul>
                <li>LLM-generated travel plans</li>
                <li>Weather & location data</li>
                <li>User preference filtering</li>
            </ul>
            <h3>🛠 Tech</h3>
            <p><strong>React</strong>, <strong>FastAPI</strong>, <strong>Ollama</strong></p>
        `,
        github: "https://github.com/WasanaKarunasena/Autonomous_travel_planner.git",
    },
    {
        id: 5,
        img: Portfolio5,
        detailImg: "../../assets/p5-detail.jpg",
         video: P5Video,
       
        title: "Face Mask Detection AI",
        shortDesc:
            "Real-time face mask detection using <strong>Python</strong> & <strong>OpenCV</strong>.",
        longDesc: `
            <h2>👁️ Face Detection AI</h2>
            <p>Detects faces from live webcam feed in real-time.</p>
            <h3>✨ Features</h3>
            <ul>
                <li>Face detection</li>
                <li>Mask detection</li>
                <li>Real-time video processing</li>
            </ul>
            <h3>🛠 Tech</h3>
            <p><strong>Python</strong>, <strong>OpenCV</strong></p>
        `,
        github: "https://github.com/WasanaKarunasena/Face-Mask-Detection-model.git",
    },
   {
    id: 6,
    img: Portfolio6,
    detailImg: "../../assets/p6-detail.jpg",  // replace with your actual image if needed
    video: P6Video, // if you don't have a video, remove this line
    title: "Indoor Localization Using Wi-Fi in Smart Environments",
    shortDesc: 
        "Undergraduate research project achieving <strong>99.79% accuracy</strong> in indoor localization using <strong>Wi-Fi RSSI</strong> values and <strong>machine learning</strong>.",

    longDesc: `
        <h2>📍 Indoor Localization Using Wi-Fi in Smart Environments</h2>
        <p>
            After months of experimentation, real-world data collection, and machine learning model optimization, 
            we developed a cost-effective Wi-Fi–based indoor localization system as part of our 
            <strong>Computer Engineering undergraduate research</strong> at the University of Jaffna.
        </p>

        <h3>🧠 What We Built</h3>
        <p>
            We designed an affordable indoor positioning system using <strong>Wi-Fi RSSI fingerprints</strong> 
            from ESP32 devices and trained multiple ML models to accurately predict user location within a building.
            Instead of relying on expensive hardware, we built our own system using:
        </p>

        <ul>
            <li>5 ESP32 access points</li>
            <li>A mobile ESP32 scanner</li>
            <li>4,861 real Wi-Fi fingerprints</li>
        </ul>

        <h3>✨ Key Highlights</h3>
        <ul>
            <li>✔️ <strong>4,861</strong> fingerprints collected from a real indoor smart environment</li>
            <li>✔️ Preprocessing: outlier removal, normalization, label encoding, correlation analysis</li>
            <li>✔️ ML algorithms: Random Forest, KNN, SVM, Gradient Boosting, MLP</li>
            <li>✔️ Achieved <strong>99.79% accuracy</strong> with Random Forest & Gradient Boosting</li>
            <li>✔️ Cross-validation accuracies above <strong>99%</strong> for all models</li>
            <li>✔️ Near-perfect precision, recall, and F1-scores</li>
            <li>✔️ Proven feasibility using low-cost IoT hardware (ESP32)</li>
        </ul>

        <h3>🏢 Why This Research Matters</h3>
        <p>Indoor localization is crucial in:</p>
        <ul>
            <li>Smart buildings & home automation</li>
            <li>Hospitals & asset tracking</li>
            <li>Mall, campus & airport navigation</li>
            <li>Industrial automation & robotics</li>
            <li>IoT-based context-aware systems</li>
        </ul>

        <p>
            Our research demonstrates that high-accuracy indoor localization can be achieved 
            <strong>without expensive infrastructure</strong> — 
            using only ESP32 devices and machine learning.
        </p>

        <h3>🛠 Tech Stack</h3>
        <p>
            <strong>ESP32</strong>, <strong>Python</strong>, <strong>Scikit-learn</strong>, 
            <strong>Pandas</strong>, <strong>NumPy</strong>
        </p>
    `,
    
    github: "https://github.com/WasanaKarunasena/Indoor-Localization-Using-Wi-Fi-Research.git", 
},

];

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">
                A showcase of my work — full-stack development, AI/ML, automation & more.
            </span>

            <div className="worksGrid">
                {projectData.map((project) => (
                    <div key={project.id} className="projectCard">
                        <img src={project.img} alt={project.title} className="projectImg" />

                        <div className="projectContent">
                            <h3>{project.title}</h3>

                            <p dangerouslySetInnerHTML={{ __html: project.shortDesc }} />

                            <Link to={`/projects/${project.id}`} className="viewBtn">
                                View Project
                            </Link>

                            <a
                                href={project.github}
                                className="githubBtn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
