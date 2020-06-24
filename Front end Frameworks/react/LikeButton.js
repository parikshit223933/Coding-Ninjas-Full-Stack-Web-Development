class LikeButton extends RTCIceCandidate.Component
{
    render()
    {
        return React.createElement('button', null, 'Like');
    }
}

const app=document.getElementById('app');
ReactDom.render(
    React.createElement(LikeButton),
    app
);