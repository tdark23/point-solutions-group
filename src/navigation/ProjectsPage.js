import React, { useEffect } from "react";
import "./../styles/pages/servicepage.css"
import ProjectsCard from "./../components/projectsComponents/ProjectCard"
import { projects } from "../utils/projects";

function ProjectsPage () {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
      }, []); 
    return (
        <>
            <section className="container-section">
            <div className="service-text-container">
                <h5>
                    Nos
                </h5>
                <h2 className="service-cta-text">
                    projets
                </h2>
                <p>Ici vous pourrez voir quelques projets marquants sur lesquels nous avons travaillé, et vous faire une idée sur notre expertise.</p>
                <div className="space-30px"/>
                <div className="space-30px"/>
                <div className="thin-line"/>
                <div className="space-30px"/>
                <div className="space-30px"/>
                <div className="space-30px"/>
            </div> 
            <ProjectsCard project={projects}/>
        </section>
        </>
    )
}

export default ProjectsPage;