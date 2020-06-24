import React from 'react';

import axios from 'axios';
import Post from './Post';

class PostList extends React.Component
{
    constructor(props)
    {
        super(props);/* inherit from the parent's class props */
        this.state=
        {
            posts:[]
        }
        this.getPosts();
    }

    getPosts()
    {
        axios.get('http://localhost:8000/api/v1/posts').then((data)=>
        {
            console.log(data);
        });

    }

    render()
    {
        return(
            <div>
                <h1>first app posts</h1>
                <ul>
                    {
                        this.state.posts.map((post)=><Post post={post} key={post._id}></Post>)
                    }
                </ul>
            </div>
        );
    }


};

export default PostList;
