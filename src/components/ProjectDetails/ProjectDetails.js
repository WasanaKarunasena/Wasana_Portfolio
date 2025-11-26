// src/components/ProjectDetailsPage/ProjectDetailsPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../Works/works";
import "./ProjectDetails.css";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectData.find((p) => p.id === parseInt(id));
    const [isMaximized, setIsMaximized] = useState(true);

    if (!project) return <p>Project not found</p>;

    return (
        <div className="detailsPageOverlay">
            <div className={`detailsPageContainer ${isMaximized ? "maximized" : "restored"}`}>
                <button className="closeBtn" onClick={() => navigate(-1)}>
                    ×
                </button>

                <button className="maximizeBtn" onClick={() => setIsMaximized(!isMaximized)}>
                    {isMaximized ? "🗗" : "🗖"}
                </button>

                <div className="mediaSection">
                    {project.video ? (
                        <video
                            src={project.video}
                            controls
                            autoPlay={false}
                            className="detailsVideo"
                        />
                    ) : (
                        <img
                            src={project.detailImg}
                            alt={project.title}
                            className="detailsImg"
                        />
                    )}
                </div>

                <div className="contentSection">
                    <h1 className="detailsTitle">{project.title}</h1>
                    <div
                        className="detailsDesc"
                        dangerouslySetInnerHTML={{ __html: project.longDesc }}
                    />
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="githubBtn"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
