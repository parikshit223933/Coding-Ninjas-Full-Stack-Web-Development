const http = require('http');
const fs = require('fs');
const port = 8000;

function requestHandler(request, response)
{
    console.log(request.url);
    response.writeHead(200, { "content-type": "text/html" });
    fs.readFile('./index.html', function (error, data)
        {
            if (error)
            {
                response.end("'index.html' was not found");
                return;
            }
            else
            {
                return response.end(data);
            }
        });
}

const server = http.createServer(requestHandler);

server.listen(port, function (error)
{
    if (error)
    {
        console.log('failed to load the server');
    }
    else
    {
        console.log("server is running on the port", port);
    }
})