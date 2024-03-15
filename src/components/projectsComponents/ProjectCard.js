import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./../../styles/components/projectcard.css";
// utiliser swiper ici pour le slider sur les projets. Un slider de cartes

const ProjectCard = ({ project }) => {
  return (
    <>
      {project.map((project) => (
        <div className="projects-flex">
        <Link className="projects-link-wrapper" to={project.project_link}>
          <img className="project-image" src={project.project_image} alt="project" />
          <div className="projects-details-flex">
            <div className="projects-text-flex">
              <h3 className="caps"> {project.project_title} </h3>
              <div className="badge">
                <h5>{project.project_category}</h5>
              </div>
            </div>
            <div className="button-flex link-wrapper-animation">
              <h5 className="details">VOIR LES DETAILS</h5>
              <MdKeyboardDoubleArrowRight className="doublearrow" />
            </div>
          </div>
        </Link>
      </div>
      ))}
    </>
  );
};

export default ProjectCard;
