import { React } from 'react';
import SocialBarObject from './social-bar-object';
import './social-bar.css';


export const SocialBar = props => {
    return (
        <div id='social-bar-root' class='social-bar-root'>
            <h3>Reach me</h3>
            <SocialBarObject 
                name="Github" url="https://github.com/reddynt"
            />
            <SocialBarObject 
                name="LinkedIn" url="https://www.linkedin.com/in/tharunreddy-n/"
            />
        </div>
    )
}