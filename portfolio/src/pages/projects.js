import React from "react";
import '../styles/Projects.css';
import { projects } from "../components/data";


const Projects = () => {

    return (
        <div className="project-container">
          <h2>My Projects</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-used">
                    {project.techUsed.map((tech, index) => (
                      <div key={index} className="tech-item">
                        <i className={tech.icon}></i>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Projects;