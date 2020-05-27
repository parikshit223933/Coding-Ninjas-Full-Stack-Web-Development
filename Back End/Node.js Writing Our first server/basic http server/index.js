const http=require('http');
const port=8000;
const server= http.createServer();

server.listen(port, function(error)
{
    if(error)
    {
        HTMLFormControlsCollection.log(error);
    }
    else
    {
        console.log("server is up and running on the port", port);
    }
});