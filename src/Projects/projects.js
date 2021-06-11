import React from 'react';
import ProjectsObject from './projects-object';


export const Projects = props => {
    return (
        <div>
            <h3>Projects</h3>
            <ProjectsObject 
                title="Realtime RSVP Visualization"
                brief="meetup.com 's RSVP requests visualization."
                tech="Bigdata Spark, Python Flask, D3.js, Kafka"
                project_link="https://github.com/reddynt/real-time-viz-app"
            />
        </div>
    )
}
