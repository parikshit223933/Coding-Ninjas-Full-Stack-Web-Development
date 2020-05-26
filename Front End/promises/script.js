var user=false;
var promise=new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        if(user)
        {
            resolve();
        }
        else
        {
            reject();
        }
    }, 1000);
})
promise.then(function()
{
    console.log('done');
}).catch(function()
{
    console.log('failed');
})