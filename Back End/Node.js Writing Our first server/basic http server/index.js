/* const http = require('http');
const port = 8000;

function requestHandler(request, response)
{
    console.log(request.url);
    if(request.url=="/home")
    {
        response.end("this is the home page");
    }
    else
    {
        response.end("this is some other page");
    }
}

const server = http.createServer(requestHandler);

server.listen(port, function (error)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log("server is up and running on the port", port);
    }
}); */

const http=require('http');
const fs=require('fs');
const port=8000;
function requestHandler(request, response)
{
    console.log(request.url);
    response.writeHead(200, {"content-type":"text/html"});
    fs.readFile('./index.html', function(error, data)
    {
        if(error)
        {
            console.log("error is found", error);
            return response.end('<h1>Error</h1>');
        }
        return response.end(data);
    })
}
const server=http.createServer(requestHandler);

server.listen(port, function(error)
{
    if(error)
    {
        console.log("there is some error");
    }
    else
    {
        console.log("the server is running on the port", port);
    }
});