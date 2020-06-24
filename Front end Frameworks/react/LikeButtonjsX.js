import React from 'react';

class LikeButton extends React.Component
{
    render()
    {
        return (
            <button>
                Like
            </button>
        );
    }
};


const app=document.getElementById('app');
ReactDOM.render(<LikeButton/>, app)