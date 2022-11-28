import React from 'react';

/* TODO: Translate the below class component to a functional component! */
function Color(props) {
    return (
    <div>
        <button onClick={() => props.handleClick(props.color)}>Post {props.color}</button>
    </div>
    );
}

export default Color;