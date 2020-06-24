import React from 'react';


function Post(props) 
{
    let post_style=
    {
        color:'grey'
    }
    return (
        <li className="PostItem" style={post_style}>
            {props.post.content}
            {props.post.user.name}
        </li>
    );
}

export default Post;
