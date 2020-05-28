const http = require('http');
const fs = require('fs');
const port = 8000;

function requestHandler(request, response)
{
    console.log(request.url)

    if (request.url == "/")
    {
        response.writeHead(200, { "content-type": "text/html" });
        fs.readFile('./index.html', function (error, data)
        {
            if (error)
            {
                return response.end("there was anerror in opening the page!");
            }
            else
            {
                return response.end(data);
            }
        });
    }
    else if (request.url == "/style.css")
    {
        response.writeHead(200, { "content-type": "text/css" });
        fs.readFile('./style.css', function (error, data)
        {
            if (error)
            {
                return response.end("there was an error in opening the css file!");
            }
            else
            {
                return response.end(data);
            }
        });
    }
}

const server = http.createServer(requestHandler);

server.listen(port, function (error)
{
    if (error)
    {
        console.log("there was an error in starting the server!");
    }
    else
    {
        console.log("server is up and runnin on port", port);
    }
})