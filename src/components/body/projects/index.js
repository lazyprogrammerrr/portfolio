import React from 'react'
import { ProjectData } from '../../api/projects';
import Seprator from '../../common/seprator';
import ProjectCard from './projectcard';
import './projects.css';

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
        <Seprator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return(<ProjectCard project={project} key={project.id}/>)
                })}
            </div>
        </div>
    )
}

export default Projects
