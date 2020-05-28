const express=require('express');
const path=require('path');
const port=8000;

const app=express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (request, response)=>
{
    /* response.send('<h1>this is the html page. it is loaded</h1>'); */
    var options={
        title:"Contact List"
    }
    return response.render('home', options);
});
app.get('/practice', (request, response)=>
{
    var options={
        title:"practice page"
    }
    return response.render('practice', options);
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