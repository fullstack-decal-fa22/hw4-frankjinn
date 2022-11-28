import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';
const Feed = () => {
    const [feedList, addPost] = useState([]);
    const updatePost = (newColor) => {
        addPost(arr => [...arr, newColor]);
    } 
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const posts = feedList.map(thisColor => <Block color = {thisColor}></Block>); // TODO: edit this variable

    return (
        <div>
            <Menu handleClick = {updatePost}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;