import React from 'react';


export const TimelineObject = props => {
    return (
        <div class="timeline-object-root">
            <h4 class='timeline-object-period'>
                {props.period}
            </h4>
            <p class='timeline-object-period-body'>
                {props.body}
            </p>
        </div>
    )
}

export default TimelineObject;