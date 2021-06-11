import React from 'react';


export const ProjectsObject = props => {
    return (
        <div class="projects-object-root">
            <h5 class="project-title">
                {props.title} &nbsp;
                <a href={props.project_link} target="_blank">view</a>
            </h5>
            <p class="project-brief">
                {props.brief}
            </p>
            <p class="project-tech">
                Tech used: {props.tech}
            </p>
        </div>
    )
}

export default ProjectsObject;
