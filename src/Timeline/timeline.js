import { React } from 'react';
import TimelineObject from './timeline-object';
import './timeline.css';


const Timeline = (props) => {
    return (
        <div id='timeline-root' class='timeline-root'>
            <h3>Timeline</h3>
            <TimelineObject 
                period="2014-2018"
                body="Tata Consultancy Services"
            />
            <TimelineObject 
                period="2018-*"
                body="Accenture"
            />
        </div>
    )
}

export default Timeline;
