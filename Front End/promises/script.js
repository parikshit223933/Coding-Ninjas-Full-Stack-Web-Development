/* var user=true;
var promise=new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        if(user)
        {
            resolve('done');
        }
        else
        {
            reject('failed');
        }
    }, 1000);
})
promise.then(function(message)
{
    console.log(message);
}).catch(function(message)
{
    console.log(message);
}) */
//we generally wrap this promise in a function.

var user = true;
function returner()
{
    var promise = new Promise(function (resolve, reject)
    {
        setTimeout(function ()
        {
            if (user)
            {
                resolve('done');
            }
            else
            {
                reject('failed');
            }
        }, 1000);
    });
    return promise;
}

returner().then(function (message)
{
    console.log(message);
}).catch(function (message)
{
    console.log(message);
})