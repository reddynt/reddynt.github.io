import React from 'react';


export const SocialBarObject = props => {
    return(
        <div class="social-bar-object-root">
            <a target="_blank" href={props.url}>
                {props.name}
            </a>
        </div>
    )
}

export default SocialBarObject;