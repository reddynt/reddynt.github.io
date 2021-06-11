import React from 'react';


export const SkillsObject = props => {
    return (
        <div class="skills-object-root">
            <ul>
                {props.skills.map((skill) => <li>{skill}</li>)}
            </ul>
        </div>
    )
}

export default SkillsObject;