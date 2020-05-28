const express=require('express')
const port=8000;

const app=express();




app.get('/profile', (request, response)=>
{
    response.send('<h1>this is the html page. it is loaded</h1>');
});




app.listen(port, function(error)
{
    if(error)
    {
        console.log("error in running the server", error);
    }
    else
    {
        console.log("server is running on the port", port);
    }
});