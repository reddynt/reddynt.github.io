import React from 'react';
import SkillsObject from './skills-object';


export const Skills = props => {
    return (
        <div id='skills-root' class='skills-root'>
            <h3>Skills</h3>
            <SkillsObject 
                skills={['Python', 'JavaScript', 'Machine learning', 'Deep learning', 'React']}
            />
        </div>
    )
}
