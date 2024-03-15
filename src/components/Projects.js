import React from "react";
import "./../styles/components/projects.css";
import ProjectCard from "./projectsComponents/ProjectCard";
import { projects } from "../utils/projects";

const Projects = () => {
  
  return (
    <>
      <div className="space-112px" />
      <div className="title-text-block">
        <h5>nos</h5>
        <h2 className="cta-text">projets</h2>
      </div>
      <div className="space-92px" />
      <div className="project-list-container">
        <div className="projects-wrapper" role="list">
          <ProjectCard project={projects} />
        </div>
      </div>
      <div className="space-112px" />
    </>
  );
};

export default Projects;
